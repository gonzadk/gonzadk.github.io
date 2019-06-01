import './TimelineList.scss';

import React from 'react';
import _ from 'lodash';

export type TimelineItem = {
  description: string
  mainLetter: string,
  subtitle: string,
  subtitleSmall?: boolean,
  timeline: string,
  title: string,
  titleSmall?: boolean
};
type TimelineListProps = {
  list: TimelineItem[]
};
type TimelineListState = {};
export class TimelineList extends React.Component<TimelineListProps, TimelineListState> {
  render() {
    return (
      <section>
        {
          _.map(this.props.list, (item: TimelineItem, index: number) => (
            <article key={`timeline-item-${index}`} className="timeline-block">
              <div className="timeline-dot"><h6>{ item.mainLetter }</h6></div>
              <div className="card timeline-content">
                <div className="card-content">
                  <h6 className="timeline-title">
                    { item.titleSmall ? <small>{ item.title }</small> : item.title }
                  </h6>
                  <div className="timeline-info">
                    <h6>
                      { item.subtitleSmall ? <small>{ item.subtitle }</small> : item.subtitle }
                    </h6>
                    <h6>
                      <small>{ item.timeline }</small>
                    </h6>
                  </div>
                  <p> { item.description } </p>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    );
  }
}
