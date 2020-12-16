import React, { FunctionComponent } from 'react';

import { TimelineItem, TimelineList } from '@components/timeline-list/timeline-list';

import './experience.scss';

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    mainLetter: 'M',
    title: 'McAfee',
    titleSmall: true,
    subtitle: 'Software Development Engineer',
    timeline: 'Feb 2017 - Present..',
    description:
      'Fullstack developer responsible for end-to-end app development. ' +
      'Leading three teams of 5-6 people each. Working also on an inner source ' +
      'library reducing considerable work time of multiple projects across the company',
  },
  {
    mainLetter: 'G',
    title: 'Globant',
    titleSmall: true,
    subtitle: 'Web UI Developer',
    timeline: 'Feb 2016 - Jan 2017',
    description:
      'Worked on a busy team, sometimes under pressure, ' +
      'making friendly & interactive projects of eLearning on short periods of time',
  },
  {
    mainLetter: 'T',
    title: 'TravelPAQ',
    titleSmall: true,
    subtitle: 'Fullstack Web Developer',
    timeline: 'Aug 2015 - Jan 2016',
    description:
      'Great startup Company in which I worked on backend and frontend ' +
      'technologies but where I also had to perform deployments and configuration tasks on the servers.',
  },
  {
    mainLetter: 'A',
    title: 'National University of San Juan, FCEFyN',
    titleSmall: true,
    subtitle: 'Teaching Assistant Professor',
    timeline: 'Apr 2010 - Jan 2016',
    description:
      'Helped on practical classes and gave classes in some cases. ' +
      'It was the place where I discovered that I like teaching and helping people.',
  },
];

export const Experience: FunctionComponent = () => {
  return (
    <section id="experience" className="generic-scroll-reveal section experience-container">
      <div className="container">
        <div className="section-title">
          <h4 className="text-uppercase text-center">
            <i className="title-icon fa fa-suitcase" />
            Experience
          </h4>
        </div>

        <div className="timeline-experience">
          <TimelineList list={TIMELINE_ITEMS} />
        </div>
      </div>
    </section>
  );
};
