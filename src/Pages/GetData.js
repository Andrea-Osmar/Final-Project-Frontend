import React, { useEffect, useState } from 'react'
import { getDataUrl, listUrl  } from '../Paths/api-paths'

export const GetData = () => {
  const [getData, setGetData] = useState([])
  const [apartmentList, setApartmentList] = useState([])
  const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
  const [token, setToken] = useState(tokenFromStorage)

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((json) => {
        setApartmentList(json)
      })
  }, [])

  useEffect(() => {
    fetch(getDataUrl, {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => res.json())
    .then((json) => {
      setGetData(json)
      console.log(json)
    })
  }, [])


  return (
    <>
    <div>
      <h1>Dina sparade bostäder</h1>
      {getData.map((item) => 
        <div className='saved-list' key={item}>
          <h3>{item}</h3>
        </div>
      )}
      
      {apartmentList.map((apartmentList) =>
        <h3 key={apartmentList.AnnonsId}>
          {apartmentList.AnnonsId}
        </h3>
      )}
    </div>
    </>
  )
}