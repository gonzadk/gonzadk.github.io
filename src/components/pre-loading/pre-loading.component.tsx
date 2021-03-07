import classNames from 'classnames';
import React, { FunctionComponent } from 'react';

import './pre-loading.component.scss';
import { PreLoadingProps } from './pre-loading.component.types';

export const PreLoading: FunctionComponent<PreLoadingProps> = (props: PreLoadingProps) => {
  const { isLoading } = props;

  return (
    <section
      className={classNames('pre-loading', {
        'pre-loading--hidden': !isLoading,
      })}
    >
      <section className="loading-center">
        <div className="loading-center-absolute">
          <div className="box-holder animated bounceInDown">
            <span className="load-box">
              <span className="box-inner" />
            </span>
          </div>
          <div className="text-holder text-center">
            <h2 className="name">GONZALO TERZANO</h2>
            <h6 className="details">Sr Frontend Developer</h6>
          </div>
        </div>
      </section>
    </section>
  );
};
