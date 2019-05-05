require('materialize-css/dist/css/materialize.css');
require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('styles/App.scss');

import React from 'react';
import ScrollReveal from 'scrollreveal'
import PreLoading from './PreLoading/PreLoading';
import Description from './Description/Description';
// import LeftMenu from './LeftMenu/LeftMenu';
import AboutMe from './AboutMe/AboutMe';

// let yeomanImage = require('../images/yeoman.png');
// <img src={yeomanImage} alt="Yeoman Generator" />

class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.forceUpdate();
      //ScrollReveal().reveal('.generic-scroll-reveal', {duration: 1100});
    }, 1500);

  }

  getHeader() {
    return this.isLoading ? null : (
      <main>
        <header>
          {/* <LeftMenu/> */}
          <AboutMe/>
        </header>
        <Description/>
      </main>
    );
  }
  
  render() {
    return (
      <section>
          <PreLoading isLoading={this.isLoading}/>
          {this.getHeader()}
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
