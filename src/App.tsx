import 'materialize-css/dist/css/materialize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import React from 'react';
import ScrollReveal from 'scrollreveal'

import AboutMe from './components/AboutMe/AboutMe';
import Description from './components/Description/Description';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import HeaderParticles from './components/HeaderParticles/HeaderParticles';
import LeftMenu from './components/LeftMenu/LeftMenu';
import PreLoading from './components/PreLoading/PreLoading';
import Skills from './components/Skills/Skills';
import Interest from './components/Interest/Interest';

const REVEAL_TIMEOUT = 1500;
type AppProps = {};
type AppState = {
  isLoading: boolean
};
class AppComponent extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);

    this.state = { isLoading: true };
    setTimeout(() => {
      this.setState(() => ({ isLoading: false }));
      const scrollReveal = ScrollReveal();
      scrollReveal.reveal('.generic-scroll-reveal', {duration: 1100});
      scrollReveal.reveal('.about-me-container', {duration: 1400, distance: '150px'});
      scrollReveal.reveal('.skillbar-bar', {duration: 1800, delay: 300, distance: '0'});
    }, REVEAL_TIMEOUT);

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
        <Interest/>
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

export default AppComponent;
