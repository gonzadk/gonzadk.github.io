import React, { FunctionComponent, MouseEvent, useState } from 'react'
import classNames from 'classnames'

interface Section {
  id: string
  label: string
}

const NAVIGATION_SECTIONS: Section[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
]

export const Navigation: FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState('')

  const scrollToSection = (section: Section) => {
    const element = document.getElementById(section.id)

    element && element.scrollIntoView({ behavior: 'smooth' })
  }

  const handleLinkClick = (event: MouseEvent<HTMLAnchorElement>, section: Section) => {
    event.preventDefault()

    // setActiveSection(section.label);
    scrollToSection(section)
  }

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {NAVIGATION_SECTIONS.map((section) => (
          <li key={section.id}>
            <a
              className="group flex items-center py-3"
              href={`#${section.id}`}
              onClick={(event) => handleLinkClick(event, section)}
            >
              <span
                className={classNames(
                  'nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none',
                  { 'w-16 bg-slate-200': activeSection === section.label }
                )}
              />
              <span
                className={classNames(
                  'nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200',
                  {
                    'text-slate-200': activeSection === section.label,
                    'text-slate-500': activeSection !== section.label,
                  }
                )}
              >
                {section.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
