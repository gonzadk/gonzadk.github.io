import React, { FunctionComponent, useContext } from 'react';

import { ResumeContext } from 'contexts/resume/resume.context';
import { SkillColumn } from 'contexts/resume/resume.types';
import { Card } from 'shared-components/card/card.component';

import './skills.component.scss';

export const Skills: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext);

  const SkillColumn = ({ skillsColumn }: { skillsColumn: SkillColumn }) => (
    <div className="col-md-4 col-sm-4 col-xs-12">
      {!skillsColumn.titleInSmall ? null : (
        <div className="skills__section-title visible-xs">
          <h6 className="text-center">{skillsColumn.titleInSmall}</h6>
        </div>
      )}

      {skillsColumn.skills.map((skill) => (
        <section key={skill.name} className="skillbar">
          <section className="skillbar-title">
            <span> {skill.name} </span>
          </section>

          <section className="skillbar-bar" style={{ width: skill.percent }} />
          <section className="skill-bar-percent"> {skill.percent} </section>
        </section>
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
          <section className="row hidden-xs">
            <section className="col-md-8 col-sm-8">
              <section className="skills__section-title">
                <h6 className="text-center">Professional</h6>
              </section>
            </section>

            <section className="col-md-4 col-sm-4">
              <section className="skills__section-title">
                <h6 className="text-center">Personal</h6>
              </section>
            </section>
          </section>

          {resumeContext.skills.map((skillsColumn, index) => (
            <SkillColumn skillsColumn={skillsColumn} key={`column-${index}`} />
          ))}
        </section>
      </Card>
    </section>
  );
};
