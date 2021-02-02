import React, { useState, useEffect } from 'react'
import { saveDataUrl } from '../Paths/api-paths'


export const Card = (props) => {
  const data = props.data
  
  const [savedData, setSavedData] = useState([])
  const [favorite, setFavorite] = useState([])
  const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
  const [token, setToken] = useState(tokenFromStorage)

  const fetchSavedData = () => {
    fetch(saveDataUrl, {
      method: "POST",
      body: [],
      headers: {
        Authorization: token,
      }, 
  })
  .then((res) => res.json())
  .then((json) => setSavedData(json.userSavedData))
  console.log("test")
  }

  useEffect(() => {
    fetchSavedData()

  },[])


  return (
    <div className="list-card">
      <h3>{data.Gatuadress}</h3>

      <button className='save-button' onClick={fetchSavedData} >
        {console.log(fetchSavedData)}
      <i className="far fa-bookmark"></i>
      </button>
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






/*
import React from 'react'

export const Card = (props) => {

  const data = props.data

  return (
    <div className="list-card">
      <h3>{data.Gatuadress}</h3>

      <button className='save-button' >
      <i className="far fa-bookmark"></i>
      </button>
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


*/