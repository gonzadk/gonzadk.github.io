require('materialize-css/dist/css/materialize.css');
require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('styles/App.scss');

import React from 'react';
import ScrollReveal from 'scrollreveal'

import AboutMe from './AboutMe/AboutMe';
import Description from './Description/Description';
import Education from './Education/Education';
import Experience from './Experience/Experience';
import HeaderParticles from './HeaderParticles/HeaderParticles';
import LeftMenu from './LeftMenu/LeftMenu';
import PreLoading from './PreLoading/PreLoading';
import Skills from './Skills/Skills';

// let yeomanImage = require('../images/yeoman.png');
// <img src={yeomanImage} alt="Yeoman Generator" />

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
    setTimeout(() => {
      this.setState(() => ({ isLoading: false }));
      const scrollreveal = ScrollReveal();
      scrollreveal.reveal('.generic-scroll-reveal', {duration: 1100});
      scrollreveal.reveal('.about-me-container', {duration: 1400, distance: '150px'});
      scrollreveal.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});
    }, 1500);

  }

  getHeader() {
    return this.state.isLoading ? null : (
      <section>
        <LeftMenu/>
        <header>
          <HeaderParticles/>
          <AboutMe/>
        </header>
        <Description/>
        <Experience/>
        <Skills/>
        <Education/>
      </section>
    );
  }
  
  render() {
    return (
      <section>
          <PreLoading isLoading={this.state.isLoading}/>
          {this.getHeader()}
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
