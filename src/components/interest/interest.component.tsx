import React, { FunctionComponent, useContext } from 'react';
import classNames from 'classnames';

import { InterestIcon } from 'contexts/resume/resume.types';
import { ResumeContext } from 'contexts/resume/resume.context';
import { Card } from 'shared-components/card/card.component';

import './interest.component.scss';

export const Interest: FunctionComponent = () => {
  const resumeContext = useContext(ResumeContext);

  const InterestIcon = ({ item }: { item: InterestIcon }) => (
    <section className="interest__item">
      <i className={classNames('fa', item.icon)} />
      <span>{item.label}</span>
    </section>
  );

  return (
    <section className="interest__container generic-scroll-reveal">
      <section className="interest__title">
        <i className="title-icon fa fa-heart" />
        Interest
      </section>

      <Card className="interest">
        <p className="interest__description">{resumeContext.interest.description}</p>

        <section className="interest__items-container">
          {resumeContext.interest.icons.map((item, index: number) => (
            <InterestIcon item={item} key={index} />
          ))}
        </section>
      </Card>
    </section>
  );
};
