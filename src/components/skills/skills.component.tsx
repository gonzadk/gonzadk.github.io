import React, { FunctionComponent } from 'react';

import './skills.component.scss';
import { Card } from '../../shared-components/card/card.component';

type Skill = {
  name: string;
  percent: string;
};

type SkillColumn = {
  titleInSmall?: string;
  skills: Skill[];
};

const SKILL_COLUMNS: SkillColumn[] = [
  {
    titleInSmall: 'Professional',
    skills: [
      { name: 'React', percent: '90%' },
      { name: 'TypeScript', percent: '90%' },
      { name: 'Angular', percent: '90%' },
      { name: 'AngularJs', percent: '90%' },
    ],
  },
  {
    skills: [
      { name: 'HTML5/CSS3', percent: '90%' },
      { name: 'CD/CI', percent: '50%' },
      { name: 'Java', percent: '35%' },
      { name: 'NodeJS', percent: '35%' },
    ],
  },
  {
    titleInSmall: 'Personal',
    skills: [
      { name: 'Communication', percent: '75%' },
      { name: 'Teamwork', percent: '90%' },
      { name: 'Creativity', percent: '70%' },
      { name: 'Dedication', percent: '80%' },
    ],
  },
];

export const Skills: FunctionComponent = () => {
  const SkillColumn = ({ skillsColumn }: { skillsColumn: SkillColumn }) => (
    <div className="col-md-4 col-sm-4 col-xs-12">
      {!skillsColumn.titleInSmall ? null : (
        <div className="skills__section-title visible-xs">
          <h6 className="text-center">{skillsColumn.titleInSmall}</h6>
        </div>
      )}

      {skillsColumn.skills.map((skill) => (
        <div key={skill.name} className="skillbar">
          <div className="skillbar-title">
            <span> {skill.name} </span>
          </div>

          <div className="skillbar-bar" style={{ width: skill.percent }} />
          <div className="skill-bar-percent"> {skill.percent} </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="generic-scroll-reveal skills__container">
      <section className="skills__title">
        <i className="title-icon fa fa-sliders" />
        Skills
      </section>

      <Card className="skills">
        <section className="row">
          <div className="row hidden-xs">
            <div className="col-md-8 col-sm-8">
              <div className="skills__section-title">
                <h6 className="text-center">Professional</h6>
              </div>
            </div>

            <div className="col-md-4 col-sm-4">
              <div className="skills__section-title">
                <h6 className="text-center">Personal</h6>
              </div>
            </div>
          </div>

          {SKILL_COLUMNS.map((skillsColumn, index) => (
            <SkillColumn skillsColumn={skillsColumn} key={`column-${index}`} />
          ))}
        </section>
      </Card>
    </section>
  );
};
