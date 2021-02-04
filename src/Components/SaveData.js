// import React, { useState, useEffect } from 'react'
// import { saveDataUrl } from '../Paths/api-paths'

// export const SaveData = () => {
//   const [savedData, setSavedData] = useState([])
//   const [favorite, setFavorite] = useState([])
//   const tokenFromStorage = () => window.localStorage.getItem("tokenAuth") || ""
//   const [token, setToken] = useState(tokenFromStorage)

//   const fetchSavedData = () => {
//     fetch(saveDataUrl, {
//       method: "POST",
//       body: [],
//       headers: {
//         Authorization: token,
//       }, 
//   })
//   .then((res) => res.json())
//   .then((json) => setSavedData(json.userSavedData))
//   console.log("test")
//   }

//   useEffect(() => {
//     fetchSavedData()

//   },[])

//   return (
//     <div>   
//       {savedData.map((favorite) => (
//         <div className='favorite-list' key={favorite}>
//           <h4>{favorite}</h4>
//         </div>
//       ))}  
//     </div>
//   )
// }