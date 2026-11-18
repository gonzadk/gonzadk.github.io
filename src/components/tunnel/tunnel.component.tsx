import {
  CSSProperties,
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { ResumeContext } from 'contexts'
import { Aurora, AuroraInputs } from '../aurora/aurora.component'
import { Hud, HudHandle } from '../hud/hud.component'
import { buildScenes } from '../scenes/scenes'

/** Distance between scenes along the Z axis, in px. */
const GAP = 1500
const MOBILE = 760

const reducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches

export const Tunnel: FunctionComponent = () => {
  const resume = useContext(ResumeContext)
  const scenes = useMemo(() => buildScenes(resume, 'images/profile.jpg'), [resume])
  const rail = useMemo(
    () => scenes.flatMap((s, index) => (s.inRail ? [{ index, label: s.label }] : [])),
    [scenes]
  )

  const [active, setActive] = useState(0)
  const [flat] = useState(reducedMotion)
  const worldRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLElement | null)[]>([])
  const hudRef = useRef<HudHandle>(null)
  const aurora = useRef<AuroraInputs>({ progress: 0, mx: 0, my: 0 })

  useEffect(() => {
    document.documentElement.classList.toggle('flat', flat)
    if (flat) return

    let cam = 0
    let mx = 0
    let my = 0
    let tmx = 0
    let tmy = 0
    let last = performance.now()
    let lastIdx = -1
    let raf = 0

    const onPointer = (e: PointerEvent) => {
      tmx = e.clientX / innerWidth - 0.5
      tmy = e.clientY / innerHeight - 0.5
    }
    addEventListener('pointermove', onPointer)

    const frame = (now: number) => {
      // Frame-rate independent easing.
      const dt = Math.min(0.1, (now - last) / 1000)
      last = now
      const kCam = 1 - Math.pow(0.925, dt * 60)
      const kMouse = 1 - Math.pow(0.95, dt * 60)

      const steps = Math.min(scrollY / innerHeight, scenes.length - 1)
      cam += (steps * GAP - cam) * kCam
      mx += (tmx - mx) * kMouse
      my += (tmy - my) * kMouse

      // Rotate around the focused scene: translate first, then rotate.
      worldRef.current!.style.transform = `rotateY(${mx * 5}deg) rotateX(${-my * 4}deg) translate3d(0,0,${cam}px)`

      const W = innerWidth
      itemRefs.current.forEach((el, i) => {
        if (!el) return
        const z = -i * GAP
        const rel = z + cam // 0 = in focus, > 0 = already behind the camera
        let op = rel > 0 ? 1 - rel / 380 : 1 + rel / (GAP * 1.12)
        op = Math.pow(Math.max(0, op), 2.2)
        const x = W < MOBILE ? 0 : scenes[i].x * 0.7 * W
        el.style.transform = `translate3d(${x}px, ${Math.sin(rel / 900) * 20}px, ${z}px)`
        el.style.opacity = op.toFixed(3)
        el.style.visibility = op < 0.01 ? 'hidden' : 'visible'
        el.style.pointerEvents = Math.abs(rel) < GAP * 0.5 ? 'auto' : 'none'
        el.style.filter =
          rel < -GAP * 0.6 ? `blur(${Math.min(6, (-rel - GAP * 0.6) / 300)}px)` : 'none'
      })

      const progress = steps / (scenes.length - 1)
      aurora.current = { progress, mx, my }
      hudRef.current?.setProgress(progress, cam)

      const idx = Math.max(0, Math.min(scenes.length - 1, Math.round(cam / GAP)))
      if (idx !== lastIdx) setActive((lastIdx = idx))

      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      removeEventListener('pointermove', onPointer)
    }
  }, [scenes, flat])

  const jump = (index: number) => {
    const target = index < 0 ? Math.min(active + 1, scenes.length - 1) : index
    if (flat) itemRefs.current[target]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    else scrollTo({ top: target * innerHeight, behavior: 'smooth' })
  }

  const scene = scenes[active]
  const activeRail = rail.filter((r) => r.index <= active).pop()?.index ?? 0

  return (
    <>
      <Aurora inputs={aurora} />
      <div className="vignette" aria-hidden />
      <div className="noise" aria-hidden />

      <Hud
        ref={hudRef}
        name={resume.aboutMe.name}
        role={resume.aboutMe.shortRole}
        location={resume.aboutMe.location}
        year={scene.year}
        label={scene.label}
        atEnd={active === scenes.length - 1}
        rail={rail}
        activeRail={activeRail}
        onJump={jump}
      />

      <main className="stage">
        <div className="world" ref={worldRef}>
          {scenes.map((s, i) => (
            <section
              key={s.key}
              className="item"
              ref={(el) => {
                itemRefs.current[i] = el
              }}
              aria-label={s.label}
            >
              {s.ghost && (
                <div
                  className="ghost"
                  aria-hidden
                  style={{ '--gx': `${s.x * -1.6 * 100}vw` } as CSSProperties}
                >
                  {s.ghost}
                </div>
              )}
              {s.content}
            </section>
          ))}
        </div>
      </main>

      {/* Scroll track: one snap point per scene drives the camera. */}
      <div className="spacer" aria-hidden>
        {scenes.map((s) => (
          <i key={s.key} />
        ))}
      </div>
    </>
  )
}
