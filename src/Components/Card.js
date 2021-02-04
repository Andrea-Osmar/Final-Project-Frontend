import React, { useState } from 'react'
import { saveDataUrl } from '../Paths/api-paths'


export const Card = (props) => {
  const data = props.data

  const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""

  const [token] = useState(tokenFromStorage)

  const fetchSavedData = () => {
    const idData = {
      annonsId: String(data.AnnonsId)
    }
    console.log(JSON.stringify(idData))

    fetch(saveDataUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: token,
      }, 
      body: JSON.stringify(idData) 
  })
  .then((res) => res.json())
  .then((getJson) => {
    console.log(getJson);
  });
};

  return (
    <div className="list-card">
      <h3>
        {data.Gatuadress}
        <button className="save-button" onClick={() => fetchSavedData()}>
          <i className="far fa-bookmark"></i>
        </button>
      </h3>
      <button className="list-location">
        <img
          className="house-logo"
          src="/pin.png"
          alt="pin"
          onClick={props.onClick}
        />
      </button>
      <div className="list-details">
        <p>{data.Stadsdel}</p>{" "}
        <span>
          <i className="fas fa-circle"></i>
        </span>
        <p>{data.AntalRum} Rum</p>
        <span>
          <i className="fas fa-circle"></i>
        </span>
        <p>{data.Yta} kvm</p>{" "}
        <span>
          <i className="fas fa-circle"></i>
        </span>
        <p>{data.Hyra} :-/månad</p>
        <span>
          <i className="fas fa-circle"></i>
        </span>
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
  )
}