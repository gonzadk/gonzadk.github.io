import { FunctionComponent } from 'react'

/** Renders `**bold**` segments of a string as <b>. */
export const RichText: FunctionComponent<{ text: string }> = ({ text }) => (
  <>{text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : part))}</>
)
