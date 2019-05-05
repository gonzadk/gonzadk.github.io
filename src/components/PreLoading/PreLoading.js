require('./PreLoading.scss');

import React from 'react';

class PreLoading extends React.Component {
  render() {
    const loadingClass = this.props.isLoading ? '' : 'is-hidden';

    return (
    <section className={`pre-loading ${loadingClass}`}>
      <section className="loading-center">
        <div className="loading-center-absolute">
          <div className="box-holder animated bounceInDown">
            <span className="load-box"><span className="box-inner"></span></span>
          </div>
          <div className="text-holder text-center">
            <h2 className="name">GONZALO TERZANO</h2>
            <h6 className="details">Sr Frontend Developer</h6>
          </div>
        </div>
      </section>
    </section>
    );
  }
}

PreLoading.defaultProps = {};

export default PreLoading;