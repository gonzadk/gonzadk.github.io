import React, { FunctionComponent, useContext } from 'react';
import classNames from 'classnames';

import { ResumeContext } from 'contexts/resume/resume.context';
import { AboutMeDetail, AboutMeLink } from 'contexts/resume/resume.types';
import { Card } from 'shared-components/card/card.component';

import './about-me.component.scss';

export const AboutMe: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext);

  /**
   * Returns all the item to be displayed, like email or pages
   */
  const ProfileInfoItem = ({ item }: { item: AboutMeDetail }) => (
    <li className="about-me__profile-item">
      <span className="about-me__profile-item-title">
        <i className={item.iconClass}>{item.iconName}</i>
      </span>

      <span className="about-me__profile-item-details">{item.label}</span>
    </li>
  );

  const Link = ({ link }: { link: AboutMeLink }) => (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className={classNames('social', 'btn-floating', link.iconColor)}
    >
      <i className={classNames('link-icon', 'fa', link.iconClass)} />
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
          <section className="about-me__profile-header">
            <h4 className="about-me__profile-name">{resumeContext.aboutMe.name}</h4>
            <h6 className="about-me__profile-details">{resumeContext.aboutMe.position}</h6>
          </section>

          <ul className="about-me__profile-items-container">
            {resumeContext.aboutMe.details.map((item, index) => (
              <ProfileInfoItem key={index} item={item} />
            ))}
          </ul>

          <section className="links">
            {resumeContext.aboutMe.links.map((link, index) => (
              <Link key={index} link={link} />
            ))}
          </section>
        </section>
      </section>
    </Card>
  );
};
