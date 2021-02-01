
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
              lat: props.selectedItem.KoordinatLatitud,
              lng: props.selectedItem.KoordinatLongitud
            }}
          >
            <div>
              <h2 className='info-window'>{props.selectedItem.Gatuadress}</h2>
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








// import React, { useState, useRef } from "react"
// import useSwr from "swr"
// import GoogleMapReact from "google-map-react"

// import useSupercluster from "use-supercluster"

// const fetcher = (...args) => fetch(...args).then((response) => response.json())
// const Marker = ({ children }) => children

// export const MapBox = () => {

//   const selectPin = () => {
//     console.log(childData)
//       return childData
// }

//   // Map setup
//   const mapRef = useRef()
//   const [zoom, setZoom] = useState(10)
//   const [bounds, setBounds] = useState(null)

//   // Load and format data
//   const url = "http://localhost:8080/list"
//   const { data, error } = useSwr(url, fetcher) // filter 0-200 apartments
//   const apartment = data && !error ? data.slice(0, 200) : []
//   const points = apartment.map((apartment) => ({
//     type: "Feature",
//     properties: {
//       cluster: false,
//       annonsId: apartment.annonsId,
//       category: apartment.category,
//     },
//     geometry: {
//       type: "Point",
//       coordinates: [apartment.KoordinatLongitud, apartment.KoordinatLatitud],
//     },
//   }))

//   // get cluster
//   const { clusters, supercluster } = useSupercluster({
//     points, //GeoJSON Feature object
//     bounds,
//     zoom, // current zoom from state
//     options: { radius: 100, maxZoom: 20 },
//   })

//   // render data
//   return (
//     <div style={{ height: "100vh", width: "100%" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
//         defaultCenter={{ lat: 59.329323, lng: 18.068581 }}
//         defaultZoom={10}
//         yesIWantToUseGoogleMapApiInternals
//         onGoogleApiLoaded={({ map }) => {
//           mapRef.current = map
//         }}
//         onChange={({ zoom, bounds }) => {
//           setZoom(zoom)
//           setBounds([
//             bounds.nw.lng,
//             bounds.se.lat,
//             bounds.se.lng,
//             bounds.nw.lat,
//           ])
//         }}
//       >
//         {clusters.map((cluster) => {
//           const [longitude, latitude] = cluster.geometry.coordinates
//           const {
//             cluster: isCluster,
//             point_count: pointCount,
//           } = cluster.properties
//           if (isCluster) {
//             return (
//               <Marker key={cluster.AnnonsId} lat={latitude} lng={longitude}>
//                 <div
//                   className="cluster-marker"
//                   style={{
//                     width: `${10 + (pointCount / points.length) * 20}px`,
//                     height: `${10 + (pointCount / points.length) * 20}px`,
//                   }}
//                   onClick={() => {
//                     const expansionZoom = Math.min(
//                       supercluster.getClusterExpansionZoom(cluster.id),
//                       20
//                     )
//                     mapRef.current.setZoom(expansionZoom)
//                     mapRef.current.panTo({ lat: latitude, lng: longitude }) // pan to this location and center
//                   }}
//                 >
//                   {pointCount}
//                 </div>
//               </Marker>
//             )
//           }
//           return (
//             <Marker key={cluster.properties.AnnonsId} lat={latitude} lng={longitude}>
//               <button className="house-marker" onClick={() => {
//                     const currentZoom = mapRef.current.zoom
//                     if (currentZoom < 12) {
//                       mapRef.current.setZoom(12)
//                     }
//                     mapRef.current.panTo({ lat: latitude, lng: longitude }) // pan to this location and center
//                   }}>
//                 <img src="/houses.png" alt="house" />
//               </button>
//             </Marker>
//           )
//         })}
//       </GoogleMapReact>
//     </div>
//   )
// }
