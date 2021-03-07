import React, { FunctionComponent } from 'react';

import { Card } from '@shared-components/card/card.component';

import './about-me.component.scss';

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
    <li key={item.key} className="about-me__profile-item">
      <span className="about-me__profile-item-title">
        <i className={item.iconClass}>{item.iconName}</i>
      </span>

      <span className="about-me__profile-item-details">{item.details}</span>
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
    <Card className="about-me__container">
      <section className="about-me" id="about-me">
        <section className="about-me__image--container">
          <img alt="profile" className="about-me__image" src="images/profile.jpg" />

          <div className="about-me__slant" />
        </section>

        <section className="about-me__profile-info">
          <div className="about-me__profile-header">
            <h4 className="about-me__profile-name">Gonzalo Terzano</h4>
            <h6 className="about-me__profile-details">Sr Frontend Developer</h6>
          </div>

          <ul className="about-me__profile-items-container">
            {PROFILE_INFO_ITEMS.map((item) => (
              <ProfileInfoItem item={item} key={item.key} />
            ))}
          </ul>

          <section className="links">
            {LINKS.map((link) => (
              <Link link={link} key={link.key} />
            ))}
          </section>
        </section>
      </section>
    </Card>
  );
};
