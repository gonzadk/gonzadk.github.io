import React, { FunctionComponent } from 'react';

import './timeline-list.component.scss';
import { TimelineListProps, TimelineItem } from './timeline-list.component.types';

export const TimelineList: FunctionComponent<TimelineListProps> = (props: TimelineListProps) => {
  const { list } = props;

  return (
    <section>
      {list.map((item: TimelineItem, index: number) => (
        <article key={`timeline-item-${index}`} className="timeline-block">
          <section className="timeline-dot">
            <h6>{item.mainLetter}</h6>
          </section>

          <section className="card timeline-content">
            <section className="card-content">
              <h6 className="timeline-title">
                {item.titleSmall ? <small>{item.title}</small> : item.title}
              </h6>

              <section className="timeline-info">
                <h6>{item.subtitleSmall ? <small>{item.subtitle}</small> : item.subtitle}</h6>
                <h6>
                  <small>{item.timeline}</small>
                </h6>
              </section>

              <p> {item.description} </p>
            </section>
          </section>
        </article>
      ))}
    </section>
  );
};
