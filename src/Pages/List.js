import React, { useEffect, useState } from 'react'

import { listUrl } from '../Paths/api-paths'
import { Card } from '../Components/Card'
import { Scroll } from '../Components/Scroll'
import MapContainer from '../Components/MapContainer'

const CityList = (props) => {
  return (
    <div id='city-list' className='list-wrapper'>
      <Scroll showBelow={250} />
      {props.items.map((item) => (
        <Card
          key={item.AnnonsId}
          data={item}
          onClick={(e) => props.onClick(e, item)}
        />
      ))}
    </div>
  )
}

export const List = () => {
  const [apartmentList, setApartmentList] = useState([])
  const [state, setState] = useState({
    selectedItem: { lat: null, lng: null },
  })

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((json) => {
        setApartmentList(json)
      })
  }, [])

  const showInfo = (e, selectedItem) => {
    setState({ selectedItem: selectedItem })
  }

  return (
    <>
      <h1>Lägenheter i Stockholm</h1>
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
        <CityList items={apartmentList} onClick={showInfo.bind(this)} />
      </section>
    </>
  )
}