import { FunctionComponent, PointerEvent, ReactNode } from 'react'

type Props = {
  children: ReactNode
  meta: ReactNode
  badge?: ReactNode
  className?: string
}

export const GlassCard: FunctionComponent<Props> = ({ children, meta, badge, className = '' }) => {
  const onPointerMove = (e: PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect()
    e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`)
    e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`)
  }

  return (
    <article className={`card ${className}`} onPointerMove={onPointerMove}>
      <span className="sheen" aria-hidden />
      <div className="meta">
        <span>{meta}</span>
        {badge && <b>{badge}</b>}
      </div>
      {children}
    </article>
  )
}
