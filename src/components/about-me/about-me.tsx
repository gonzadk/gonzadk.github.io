import React, { FunctionComponent } from 'react';

import './about-me.scss';

const LINKS = [
  {
    key: 'facebook',
    href: 'https://www.facebook.com/Gonza.Terzano',
    iconColor: 'indigo',
    iconClass: 'fa-facebook',
  },
  {
    key: 'linkedIn',
    href: 'https://www.linkedin.com/in/gonzalo-terzano',
    iconColor: 'blue darken-3',
    iconClass: 'fa-linkedin',
  },
  {
    key: 'github',
    href: 'https://www.github.com/gonzadk',
    iconColor: 'blue darken-3',
    iconClass: 'fa-github',
  },
];

const PROFILE_INFO_ITEMS = [
  {
    key: 'email',
    details: 'gonzaloterzano@gmail.com',
    iconClass: 'material-icons',
    iconName: 'email',
  },
  {
    key: 'github',
    details: 'gonzadk.github.com',
    iconClass: 'material-icons',
    iconName: 'language',
  },
  {
    key: 'skype',
    details: 'gonzaloterzano@hotmail.com',
    iconClass: 'fa fa-skype',
    iconName: '',
  },
  {
    key: 'phone',
    details: '+549 264 464 9709',
    iconClass: 'material-icons',
    iconName: 'phone',
  },
  {
    key: 'city',
    details: 'Córdoba, Argentina',
    iconClass: 'material-icons',
    iconName: 'place',
  },
];

export const AboutMe: FunctionComponent = () => {
  /**
   * Returns all the item to be displayed, like email or pages
   */
  const ProfileInfoItem = ({ item }: { item: any }) => (
    <li key={item.key} className="profile-list-item clearfix">
      <span className="title">
        <i className={item.iconClass}>{item.iconName}</i>
      </span>
      <span className="content">{item.details}</span>
    </li>
  );

  const Link = ({ link }: { link: any }) => (
    <a
      key={link.key}
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`social btn-floating ${link.iconColor}`}
    >
      <i className={`link-icon fa ${link.iconClass}`} />
    </a>
  );

  return (
    <div id="home" className="about-me-container section">
      <div className="v-card-holder">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="v-card card">
                <div className="profile right">
                  <img alt="profile" className="img-responsive" src="images/profile.jpg" />
                  <div className="slant" />
                </div>

                <div className="card-content">
                  <div className="info-headings">
                    <h4 className="profile-name text-uppercase left">Gonzalo Terzano</h4>
                    <h6 className="profile-details text-capitalize left">Sr Frontend Developer</h6>
                  </div>

                  <div className="infos">
                    <ul className="profile-list">
                      {PROFILE_INFO_ITEMS.map((item) => (
                        <ProfileInfoItem item={item} key={item.key} />
                      ))}
                    </ul>
                  </div>

                  <div className="links">
                    {LINKS.map((link) => (
                      <Link link={link} key={link.key} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
