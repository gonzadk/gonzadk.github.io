import React, { FunctionComponent } from 'react';

import { TimelineList } from '@components/timeline-list/timeline-list.component';
import { TimelineItem } from '@components/timeline-list/timeline-list.component.types';
import { Card } from '@shared-components/card/card.component';

import './education.component.scss';

const TIMELINE_LIST: TimelineItem[] = [
  {
    mainLetter: 'D',
    title: 'Degree in Computer Science',
    subtitle: 'National University of San Juan - FCEFyN',
    subtitleSmall: true,
    timeline: 'Mar 2009 - Dic 2014',
    description: `Thesis still pending.
      Current GPA: 8.6 of 10`,
  },
  {
    mainLetter: 'H',
    title: 'High School - Electronics Technician',
    subtitle: 'National University of San Juan - EIDFS - ARG',
    subtitleSmall: true,
    timeline: 'Mar 2005 - Dic 2008',
    description: 'GPA: 8.57 of 10',
  },
];

export const Education: FunctionComponent = () => {
  return (
    <Card className="education generic-scroll-reveal" transparent>
      <section className="education__title">
        <h4 className="text-uppercase text-center">
          <i className="title-icon fa fa-graduation-cap" />
          Education
        </h4>
      </section>

      <div className="education__timeline">
        <TimelineList list={TIMELINE_LIST} />
      </div>
    </Card>
  );
};
