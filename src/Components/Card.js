import React from 'react'

import { SaveButton } from './SaveButton'

export const Card = (props) => {

  const data = props.data

  return (
    <div className="list-card" onClick={() => {
      console.log(data.AnnonsId)
    }}>
      <h3>{data.Gatuadress}</h3>
      <button className="list-location">
        <img className="house-logo" src="/houses.png" alt="house" onClick={props.onClick}/>
      </button>
      <p>{data.Stadsdel}</p>
      <p>{data.AntalRum} Rum</p>
      <div className="list-arrow">
        <i className="fas fa-chevron-down"></i>
      </div>
      <div className="list-details">
        <p>{data.Yta} kvm</p>
        <p>{data.Hyra} :-/månad</p>
        <div className="button-wrapper">
          <SaveButton />
          <a
            className="list-url"
            key={data.AnnonsId}
            href={`https://bostad.stockholm.se/${data.Url}`}
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
  )
}