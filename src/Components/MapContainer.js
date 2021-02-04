
import React from "react";
import { Map, Marker, InfoWindow, GoogleApiWrapper } from "google-maps-react";

export const MapContainer = (props) => {

  const google = window.google;

  if (props.data === 0) {
    console.error("test 2")
    return (
      <>
      </>
    );
  } else {
    // console.log(props)
    // console.log(props.data)

    return (   
        <Map
          google={google}
          className={"map"}
          zoom={props.zoom}
          initialCenter={props.center}
        >
          {props.data.map(item => (
            <Marker
              key={item.AnnonsId}
              title={item.Gatuadress}
              name={item.Stadsdel}
              position={{ lat: item.KoordinatLatitud, lng: item.KoordinatLongitud }}
            />
          ))}

          <InfoWindow
            visible={true}
            position={{
              lat: parseFloat(props.selectedItem.KoordinatLatitud),
              lng: parseFloat(props.selectedItem.KoordinatLongitud)
            }}
          >
            <div>
              <h3>En Bostad</h3>
              <h4 className='info-window'>{props.selectedItem.Gatuadress}</h4>
              <h4 className='info-window'>{props.selectedItem.Stadsdel}</h4>
              <h4 className='info-window'>{props.selectedItem.AntalRum}</h4>
            </div>
          </InfoWindow>
        </Map>
    );
  }
}
const LoadingContainer = (props) => (
  <h1>Laddar En Bostad</h1>
)

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_KEY,
  LoadingContainer: LoadingContainer
})(MapContainer);
