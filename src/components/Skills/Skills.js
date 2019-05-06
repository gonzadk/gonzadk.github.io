require('./Skills.scss');

import React from 'react';
import * as _ from 'lodash';

class Skills extends React.Component {
  skillComluns = [
    {
      titleInSmall: 'Professional',
      skills: [
        { name: 'JavaScript', percent: '90%' },
        { name: 'Angular', percent: '90%' },
        { name: 'AngularJs', percent: '90%' },
        { name: 'React', percent: '30%' }
      ]
    },
    {
      skills: [
        { name: 'HTML5/CSS3', percent: '80%' },
        { name: 'GulpJS', percent: '30%' },
        { name: 'Java', percent: '40%' },
        { name: 'NodeJS', percent: '25%' }
      ]
    },
    {
      titleInSmall: 'Personal',
      skills: [
        { name: 'Communication', percent: '75%' },
        { name: 'Teamwork', percent: '90%' },
        { name: 'Creativity', percent: '70%' },
        { name: 'Dedication', percent: '80%' }
      ]
    }
  ];

  skillColumn = ({ skillsColumn }) => {
    return (
      <div className="col-md-4 col-sm-4 col-xs-12" >
        {
          !skillsColumn.titleInSmall ? null : (
            <div className="skills-title visible-xs">
              <h6 className="text-center">{ skillsColumn.titleInSmall }</h6>
            </div>
          )
        }

        {
          _.map(skillsColumn.skills, (skill) => (
            <div key={skill.name} className="skillbar">
              <div className="skillbar-title"><span> { skill.name } </span></div>
              <div className="skillbar-bar" style={{width: skill.percent}}></div>
              <div className="skill-bar-percent"> { skill.percent } </div>
            </div>
          ))
        }
      </div>
    )
  }

  render() {
    return (
      <section id="skills" className="generic-scroll-reveal skills-container section">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center"><i className="title-icon fa fa-sliders"></i>Skills</h4>
          </div>
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="card">
                <div className="card-content">
                  <div className="row">
                    <div className="row hidden-xs">
                      <div className="col-md-8 col-sm-8">
                        <div className="skills-title">
                          <h6 className="text-center">Professional</h6>
                        </div>
                      </div>
                      <div className="col-md-4 col-sm-4">
                        <div className="skills-title">
                          <h6 className="text-center">Personal</h6>
                        </div>
                      </div>
                    </div>
                    {
                      _.map(this.skillComluns, (skillsColumn, index) => (
                        <this.skillColumn skillsColumn={skillsColumn} key={`column-${index}`}/>
                      ))
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Skills.defaultProps = {};

export default Skills;