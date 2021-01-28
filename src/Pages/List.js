import React, { useEffect, useState } from 'react'

import { listUrl } from '../Paths/api-paths'
import { SaveButton } from 'Components/SaveButton'
import { MapBox } from 'Components/MapBox'

export const List = () => {
  const [list, setList] = useState([])
	
	useEffect(() => {
    fetch(listUrl)
    .then((res) => res.json())
    .then((json) => {
      setList(json)
			console.log(json)
    })
	}, [])

  return (
		<>
		<h1>Lägenheter i Stockholm</h1>
    <section className="list-container">
			<div className='wrap'>
			<MapBox />
			</div>
			<div className='list-wrapper'>
			{list.map(list => (
					<div className='listName' key={list.Id}>
						<h3>{list.Gatuadress}</h3>
						<p>{list.Stadsdel}</p>
						<p>{list.AntalRum} Rum</p>
						<p>{list.Yta} kvm</p>
						<p>{list.Hyra} :-/månad</p>
						<a className="list-details" key={list.AnnonsId} href={`https://bostad.stockholm.se/${list.Url}`} target="_blank" rel="noopener noreferrer">Details</a>
						<div className='button-wrapper'>
						<SaveButton />
						<button className='list-location'><img className='house-logo' src="/houses.png" alt="house"/></button>
					</div>
					</div>
			))}
			</div>
    </section>
		</>
	)
}



