import React, { CSSProperties, FunctionComponent } from 'react';
import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';

import { MapContainerProps } from './map.component.types';

const ZOOM = 5;

const MAP_POSITION = {
  lat: -31.3992876,
  lng: -64.2643838,
};

const MAP_STYLE: CSSProperties = {
  borderRadius: '10px',
  height: '417px',
  width: '100%',
};

const MapContainer: FunctionComponent<MapContainerProps> = (props: MapContainerProps) => {
  const { google } = props;

  return (
    <Map
      google={google}
      style={MAP_STYLE}
      mapTypeControl={false}
      scrollwheel={false}
      streetViewControl={false}
      mapTypeId={google.maps.MapTypeId.ROADMAP}
      initialCenter={MAP_POSITION}
      zoom={ZOOM}
    >
      <Marker position={MAP_POSITION} />
    </Map>
  );
};

export const MapContainerWrapper = GoogleApiWrapper({
  apiKey: 'AIzaSyDARz9JFuLcbY5GiOnA6vrmpuf9N39A8i8',
})(MapContainer);
