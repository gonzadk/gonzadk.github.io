import React, { FunctionComponent, useEffect, useState } from 'react';

import { Card } from 'shared-components/card/card.component';

import './description.component.scss';

const DELAY = 5;

const PRESENTATION =
  `With over 8 years of experience in software engineering,
  I have a wealth of knowledge and expertise in developing and delivering high-performance,
  scalable, and secure applications. I am a Senior Software Engineer focused on Frontend side,
  with a deep understanding of modern technologies, architecture patterns, and software development methodologies.
  My experience has given me the ability to lead and mentor teams, work collaboratively with cross-functional teams,
  and deliver projects on time and on budget. I am always seeking new opportunities to learn, grow,
  and make a positive impact on the projects and teams I work with. My ultimate goal is to deliver innovative
  and user-friendly software solutions that exceed the expectations of my clients and stakeholders.`

export const Description: FunctionComponent = () => {
  const [currentPresentation, setCurrentPresentation] = useState('');
  const [remainingText, setRemainingText] = useState(PRESENTATION);

  useEffect(() => {
    constructDescription()
  }, [remainingText]);

  const constructDescription = () => {
    if (remainingText.length) {
      setTimeout(() => {
        setCurrentPresentation(currentPresentation + remainingText[0]);

        setRemainingText(remainingText.slice(1));
      }, DELAY);
    }
  }

  return (
    <Card className="description generic-scroll-reveal">
      <section className="description__text">
        <p>{currentPresentation}</p>
      </section>

      <section className="description__buttons-container">
        <a
          href="../../../assets/pdf/Resume Gonzalo Terzano - English.pdf"
          target="_blank"
          className="description__button"
        >
          Download Resume
        </a>
      </section>
    </Card>
  );
};
