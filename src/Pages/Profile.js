import React, { useEffect, useState } from 'react'

import { getDataUrl, listUrl } from '../Paths/api-paths'
import Loader from '../Components/Loader'
import { Error } from '../Components/Error'

export const Profile = () => {
  const [loading, setLoading] = useState(true)
  const [getData, setGetData] = useState([])
  const [apartmentList, setApartmentList] = useState([])
  const [savedApartmentList, setSavedApartmentList] = useState([])
  const tokenFromStorage = () => window.localStorage.getItem('tokenAuth') || ''
  const [token] = useState(tokenFromStorage)

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((listJson) => {
        setApartmentList(listJson)
      })
      .finally(() => {
        fetch(getDataUrl, {
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((getJson) => {
            setGetData(getJson)
            setLoading(false)
          })
      })
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const result = filterApartmentList(apartmentList, getData)
    setSavedApartmentList(result)
  }, [apartmentList, getData])

  const filterApartmentList = (
    listOfApartments,
    listOfIdsOfSavedApartments
  ) => {
    return listOfApartments.filter((singleApartment) => {
      return !!listOfIdsOfSavedApartments.find((singleId) => {
        return Number(singleId) === singleApartment.AnnonsId
      })
    })
  }

  if (!savedApartmentList) {
    return <Error />
  }

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <section className="profile-container">
          <h2 className="profile-header">Dina sparade bostäder</h2>
          <div className="saved-wrapper">
            {savedApartmentList.map((saved) => (
              <div className="saved-card" key={saved.AnnonsId}>
                <h4>{saved.Gatuadress}</h4>
                <p>{saved.Stadsdel}</p>
                <p>{saved.AntalRum} Rum</p>
                {saved.Yta && <p>{saved.Yta} kvm</p>}
                {saved.Hyra && (
                  <p className="saved-card-details">{saved.Hyra} SEK</p>
                )}
                <a
                  className="list-url"
                  href={`https://bostad.stockholm.se/${saved.Url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Detaljer
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  )
}