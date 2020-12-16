import React, { FunctionComponent } from 'react';

import './timeline-list.scss';
import { TimelineListProps, TimelineItem } from './timeline-list.types';

export const TimelineList: FunctionComponent<TimelineListProps> = (props: TimelineListProps) => {
  const { list } = props;

  return (
    <section>
      {list.map((item: TimelineItem, index: number) => (
        <article key={`timeline-item-${index}`} className="timeline-block">
          <div className="timeline-dot">
            <h6>{item.mainLetter}</h6>
          </div>
          <div className="card timeline-content">
            <div className="card-content">
              <h6 className="timeline-title">
                {item.titleSmall ? <small>{item.title}</small> : item.title}
              </h6>
              <div className="timeline-info">
                <h6>{item.subtitleSmall ? <small>{item.subtitle}</small> : item.subtitle}</h6>
                <h6>
                  <small>{item.timeline}</small>
                </h6>
              </div>
              <p> {item.description} </p>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
};
