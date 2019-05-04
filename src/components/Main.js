require('materialize-css/dist/css/materialize.css');
require('font-awesome/css/font-awesome.min.css');
require('bootstrap/dist/css/bootstrap.min.css');
require('styles/App.scss');

import React from 'react';
import PreLoading from './PreLoading/PreLoading';
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
    }, 1500);
  }

  getHeader() {
    return this.isLoading ? null : (
      <header>
        {/* <LeftMenu/> */}
        <AboutMe/>
      </header>
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
