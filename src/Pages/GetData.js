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
        console.log("list", listJson);
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
      // console.log("result", result);
      //   setSavedApartmentList(result);
      //   console.log("new", result);
      console.log(result)
  }, [apartmentList, getData]);

  const filterApartmentList = (apartments, data) => {
    return apartments.map((apartmentItem) => {
      return data.find((dataItem) => {
        return Number(dataItem) === apartmentItem.AnnonsId;
      });
    });
  };

  return (
    <>
      <div>
        <h1>Dina sparade bostäder</h1>
        {getData.map((item) => (
          <div className="saved-list" key={item}>
            <h3>{item}</h3>
          </div>
        ))}

        {apartmentList.map((apartmentList) => (
          <h3 key={apartmentList.AnnonsId}>
            {apartmentList.AnnonsId}
            {apartmentList.Stadsdel}
          </h3>
        ))}
      </div>
    </>
  );
};