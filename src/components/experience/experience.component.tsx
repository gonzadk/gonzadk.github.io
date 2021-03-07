import React, { FunctionComponent } from 'react';

import { TimelineList } from 'components/timeline-list/timeline-list.component';
import { TimelineItem } from 'components/timeline-list/timeline-list.component.types';

import './experience.component.scss';
import { Card } from '../../shared-components/card/card.component';

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    mainLetter: 'R',
    title: 'Raftr',
    titleSmall: true,
    subtitle: 'Frontend Developer',
    timeline: 'Apr 2020 - Present..',
    description:
      'Working as a Frontend Developer on this great startup focused on connect universities and colleges with students. Working with React and NextJs',
  },
  {
    mainLetter: '24',
    title: '24 Hour Fitness',
    titleSmall: true,
    subtitle: 'Software Engineer',
    timeline: 'Oct 2019 - Apr 2020',
    description:
      'I was in charge of rewriting a front-end project that allow clients ' +
      'to purchase memberships and add different ancillary products. Working with ' +
      'angular 9 and ngxs',
  },
  {
    mainLetter: 'T',
    title: 'Thirdlove',
    titleSmall: true,
    subtitle: 'Full Stack Engineer',
    timeline: 'Jun 2019 - Sep 2019',
    description:
      'I worked at Thirdlove redesigning one of the company’s insignia ' +
      'app called FitFinder, that helps woman finding their best bra. We were developing a ' +
      'standalone application that runs with ReactJs and NodeJs',
  },
  {
    mainLetter: 'M',
    title: 'McAfee',
    titleSmall: true,
    subtitle: 'Software Development Engineer',
    timeline: 'Feb 2017 - May 2019',
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
    <Card className="experience generic-scroll-reveal" transparent>
      <section className="experience__title">
        <i className="title-icon fa fa-suitcase" />
        Experience
      </section>

      <div className="experience__timeline">
        <TimelineList list={TIMELINE_ITEMS} />
      </div>
    </Card>
  );
};
