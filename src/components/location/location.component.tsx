import React, { FunctionComponent } from 'react';

import { MapContainerWrapper } from 'components/map/map.component';

import './location.component.scss';
import { Card } from '../../shared-components/card/card.component';

export const Location: FunctionComponent = () => {
  return (
    <Card className="location generic-scroll-reveal" transparent>
      <section className="location__title">
        <i className="title-icon fa fa-location-arrow" />
        Location
      </section>

      <MapContainerWrapper />
    </Card>
  );
};
