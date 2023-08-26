import React, { FunctionComponent, useEffect, useState } from 'react'
import { AboutMe, Education, Experience, HeaderLinks, Navigation, Presentation } from '..'

export const MainWrapper: FunctionComponent = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const handleMouseMove = (event: MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY })
  }

  return (
    <section
      className="w-full h-[100vh] bg-background"
      style={{
        background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <section className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
        <section className="lg:flex lg:justify-between lg:gap-4">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              <Presentation />
              <Navigation />
            </div>

            <HeaderLinks />
          </header>

          <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
            <AboutMe />

            <Experience />
            <Education />
          </main>
        </section>
      </section>
    </section>
  )
}
