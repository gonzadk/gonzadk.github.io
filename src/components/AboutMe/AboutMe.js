require('./AboutMe.scss');

import React from 'react';

class AboutMe extends React.Component {
  /**
   * Returns the heading info
   */
  getInfoHeadings() {
    return (
      <div className="info-headings">
        <h4 className="profile-name text-uppercase left">Gonzalo Terzano</h4>
        <h6 className="profile-details text-capitalize left">Sr Frontend Developer</h6>
      </div>
    );
  }

  /**
   * Returns all the item to be displayed, like email or pages
   */
  getInfos() {
    const itemList = [
      {key: 'email', details: 'gonzaloterzano@gmail.com', iconClass: 'material-icons', iconName: 'email'},
      {key: 'github', details: 'gonzadk.github.com', iconClass: 'material-icons', iconName: 'language'},
      {key: 'skype', details: 'gonzaloterzano@hotmail.com', iconClass: 'fa fa-skype', iconName: ''},
      {key: 'phone', details: '+549 264 464 9709', iconClass: 'material-icons', iconName: 'phone'},
      {key: 'city', details: 'Córdoba, Argentina', iconClass: 'material-icons', iconName: 'place'}
    ];
    return (
      <div className="infos">
        <ul className="profile-list">
          {
            itemList.map(item => (
                <li key={item.key}  className="profile-list-item clearfix">
                  <span className="title"><i className={item.iconClass}>{item.iconName}</i></span>
                  <span className="content">{item.details}</span>
                </li>
              )
            )
          }
        </ul>
      </div>
    );
  }

  getLinks() {
    const links = [
      {key: 'facebook', href: 'https://www.facebook.com/Gonza.Terzano', iconColor: 'indigo', iconClass: 'fa-facebook'},
      {key: 'linkedin', href: 'https://www.linkedin.com/in/gonzalo-terzano', iconColor: 'blue darken-3', iconClass: 'fa-linkedin'},
      {key: 'github', href: 'https://www.github.com/gonzadk', iconColor: 'blue darken-3', iconClass: 'fa-github'}
    ];
    return (
      <div className="links">
        {
          links.map(link => (
            <a key={link.key} href={link.href} target="_blank" className={'social btn-floating ' + link.iconColor}>
              <i className={'link-icon fa ' + link.iconClass}></i>
            </a>
            )
          )
        }
      </div>
    );
  }

  render() {
    return (
      <div id="home" className="about-me-container section">
        <div className="v-card-holder">
          <div className="container">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">

                <div className="v-card card">

                  <div className="profile right">
                    <img alt="profile-image" className="img-responsive" src="images/profile.jpg"/>
                    <div className="slant"></div>
                  </div>

                  <div className="card-content">

                    {this.getInfoHeadings()}

                    {this.getInfos()}

                    {this.getLinks()}

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AboutMe.defaultProps = {};

export default AboutMe;