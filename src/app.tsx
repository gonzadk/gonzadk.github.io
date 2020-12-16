import 'materialize-css/dist/css/materialize.css';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.scss';

import React from 'react';
import ScrollReveal from 'scrollreveal';

import { AboutMe } from 'components/about-me/about-me';
import { Description } from 'components/description/description';
import { HeaderParticles } from 'components/header-particles/header-particles';
import { LeftMenu } from 'components/left-menu/left-menu';
import { PreLoading } from 'components/pre-loading/pre-loading';
import { Skills } from 'components/skills/skills';
import { Interest } from 'components/interest/interest';
import { Contact } from 'components/contact/contact';
import { Experience } from 'components/experience/experience';
import { Education } from 'components/education/education';

const REVEAL_TIMEOUT = 1500;

type AppState = {
  isLoading: boolean;
};

class AppComponent extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    this.state = { isLoading: true };
    setTimeout(() => {
      this.setState(() => ({ isLoading: false }));
      const scrollReveal = ScrollReveal();
      scrollReveal.reveal('.generic-scroll-reveal', { duration: 1100 });
      scrollReveal.reveal('.about-me-container', { duration: 1400, distance: '150px' });
      scrollReveal.reveal('.skillbar-bar', { duration: 1800, delay: 300, distance: '0' });
    }, REVEAL_TIMEOUT);
  }

  getPageContent() {
    return this.state.isLoading ? null : (
      <section>
        <LeftMenu />
        <header>
          <HeaderParticles />
          <AboutMe />
        </header>
        <Description />
        <Experience />
        <Skills />
        <Education />
        <Interest />
        <Contact />
      </section>
    );
  }

  render() {
    return (
      <section>
        <PreLoading isLoading={this.state.isLoading} />
        {this.getPageContent()}
      </section>
    );
  }
}

export default AppComponent;
