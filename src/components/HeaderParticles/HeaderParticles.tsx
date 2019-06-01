import './HeaderParticles.scss';

import React from 'react';
// @ts-ignore
import Particles from 'particlesjs';

type HeaderParticlesProps = {};
type HeaderParticlesState = {};
class HeaderParticles extends React.Component<HeaderParticlesProps, HeaderParticlesState> {
  componentDidMount() {
    Particles.init({
      connectParticles: true,
      color: ['#1976d2', '#404B69', '#DBEDF3'],
      maxParticles: 200,
      selector: '#particle-js',
      speed: 0.9
    });
  }

  render() {
    return (
      <section className="particle-container">
        <canvas id="particle-js" className="particles-canvas"/>
      </section>
    );
  }
}

export default HeaderParticles;
