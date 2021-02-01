import React, { useEffect, useState } from 'react'
import { getDataUrl } from '../Paths/api-paths'

export const GetData = () => {
  const [getData, setGetData] = useState([])
  const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
  const [token, setToken] = useState(tokenFromStorage)

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
      <h2>Dina sparade bostäder</h2>
      {getData.map((saved) => 
        <div className='saved-list' key={saved.AnnonsId}>
          <h3>{saved.AnnonsId}</h3>
        </div>
      )}
    </div>
    </>
  )
}


