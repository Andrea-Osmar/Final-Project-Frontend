import React, { useState, useEffect } from "react";
import { listingsUrl } from '../Paths/api-paths'

import { ErrorMessage } from '../Components/ErrorMessage'

export const List = ({ token }) => {
	const [list, setList] = useState();
	const [gotList, setGotList] = useState();

	useEffect(() => {
		fetch(listingsUrl, {
			method: "GET",
			headers: { Authorization: token },
		})
			.then((res) => {
				if (res.status === 201) {
					return res.json();
				} else throw new Error(res.status);
			})
			.then((data) => {
				setList(data.list);
				setGotList(true);
			})
			.catch((error) => {
				setGotList(false);
			});
	}, [token]);

	return (
		<section>
			{gotList === false && (
				<ErrorMessage message={"Something went wrong."} />
			)}
			{gotList === true && (
        <h1>En Bostad</h1>
			)}
		</section>
	);
};












// import React, { useEffect, useState } from 'react'

// import { listingUrl } from '../Paths/api-paths'

// export const Listing = () => {
//   const [list, setList] = useState([])

//   useEffect(() => {
//     fetch(listingUrl)
//     .then((res) => res.json())
//     .then((json) => {
//       setList(json)
//       console.log(json)
//     })
//   })
//   return (
//     <div>
//       List of appartments
//     </div>
//   )
// }