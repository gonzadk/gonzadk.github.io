import React, { FunctionComponent } from 'react';

import './interest.component.scss';
import { InterestIcon } from './interest.component.types';
import { Card } from '../../shared-components/card/card.component';

const description: string =
  'I enjoy watching sports and I love play basketball. Also, I love watching' +
  'series and movies, or playing video games. I spend my free time traveling and visiting different places,' +
  'this helps me to keep my mind fresh.';

const interestIcons: InterestIcon[] = [
  { icon: 'fa-film', label: 'Series & Movies' },
  { icon: 'fa-futbol-o', label: 'Sports' },
  { icon: 'fa-gamepad', label: 'Gaming' },
  { icon: 'fa-plane', label: 'Traveling' },
  { icon: 'fa-music', label: 'Music' },
  { icon: 'fa-car', label: 'Cars' },
];

export const Interest: FunctionComponent = () => {
  const InterestIcon = ({ item }: { item: InterestIcon }) => (
    <section className="interest__item">
      <i className={`fa ${item.icon}`} />
      <span>{item.label}</span>
    </section>
  );

  return (
    <section className="interest__container generic-scroll-reveal">
      <div className="interest__title">
        <i className="title-icon fa fa-heart" />
        Interest
      </div>

      <Card className="interest">
        <p className="interest__description">{description}</p>

        <section className="interest__items-container">
          {interestIcons.map((item: InterestIcon, index: number) => (
            <InterestIcon item={item} key={index} />
          ))}
        </section>
      </Card>
    </section>
  );
};
