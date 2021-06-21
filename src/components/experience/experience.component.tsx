import React, { FunctionComponent, useContext } from 'react';

import { TimelineList } from 'components/timeline-list/timeline-list.component';
import { ResumeContext } from 'contexts/resume/resume.context';
import { Card } from 'shared-components/card/card.component';

import './experience.component.scss';

export const Experience: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext);

  return (
    <Card className="experience generic-scroll-reveal" transparent>
      <section className="experience__title">
        <i className="title-icon fa fa-suitcase" />
        Experience
      </section>

      <section className="experience__timeline">
        <TimelineList list={resumeContext.experience} />
      </section>
    </Card>
  );
};
