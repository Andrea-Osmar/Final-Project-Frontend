// import React from 'React'
// import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps'

// export const Map = () => {

//   return (
//     <>
//       <h1>En karta här tack</h1>
//       <GoogleMap defaultZoom={10} defaultCenter={{ lat: 59.329323, lng: 18.068581 }}
//       />
//     </>
//   )
// }

// const WrappedMap = withScriptjs(withGoogleMap(Map))

// export const MapComponent = () => {
//   return (
//     <div className='map-wrapper'> 
//       <WrappedMap googleMapUrl={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`} 
//       loadingElement={<div style={{ height: "100%" }}/>}
//       containerElement={<div style={{ height: "100%" }}/>}
//       mapElement={<div style={{ height: "100%" }}/>}
//       />
//     </div>
//   )
// }