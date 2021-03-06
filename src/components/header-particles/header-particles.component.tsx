import React, { FunctionComponent, useEffect } from 'react';
// @ts-ignore
import Particles from 'particlesjs';

import './header-particles.component.scss';

export const HeaderParticles: FunctionComponent = () => {
  useEffect(() => {
    Particles.init({
      color: ['#1976d2', '#404B69', '#DBEDF3'],
      connectParticles: true,
      maxParticles: 200,
      selector: '#particle-js',
      speed: 0.9,
    });
  }, []);

  return (
    <section className="particle-container">
      <canvas id="particle-js" className="particles-canvas" />
    </section>
  );
};
