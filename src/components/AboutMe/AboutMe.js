require('components/AboutMe/AboutMe.scss');

import React from 'react';

class AboutMe extends React.Component {
  render() {
    return (
      <div className="about-me section">
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

                    <div className="info-headings">
                      <h4 className="profile-name text-uppercase left">Gonzalo Terzano</h4>
                      <h6 className="profile-details text-capitalize left">Sr Frontend Developer</h6>
                    </div>

                    <div className="infos">
                      <ul className="profile-list">
                        <li className="profile-list-item clearfix">
                          <span className="title"><i className="material-icons">email</i></span>
                          <span className="content">gonzaloterzano@gmail.com</span>
                        </li>
                        <li className="profile-list-item clearfix">
                          <span className="title"><i className="material-icons">language</i></span>
                          <span className="content">gonzadk.github.com</span>
                        </li>
                        <li className="profile-list-item clearfix">
                          <span className="title"><i className="fa fa-skype" aria-hidden="true"></i></span>
                          <span className="content">gonzaloterzano@hotmail.com</span>
                        </li>
                        <li className="profile-list-item clearfix">
                          <span className="title"><i className="material-icons">phone</i></span>
                          <span className="content">+549 264 464 9709</span>
                        </li>
                        <li className="profile-list-item clearfix">
                          <span className="title"><i className="material-icons">place</i></span>
                          <span className="content">Córdoba, Argentina</span>
                        </li>

                      </ul>
                    </div>

                    <div className="links">
                      <a href="https://www.facebook.com/Gonza.Terzano" target="_blank" id="first_one" className="social btn-floating indigo">
                        <i className="link-icon fa fa-facebook"></i>
                      </a>
                      <a href="https://www.linkedin.com/in/gonzalo-terzano" target="_blank" className="social btn-floating blue darken-3">
                          <i className="link-icon fa fa-linkedin"></i>
                      </a>
                      <a href="https://www.github.com/gonzadk" target="_blank" className="social btn-floating blue darken-3">
                          <i className="link-icon fa fa-github"></i>
                      </a>
                    </div>
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