import React from 'react';

class LeftMenu extends React.Component {
  render() {
    return (
      <nav className="left-menu">

        <div className="menu-wrap menu-options">

            <div className="logo-flat">
                <img alt="personal-logo" className="img-responsive" src="assets/img/logo.png"/>
            </div>
            <br/>

            <div>
                <a className="menu-link" href="#home"><i className="title-icon fa fa-user"></i>Home</a>
                <a className="menu-link" href="#about"><i className="title-icon fa fa-dashboard"></i>About</a>
                <a className="menu-link" href="#education"><i className="title-icon fa fa-graduation-cap"></i>Education</a>
                <a className="menu-link" href="#skills"><i className="title-icon fa fa-sliders"></i>Skills</a>
                <a className="menu-link" href="#experience"><i className="title-icon fa fa-suitcase"></i>Experience</a>
                <a className="menu-link" href="#interest"><i className="title-icon fa fa-heart"></i>Interest</a>
                <a className="menu-link" href="#contact"><i className="title-icon fa fa-envelope"></i>Contact</a>
            </div>
        </div>

        <div className="menuToggle">
            <div className="toggle-normal">
                <i className="material-icons menu-icon top-bar">remove</i>
                <i className="material-icons menu-icon middle-bar">remove</i>
                <i className="material-icons menu-icon bottom-bar">remove</i>
            </div>
        </div>
      </nav>
    );
  }
}

LeftMenu.defaultProps = {};

export default LeftMenu;