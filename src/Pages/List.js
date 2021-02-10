import React, { useEffect, useState } from 'react'

import { listUrl } from '../Paths/api-paths'
import { Card } from '../Components/Card'
import { Scroll } from '../Components/Scroll'
import MapContainer from '../Components/MapContainer'
import Loader from '../Components/Loader'

const CityList = (props) => {
  return (
    <>
    <Scroll showBelow={250} />
    <div id='city-list' className='list-wrapper'>
      
      {props.items.map((item) => (
        <Card
          key={item.AnnonsId}
          data={item}
          onClick={(e) => props.onClick(e, item)}
        />
      ))}
    </div>
    </>
  )
}

export const List = () => {
  const [loading, setLoading] = useState(true)
  const [apartmentList, setApartmentList] = useState([])
  const [state, setState] = useState({
    selectedItem: { lat: null, lng: null },
  })

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((json) => {
        setApartmentList(json)
        setLoading(false)
      })
  }, [])

  const showInfo = (e, selectedItem) => {
    setState({ selectedItem: selectedItem })
  }

  return (
    <>
      <section className='list-container'>
        <div className='wrap'>
          <div className='map-container'>
            <MapContainer
              center={{ lat: 59.329323, lng: 18.068581 }}
              zoom={10}
              data={apartmentList}
              selectedItem={state.selectedItem}
            />
          </div>
        </div>
        {loading && <Loader />}
        {!loading && (
          <CityList items={apartmentList} onClick={showInfo.bind(this)} />
        )}
        </section>
    </>
  )
}