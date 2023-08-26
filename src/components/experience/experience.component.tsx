import React, { FunctionComponent, useContext } from 'react'

import { ResumeContext } from '../../contexts'
import { LinkIcon } from '../link-icon/link-icon.component'

export const Experience: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext)

  return (
    <section
      id="experience"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Work experience"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Experience
        </h2>
      </div>

      <div>
        <ol className="group/list">
          {resumeContext.experience.map((experience) => (
            <li className="mb-12" key={experience.company}>
              <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                  aria-label="2018 to Present"
                >
                  {experience.timeline}
                </header>
                <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                    <div>
                      <a
                        className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                        href={experience.website}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Lead Engineer at Upstatement"
                      >
                        <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block" />
                        <span>
                          {experience.role} at {experience.company}
                          <LinkIcon />
                        </span>
                      </a>
                    </div>
                  </h3>

                  <div className="mt-2 text-sm leading-normal">
                    {experience.description.map((descriptionParagraph) => (
                      <p className="mb-2 text-slate-400" key={descriptionParagraph}>
                        {descriptionParagraph}
                      </p>
                    ))}
                  </div>

                  <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                    {experience.skills.map((skill) => (
                      <li className="mr-1.5 mt-2" key={skill}>
                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                          {skill}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-12">
          <a
            className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
            aria-label="View Full Resume"
            href="../../../assets/pdf/Resume Gonzalo Terzano - English.pdf"
            target="_blank"
          >
            <span className="border-b border-transparent pb-px transition group-hover:text-slate-200 group-hover:border-teal-300 motion-reduce:transition-none">
              View Full Resume
            </span>

            <span className="whitespace-nowrap group-hover:text-slate-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                aria-hidden="true"
              >
                <path d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
