import './description.scss';

import React, { FunctionComponent, useEffect, useState } from 'react';

const DELAY = 5;

const PRESENTATION =
  "I'm a 29 years old Sr Frontend Developer from Argentina and currently based in " +
  'Córdoba. I enjoy working on extensive teams and sharing my knowledge in order to ' +
  'help other people to achieve professional success. I am currently focused on ' +
  'improving my leadership skills and I am also an amateur basketball player.';

export const Description: FunctionComponent = () => {
  const [currentPresentation, setCurrentPresentation] = useState('');

  useEffect(() => {
    setCurrentPresentation(PRESENTATION);
  }, []);

  const autoWrite = (text: string) => {
    if (text.length) {
      setTimeout(() => {
        setCurrentPresentation(currentPresentation + text[0]);
        const newText = text.slice(1);

        autoWrite(newText);
      }, DELAY);
    }
  };

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
