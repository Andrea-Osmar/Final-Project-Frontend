// import React, { useState, useEffect } from 'react'
// import { saveDataUrl } from '../Paths/api-paths'

// export const SaveData = () => {
// const [savedData, setSavedData] = useState([])
  
// const fetchSavedData = () => {
//     fetch(saveDataUrl, {
//       method: "POST",
//       headers: {
//         Authorization: accessToken,
//       }, 
//       body: annonsID
//   })
//   .then((res) => res.json())
//   .then((json) => setSavedData(json.userSavedData))
//   }

//   useEffect(() => {
//     fetchSavedData()
//   },[])
//   console.log(savedData)

//   return (
//     <div>   
//       {savedData.map((favorite) => (
//         <div className='favorite-list' key={favorite.annonsId}>
//           <h4>{favorite.annonsId}</h4>
//         </div>
//       ))}  
//     </div>
//   )
// }

