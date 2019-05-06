require('./Education.scss');

import React from 'react';
import TimelineList from '../TimelineList/TimelineList';

class Education extends React.Component {
  timelineList = [
    {
      mainLetter: 'D',
      title: 'Degree in Computer Science',
      subtitle: 'National University of San Juan - FCEFyN',
      subtitleSmall: true,
      timeline: 'Mar 2009 - Dic 2014',
      description: `Thesis still pending.
      Current GPA: 8.6 of 10`
    },
    {
      mainLetter: 'H',
      title: 'High School - Electronics Technician',
      subtitle: 'National University of San Juan - EIDFS - ARG',
      subtitleSmall: true,
      timeline: 'Mar 2005 - Dic 2008',
      description: 'GPA: 8.57 of 10'
    }
  ];
  render() {
    return (
      <section id="education" className="generic-scroll-reveal section education-container">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center">
              <i className="title-icon fa fa-graduation-cap"></i>Education
            </h4>
          </div>

          <div className="timeline-education">
            <TimelineList list={this.timelineList}/>
          </div>
        </div>
      </section>
    );
  }
}

Education.defaultProps = {};

export default Education;