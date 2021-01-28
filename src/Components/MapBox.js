import React, { useState, useRef } from "react"
import useSwr from "swr"
import GoogleMapReact from "google-map-react"

import useSupercluster from "use-supercluster";

const fetcher = (...args) => fetch(...args).then(response => response.json())
const Marker = ({children}) => children

export const MapBox = () => {
  // Map setup
  const mapRef = useRef()
  const[zoom, setZoom] = useState(10)
  const [bounds, setBounds] = useState(null)

  // Load and format data
  const url = "http://localhost:8080/list"
  const {data, error} = useSwr(url, fetcher) // filter 0-200 apartments
  const apartment = data && !error ? data.slice(0, 200) : []
  const points = apartment.map(apartment => ({
    type: "Feature", 
    properties: {
      cluster: false,
      annonsId: apartment.annonsId,
      category: apartment.category
    },
    geometry: { 
      type: "Point", 
      coordinates: [
        (apartment.KoordinatLongitud),
        (apartment.KoordinatLatitud) 
      ]
    }
  }))

  // get cluster
  const { clusters, supercluster } = useSupercluster({
    points, //GeoJSON Feature object 
    bounds,
    zoom, // current zoom from state
    options: { radius: 100, maxZoom: 20 }
  })
  
  // render data
  return(
    <div style={{ height: "100vh", width: "100%"}}>
      <GoogleMapReact 
      bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
      defaultCenter={{ lat: 59.329323, lng: 18.068581 }}
      defaultZoom={10}
      yesIWantToUseGoogleMapApiInternals
      onGoogleApiLoaded={({map}) => {
        mapRef.current = map
      }}
      onChange={({ zoom, bounds}) => {
        setZoom(zoom)
        setBounds([
          bounds.nw.lng,
          bounds.se.lat,
          bounds.se.lng,
          bounds.nw.lat
        ])
      }}
      >
        {clusters.map(cluster => {
          const [longitude, latitude] = cluster.geometry.coordinates
          const {cluster: isCluster, point_count: pointCount} = cluster.properties 
          if (isCluster) {
              return (
                <Marker 
                key={cluster.annonsId}
                lat={latitude}
                lng={longitude} >
                    <div
                  className="cluster-marker"
                  style={{
                    width: `${10 + (pointCount / points.length) * 20}px`,
                    height: `${10 + (pointCount / points.length) * 20}px`
                  }}
                  onClick={() => {
                    const expansionZoom = Math.min(
                      supercluster.getClusterExpansionZoom(cluster.id),
                      20
                    );
                    mapRef.current.setZoom(expansionZoom);
                    mapRef.current.panTo({ lat: latitude, lng: longitude }); // pan to this location and center
                  }}
                >
                    {pointCount}
                  </div>
                </Marker>
              )
          }
          return (
            <Marker 
            key={cluster.properties.annonsId} 
            lat={latitude}
            lng={longitude}
            >
            <button className='house-marker'>
              <img src="/houses.png" alt="house" />
            </button>
          </Marker>
          )
        })}
      </GoogleMapReact>
    </div>
  )
}
