import React, { useEffect, useState } from 'react'
import { getDataUrl, listUrl  } from '../Paths/api-paths'

export const GetData = () => {
  const [getData, setGetData] = useState([])
  const [apartmentList, setApartmentList] = useState([])
  const [savedApartmentList, setSavedApartmentList] = useState([])
  const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
  const [token, setToken] = useState(tokenFromStorage)

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((objectJson) => {
        setApartmentList(objectJson)
        console.log("list", objectJson)
      })
      .finally(() => {
        fetch(getDataUrl, {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => res.json())
        .then((stringJson) => {
          setGetData(stringJson)
          console.log("getdata", stringJson)
        const result =  filterApartmentList()
        setSavedApartmentList(result)
        console.log("new", getData)
        })
      }) 
  }, [])

  const filterApartmentList = () => {
  return getData.map(dataItem => {
    return apartmentList.find(apartmentItem => {
      return Number(dataItem) === apartmentItem.id;
    });
  });  
};

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
