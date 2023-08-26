import React, { FunctionComponent, useContext } from 'react'
import { ResumeContext } from '../../contexts'

export const AboutMe: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext)

  return (
    <section
      id="about"
      className="mb-12 scroll-mt-16 md:mb-20 lg:mb-32 lg:scroll-mt-24"
      aria-label="About me"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          About
        </h2>
      </div>

      <div>
        {resumeContext.description.map((descriptionParagraph) => (
          <p className="mb-4 text-slate-400" key={descriptionParagraph}>
            {descriptionParagraph}
          </p>
        ))}
      </div>
    </section>
  )
}
