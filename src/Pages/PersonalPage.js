import React, { useState, useEffect } from "react";
import { listUrl } from "../Paths/api-paths";

import { ErrorMessage } from "../Components/ErrorMessage";

export const List = ({ token }) => {
	const [list, setList] = useState();
	const [gotList, setGotList] = useState();

	useEffect(() => {
		fetch(listUrl, {
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
        <>
        <h1>Welcome to your site {username} </h1>
        <h1>Fetch list here</h1>
        </>
			)}
		</section>
	);
};
