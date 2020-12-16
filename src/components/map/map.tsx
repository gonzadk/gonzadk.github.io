import './map.scss';

import { GoogleApiWrapper, Map } from 'google-maps-react';
import React, { FunctionComponent } from 'react';
import { MapContainerProps } from './map.types';

const MAP_OPTIONS = {
  zoom: 5,
  center: {
    lat: -30.010268,
    lng: -64.5910376,
  },
  // mapTypeId: MapTypeId.ROADMAP
};

const STYLE = {
  height: '417px',
  width: '100%',
};

const MapContainer: FunctionComponent<MapContainerProps> = (props: MapContainerProps) => {
  const { google } = props;

  return (
    <Map
      google={google}
      className="map-container"
      style={STYLE}
      // mapTypeControl={false}
      // scrollwheel={false}
      // streetViewControl={false}
      // mapTypeId={this.mapOptions.mapTypeId}
      initialCenter={MAP_OPTIONS.center}
      zoom={MAP_OPTIONS.zoom}
    />
  );
};

export const MapContainerWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyDARz9JFuLcbY5GiOnA6vrmpuf9N39A8i8',
  // @ts-ignore
})(MapContainer);
