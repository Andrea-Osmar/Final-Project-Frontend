import React, { useEffect, useState } from "react";
import { getDataUrl, listUrl } from "../Paths/api-paths";

export const GetData = () => {
  const [getData, setGetData] = useState([]);
  const [apartmentList, setApartmentList] = useState([]);
  const [savedApartmentList, setSavedApartmentList] = useState([]);
  const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || "";
  const [token, setToken] = useState(tokenFromStorage);

  useEffect(() => {
    fetch(listUrl)
      .then((res) => res.json())
      .then((listJson) => {
        setApartmentList(listJson);
        //console.log("list", listJson);
      })
      .finally(() => {
        fetch(getDataUrl, {
          headers: {
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((getJson) => {
            setGetData(getJson);
            
          });
      });
  }, []);

  useEffect(() => {
    const result = filterApartmentList(apartmentList, getData);
    setSavedApartmentList(result);
  }, [apartmentList, getData])

  const filterApartmentList = (listOfApartments, listOfIdsOfSavedApartments) => {
    return listOfApartments.filter(singleApartment => {
      return !!listOfIdsOfSavedApartments.find(singleId => {
        return Number(singleId) === singleApartment.AnnonsId;
      });
    });  
  };

  return (
    <> 
      <h1>Dina sparade bostäder</h1> 
      <div className='saved-wrapper'>
      {savedApartmentList.map((saved) => (
        <div className='saved-card' key={saved.AnnonsId}>
          <span><i className="far fa-times-circle"/></span>
          <h4>{saved.Gatuadress}</h4>
          <p>{saved.Stadsdel}</p>
          <p>{saved.AntalRum} Rum</p>
          <p>{saved.Yta} kvm</p>
          <p>{saved.Hyra} :-/månad</p>
          <a
          
          className="list-url"
          href={`https://bostad.stockholm.se/${saved.Url}`}
          target="_blank"
          rel="noopener noreferrer"
      >
        Details
        <span>
          <i className="fas fa-angle-right"></i>
        </span>
      </a>
        </div>
      ))}
      </div>
    </>
  );
};