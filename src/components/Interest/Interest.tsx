import './Interest.scss';

import React from 'react';
import _ from 'lodash';

type InterestIcon = {
  icon: string,
  label: string
};
type InterestProps = {};
type InterestState = {};
class Interest extends React.Component<InterestProps, InterestState> {
  private description: string = 'I enjoy watching sports and I love play basketball. Also, I love watching' +
    'series and movies, or playing video games. I spend my free time traveling and visiting different places,' +
    'this helps me to keep my mind fresh.';
  private interestIcons: InterestIcon[] = [
    { icon: 'fa-film', label: 'Series & Movies' },
    { icon: 'fa-futbol-o', label: 'Sports' },
    { icon: 'fa-gamepad', label: 'Gaming' },
    { icon: 'fa-plane', label: 'Traveling' },
    { icon: 'fa-music', label: 'Music' },
    { icon: 'fa-car', label: 'Cars' }
  ];

  getInterestIcons() {
    return _.map(this.interestIcons, (item: InterestIcon) => {
      return (
        <div className="col-md-2 col-sm-4 col-xs-6 box text-center">
          <div className="interest-icon">
            <i className={`fa ${item.icon}`}/>
            <span>{ item.label }</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <section id="interest" className="section interest-container">
        <div className="container">
          <div className="section-title">
            <h4 className="text-uppercase text-center"><i className="title-icon fa fa-heart"/>Interest</h4>
          </div>

          <div id="interest-card" className="card">
            <div className="card-content">
              <p> { this.description } </p>
            </div>

            <div className="row no-gutters">
              { this.getInterestIcons() }
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Interest;
