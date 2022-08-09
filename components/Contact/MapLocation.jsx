import React, {useState, useCallback} from 'react'
import styled from 'styled-components';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '100%'
};

const center = {
  lat: 51.1078852,
  lng: 17.0385376
};

function MapLocation() {

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDaXiF18wN23pVp_wCRfIzNJKzC0r3HjwA"
  })
  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <ContainerMap>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={8}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker position={center}/>
          <></>
        </GoogleMap>
      ) : <></>}
    </ContainerMap>
  )
}

export default React.memo(MapLocation);

const ContainerMap = styled.div`
  width: 700px;
  height: 24rem;
  margin-top: 2.875rem ;
  background: #FFFFFF;
  border-radius: 7px;
    @media screen and (max-width: 800px){
      width: 300px;
      margin-left: 30px;
      margin-bottom: 20px;
    }
`;