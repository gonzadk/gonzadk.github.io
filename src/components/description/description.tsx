import './description.scss';

import React, { FunctionComponent, useEffect, useState } from 'react';

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
    <div id="description" className="generic-scroll-reveal description-container section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-content">
                <p>{currentPresentation}</p>
              </div>

              <div className="card-action">
                <div className="description-btn">
                  <a
                    href="../../../assets/pdf/Resume Gonzalo Terzano - English.pdf"
                    target="_blank"
                    className="btn waves-effect"
                  >
                    Download Resume
                  </a>
                  <a href="#contact" className="btn waves-effect">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
