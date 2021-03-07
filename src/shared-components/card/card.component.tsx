import { FunctionComponent } from 'react';
import classNames from 'classnames';

import './card.component.scss';
import { CardProps } from './card.component.types';

export const Card: FunctionComponent<CardProps> = (props: CardProps) => {
  const { children, className, transparent } = props;

  return (
    <section
      className={classNames('card-generic', className, {
        'card-generic--transparent': transparent,
      })}
    >
      {children}
    </section>
  );
};
