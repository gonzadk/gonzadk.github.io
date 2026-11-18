import { forwardRef, useImperativeHandle, useRef } from 'react'

import { Odometer } from './odometer.component'

export type HudHandle = {
  setProgress: (p: number, z: number) => void
}

type Props = {
  name: string
  role: string
  location: string
  year: string
  label: string
  atEnd: boolean
  rail: { index: number; label: string }[]
  activeRail: number
  onJump: (index: number) => void
}

/** Fixed overlay. Per-frame values (progress, depth) are written imperatively to avoid re-renders. */
export const Hud = forwardRef<HudHandle, Props>(
  ({ name, role, location, year, label, atEnd, rail, activeRail, onJump }, ref) => {
    const progressRef = useRef<HTMLElement>(null)
    const coordsRef = useRef<HTMLDivElement>(null)

    useImperativeHandle(ref, () => ({
      setProgress(p, z) {
        if (progressRef.current) progressRef.current.style.width = `${p * 100}%`
        if (coordsRef.current)
          coordsRef.current.textContent = `Z ${String(Math.round(z)).padStart(5, '0')} · ${location}`
      },
    }))

    return (
      <>
        <div className="hud tl">
          <span className="mk">GT</span>
          <span>
            {name}
            <br />
            <span className="faint">{role}</span>
          </span>
        </div>
        <div className="hud tr">
          <Odometer value={year} />
          <div className="lbl">{label}</div>
        </div>
        <div className="hud bl" ref={coordsRef}>
          Z 00000 · {location}
        </div>
        <button
          className="hud br"
          onClick={() => onJump(atEnd ? 0 : -1)}
          aria-label={atEnd ? 'Back to top' : 'Next'}
        >
          <span className="m" />
          <span>{atEnd ? 'Back to top ↑' : 'Scroll to rewind'}</span>
        </button>
        <nav className="rail" aria-label="Timeline">
          {rail.map((r) => (
            <button
              key={r.index}
              className={r.index === activeRail ? 'on' : ''}
              onClick={() => onJump(r.index)}
            >
              <i />
              <span>{r.label}</span>
            </button>
          ))}
        </nav>
        <div className="progress">
          <i ref={progressRef} />
        </div>
      </>
    )
  }
)
