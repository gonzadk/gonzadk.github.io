import { FunctionComponent } from 'react'

const DIGITS = '0123456789'.split('')

export const Odometer: FunctionComponent<{ value: string }> = ({ value }) => (
  <div className="year" role="text" aria-label={value}>
    {value.split('').map((d, i) => (
      <span className="d" key={i} aria-hidden>
        <span style={{ transform: `translateY(${-Number(d) * 10}%)` }}>
          {DIGITS.map((n) => (
            <i key={n}>{n}</i>
          ))}
        </span>
      </span>
    ))}
  </div>
)
