require('./Education.scss');

import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <section className="section education-container">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center"><i className="title-icon fa fa-graduation-cap"></i>Education</h4>
          </div>

          <div className="timeline-education">

            <div className="timeline-block">
              <div className="timeline-dot"><i className="fa fa-graduation-cap"></i></div>
              <div className="card timeline-content">
                <div className="card-content">
                  <h6 className="timeline-title">Degree in Computer Science</h6>
                  <div className="timeline-info">
                    <h6>
                      <small>National University of San Juan - FCEFyN</small>
                    </h6>
                    <h6>
                      <small>Mar 2009 - Dic 2014</small>
                    </h6>
                  </div>
                  <p>
                    Thesis still pending.
                    Current GPA: 8.6 of 10
                  </p>
                </div>
              </div>
            </div>

            <div className="timeline-block">
              <div className="timeline-dot"><h6>H</h6></div>
              <div className="card timeline-content">
                <div className="card-content">
                  <h6 className="timeline-title">High School - Electronics Technician</h6>
                  <div className="timeline-info">
                    <h6>
                      <small>National University of San Juan - EIDFS - ARG</small>
                    </h6>
                    <h6>
                      <small>Mar 2005 - Dic 2008</small>
                    </h6>
                  </div>
                  <p>
                    GPA: 8.57 of 10
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

Education.defaultProps = {};

export default Education;