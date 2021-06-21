import React, { FunctionComponent, useContext } from 'react';

import { Card } from 'shared-components/card/card.component';
import { TimelineList } from 'components/timeline-list/timeline-list.component';
import { ResumeContext } from 'contexts/resume/resume.context';

import './education.component.scss';

export const Education: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext);

  return (
    <Card className="education generic-scroll-reveal" transparent>
      <section className="education__title">
        <h4 className="text-uppercase text-center">
          <i className="title-icon fa fa-graduation-cap" />
          Education
        </h4>
      </section>

      <section className="education__timeline">
        <TimelineList list={resumeContext.education} />
      </section>
    </Card>
  );
};
