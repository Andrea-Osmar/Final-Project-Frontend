import React, { useEffect, useState } from 'react'


import { listUrl } from '../Paths/api-paths'

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
    <div>
			<h1>The List of Appartments Here</h1>
			{list.map(list => (
				<a className="list-details" key={list.AnnonsId} href={`https://bostad.stockholm.se/${list.Url}`}>
					<div className='listName' key={list.Id}>
						<h2>{list.Gatuadress}</h2>
						<p>{list.Stadsdel}</p>
						<p>{list.AntalRum} Rum</p>
						<p>{list.Yta} kvm</p>
						<p>{list.Hyra} :-</p>
					</div>
				</a>
			))}
    </div>
		</>
	)
}



