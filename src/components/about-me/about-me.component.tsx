import React, { FunctionComponent, useContext } from 'react';

import { Card } from 'shared-components/card/card.component';

import './about-me.component.scss';
import { ResumeContext } from '../../contexts/resume/resume.context';

export const AboutMe: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext);

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
          <section className="about-me__profile-header">
            <h4 className="about-me__profile-name">Gonzalo Terzano</h4>
            <h6 className="about-me__profile-details">Sr Fullstack Developer (Frontend Focus)</h6>
          </section>

          <ul className="about-me__profile-items-container">
            {resumeContext.aboutMeDetails.map((item) => (
              <ProfileInfoItem item={item} key={item.key} />
            ))}
          </ul>

          <section className="links">
            {resumeContext.aboutMeLinks.map((link) => (
              <Link link={link} key={link.key} />
            ))}
          </section>
        </section>
      </section>
    </Card>
  );
};
