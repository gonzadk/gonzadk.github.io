import React, { FunctionComponent, useEffect, useState } from 'react';

import { Card } from '@shared-components/card/card.component';

import './description.component.scss';

const DELAY = 5;

const PRESENTATION =
  "I'm a 30 years old Sr Full Stack Developer (with Front End focus). " +
  "I'm from Argentina and currently living in Córdoba. " +
  'I enjoy working on extensive teams and sharing my knowledge in order to help other people to achieve professional success. ' +
  'I am currently focused on improving my leadership skills and I am also an amateur basketball player. ';

export const Description: FunctionComponent = () => {
  const [currentPresentation, setCurrentPresentation] = useState('');
  const [remainingText, setRemainingText] = useState(PRESENTATION);

  useEffect(() => {
    if (remainingText.length) {
      setTimeout(() => {
        setCurrentPresentation(currentPresentation + remainingText[0]);

        setRemainingText(remainingText.slice(1));
      }, DELAY);
    }
  }, [remainingText]);

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

        <a href="#about-me" className="description__button">
          Contact Me
        </a>
      </section>
    </Card>
  );
};
