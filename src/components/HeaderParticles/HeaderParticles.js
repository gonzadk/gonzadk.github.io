require('./HeaderParticles.scss');

import React from 'react';
import Particles from 'particlesjs';


class HeaderParticles extends React.Component {
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
        <canvas id="particle-js" className="particles-canvas"></canvas>
      </section>
    );
  }
}

HeaderParticles.defaultProps = {};

export default HeaderParticles;