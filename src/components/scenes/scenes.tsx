import { ReactNode } from 'react'

import { TResume } from 'contexts'
import { GlassCard } from '../glass-card/glass-card.component'
import { RichText } from '../rich-text/rich-text.component'

export type Scene = {
  key: string
  /** Year shown on the odometer while this scene is in focus. */
  year: string
  /** Label under the odometer and in the rail. */
  label: string
  /** Horizontal offset as a fraction of the viewport width (desktop only). */
  x: number
  /** Big outlined year floating behind the scene. */
  ghost?: string
  inRail: boolean
  content: ReactNode
}

const domain = (url: string) => url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')

export const buildScenes = (resume: TResume, photo: string): Scene[] => {
  const { aboutMe, profile, impact, experience, education } = resume
  const now = String(new Date().getFullYear())
  let prevYear = now
  // Alternate sides so the camera zig-zags through the tunnel.
  let side = -1
  const next = () => (side *= -1) * -0.2

  const scenes: Scene[] = [
    {
      key: 'intro',
      year: now,
      label: 'Present',
      x: 0,
      inRail: true,
      content: (
        <header className="hero">
          <div className="avatar">
            <img src={photo} alt={aboutMe.name} />
          </div>
          <div className="eyebrow">{aboutMe.position}</div>
          <h1>
            {aboutMe.name.split(' ')[0]}
            <span>{aboutMe.name.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p>{aboutMe.description}</p>
        </header>
      ),
    },
    {
      key: 'profile',
      year: now,
      label: 'Profile',
      x: next(),
      inRail: false,
      content: (
        <GlassCard className="about" meta="00 — Profile" badge="● Open to conversations">
          <h2>{profile.title}</h2>
          <p>{profile.lead}</p>
          <p>{profile.body}</p>
        </GlassCard>
      ),
    },
    {
      key: 'impact',
      year: now,
      label: 'Impact',
      x: next(),
      inRail: false,
      content: (
        <GlassCard meta="01 — Impact" badge="Shipped">
          <div className="stats">
            {impact.map((i) => (
              <div key={i.value}>
                <div className="big">{i.value}</div>
                <div className="cap">{i.caption}</div>
              </div>
            ))}
          </div>
        </GlassCard>
      ),
    },
  ]

  experience.forEach((job) => {
    scenes.push({
      key: job.company,
      year: job.startYear,
      label: job.company,
      x: next(),
      ghost: job.startYear !== prevYear ? job.startYear : undefined,
      inRail: true,
      content: (
        <GlassCard
          meta={job.timeline}
          badge={
            job.current ? (
              '● Now'
            ) : (
              <a href={job.website} target="_blank" rel="noopener noreferrer">
                {domain(job.website)}
              </a>
            )
          }
        >
          <h2>{job.company}</h2>
          <h3>{job.role}</h3>
          <ul>
            {job.highlights.map((h) => (
              <li key={h}>
                <RichText text={h} />
              </li>
            ))}
          </ul>
          <div className="tags">
            {job.skills.map((s) => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </GlassCard>
      ),
    })
    prevYear = job.startYear
  })

  const eduYears = education.flatMap((e) => e.timeline.match(/\d{4}/g) ?? []).sort()
  const [firstYear, lastYear] = [eduYears[0], eduYears[eduYears.length - 1]]
  const eduStart = education[0].timeline.match(/\d{4}/)?.[0] ?? firstYear

  scenes.push(
    {
      key: 'education',
      year: eduStart,
      label: 'Education',
      x: next(),
      ghost: eduStart,
      inRail: true,
      content: (
        <GlassCard meta={`${firstYear} — ${lastYear}`} badge="San Juan, AR">
          <h2>Origin</h2>
          <h3>National University of San Juan</h3>
          <ul>
            {education.map((e) => (
              <li key={e.title}>
                <b>{e.title}</b> — {e.place.split(' - ').pop()}, {e.timeline}
              </li>
            ))}
          </ul>
        </GlassCard>
      ),
    },
    {
      key: 'contact',
      year: now,
      label: 'Back to now',
      x: 0,
      inRail: true,
      content: (
        <footer className="contact">
          <div className="eyebrow">End of rewind · Let’s build what’s next</div>
          <a className="mail" href={`mailto:${aboutMe.email}`}>
            {aboutMe.email.split('@')[0]}
            <br />@{aboutMe.email.split('@')[1]}
          </a>
          <div className="row">
            {aboutMe.links.map((l) => (
              <a
                key={l.href}
                className="pill"
                href={l.href}
                {...(l.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {l.label}
              </a>
            ))}
          </div>
        </footer>
      ),
    }
  )

  return scenes
}
