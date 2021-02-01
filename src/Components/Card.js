import React from 'react'

import { SaveButton } from './SaveButton'
import { SaveData } from './SaveData'

export const Card = (props) => {

  const data = props.data

  return (
    <div className="list-card">
    {/* onClick={() => {console.log(data.AnnonsId)}} */}
      <h3>{data.Gatuadress}</h3>

      <button className='save-button' onClick={() => {console.log(<SaveData />)}} >
      <i className="far fa-bookmark"></i>
      </button>
      {/* <SaveButton onClick={() => {
      // console.log("test") }}/> */}

      <button className="list-location">
        <img className="house-logo" src="/pin.png" alt="pin" onClick={props.onClick}/>
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




