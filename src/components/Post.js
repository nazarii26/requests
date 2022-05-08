import React, { useEffect, useState } from 'react'


export const Post = () => {
	const [info, setInfo] = useState('')

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts', {
			method: 'POST',
			body: JSON.stringify({
				title: 'lol', // 3 new items
				body: 'kek',
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => {
				console.log('POST', json);
				setInfo(json);
			});
	}, [])

	return (
		<>
			<h1> POST </h1>
			<p>{JSON.stringify(info)}</p>

		</>
	)
}

