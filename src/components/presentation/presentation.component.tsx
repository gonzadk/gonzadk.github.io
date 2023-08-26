import React, { FunctionComponent, useContext } from 'react'

import { ResumeContext } from 'contexts'

export const Presentation: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext)

  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        {resumeContext.aboutMe.name}
      </h1>

      <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
        {resumeContext.aboutMe.position}
      </h2>

      <p className="mt-4 max-w-xs leading-normal text-slate-400">
        {resumeContext.aboutMe.description}
      </p>
    </>
  )
}
