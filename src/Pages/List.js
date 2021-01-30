import React, { useEffect, useState } from 'react'

import { listUrl } from '../Paths/api-paths'
import { SaveButton } from '../Components/SaveButton'
import { MapBox } from '../Components/MapBox'

export const List = () => {
  const [list, setList] = useState([])

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((json) => {
        setList(json)
      })
  }, [])

  return (
  <>
    <h1>Lägenheter i Stockholm</h1>
    <section className="list-container">
      <div className="wrap">
        <MapBox />
      </div>
      <div className="list-wrapper">
        {list.map((list) => (
          <div className="listName" key={list.annonsId}>
            <h3>{list.Gatuadress}</h3>
            <button className="list-location">
              <img className="house-logo" src="/houses.png" alt="house" />
            </button>
            <p>{list.Stadsdel}</p>
            <p>{list.AntalRum} Rum</p>
            <div className="list-arrow">
              <i className="fas fa-chevron-down"></i>
            </div>
            <div className="list-details">
              <p>{list.Yta} kvm</p>
              <p>{list.Hyra} :-/månad</p>
              <div className="button-wrapper">
                <SaveButton />
                <a
                  className="list-url"
                  key={list.annonsId}
                  href={`https://bostad.stockholm.se/${list.Url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Details
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  </>
)

}