require('./TimelineList.scss');

import React from 'react';

class TimelineList extends React.Component {
  render() {
    return (
      <section>
        {
          this.props.list.map(({ title, titleSmall, subtitle, subtitleSmall, timeline, description, mainLetter }, index) => (
            <article key={`timeline-item-${index}`} className="timeline-block">
              <div className="timeline-dot"><h6>{ mainLetter }</h6></div>
              <div className="card timeline-content">
                <div className="card-content">
                  <h6 className="timeline-title">
                    { titleSmall ? <small>{ title }</small> : title }
                  </h6>
                  <div className="timeline-info">
                    <h6>
                      { subtitleSmall ? <small>{ subtitle }</small> : subtitle }
                    </h6>
                    <h6>
                      <small>{ timeline }</small>
                    </h6>
                  </div>
                  <p> { description } </p>
                </div>
              </div>
            </article>
          ))
        }
      </section>
    );
  }
}

TimelineList.defaultProps = {};

export default TimelineList;