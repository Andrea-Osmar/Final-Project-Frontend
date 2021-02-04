import React from 'react'

export const Card = (props) => {
  const data = props.data

  return (
  <div className="list-card">
    <h3>
      {data.Gatuadress}
      <button className="save-button">
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







// import React from 'react'

// export const Card = (props) => {
//   const data = props.data

//   return (
//     <div className="list-card">
//       <h3>{data.Gatuadress}
//       <button className='save-button'  >
        
//       <i className="far fa-bookmark"></i>
//       </button></h3>
//       <button className="list-location">
//         <img className="house-logo" src="/pin.png" alt="pin" onClick={props.onClick}/>
//       </button>
//       <div className='list-details'>
//       <p>{data.Stadsdel}</p> <span><i className="fas fa-circle"></i></span>
//       <p>{data.AntalRum} Rum</p><span><i className="fas fa-circle"></i></span>
//         <p>{data.Yta} kvm</p> <span><i className="fas fa-circle"></i></span>
//         <p>{data.Hyra} :-/månad</p><span><i className="fas fa-circle"></i></span>
//           <a
//             className="list-url"
//             key={data.AnnonsId}
//             href={`https://bostad.stockholm.se/${data.Url}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Details
//             <span>
//               <i className="fas fa-angle-right"></i>
//             </span>
//           </a>
//         </div>
//         </div>
//   )
// }



// /*
// <div className="list-card">
//       <h3>{data.Gatuadress}</h3>

//       <button className='save-button' onClick={fetchSavedData} >
//         {console.log(fetchSavedData)}
//       <i className="far fa-bookmark"></i>
//       </button>
//       <button className="list-location">
//         <img className="house-logo" src="/pin.png" alt="pin" onClick={props.onClick}/>
//       </button>
//       <p>{data.Stadsdel}</p>
//       <p>{data.AntalRum} Rum</p>
//       <div className="list-arrow">
//         <i className="fas fa-chevron-down"></i>
//       </div>
//       <div className="list-details">
//         <p>{data.Yta} kvm</p>
//         <p>{data.Hyra} :-/månad</p>
//         <div className="button-wrapper">

//           <a
//             className="list-url"
//             key={data.AnnonsId}
//             href={`https://bostad.stockholm.se/${data.Url}`}
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Details
//             <span>
//               <i className="fas fa-angle-right"></i>
//             </span>
//           </a>
//         </div>
//       </div>
//     </div>
// }
// */