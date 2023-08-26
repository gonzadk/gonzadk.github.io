import React, { FunctionComponent, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { ResumeContext } from '../../contexts'

export const HeaderLinks: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext)

  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      {resumeContext.aboutMe.links.map((link) => (
        <li className="mr-5 text-xs" key={link.href}>
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-slate-200"
          >
            <FontAwesomeIcon color="#d9e3fb" size="2xl" icon={link.icon} />
          </a>
        </li>
      ))}
    </ul>
  )
}
