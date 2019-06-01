import './LeftMenu.scss';

import React from 'react';

type LeftMenuProps = {};
type LeftMenuState = {};
class LeftMenu extends React.Component<LeftMenuProps, LeftMenuState> {
  showMenu = false;

  getMenuToggle() {
    return (
      <div className="menu-toggle" onClick={this.toggleMenu.bind(this)}>
        <i className="material-icons menu-icon top-bar">remove</i>
        <i className="material-icons menu-icon middle-bar">remove</i>
        <i className="material-icons menu-icon bottom-bar">remove</i>
      </div>
    );
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
    this.forceUpdate();
  }

  render() {
    const menuOpen = this.showMenu ? 'menu-open' : '';

    return (
      <nav className={`left-menu ${menuOpen}`}>

        <div className="menu-wrap menu-options">
            <div className="logo-flat">
                <img alt="personal-logo" className="img-responsive" src="images/logo.png"/>
            </div>
            <br/>

            <div className="menu-links">
                <a className="menu-link" href="#home"><i className="title-icon fa fa-user"/>Home</a>
                <a className="menu-link" href="#description"><i className="title-icon fa fa-dashboard"/>Description</a>
                <a className="menu-link" href="#experience"><i className="title-icon fa fa-suitcase"/>Experience</a>
                <a className="menu-link" href="#skills"><i className="title-icon fa fa-sliders"/>Skills</a>
                <a className="menu-link" href="#education"><i className="title-icon fa fa-graduation-cap"/>Education</a>
                <a className="menu-link" href="#interest"><i className="title-icon fa fa-heart"/>Interest</a>
                <a className="menu-link" href="#contact"><i className="title-icon fa fa-envelope"/>Contact</a>
            </div>
        </div>

        {this.getMenuToggle()}
      </nav>
    );
  }
}

export default LeftMenu;
