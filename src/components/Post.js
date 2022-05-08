import React, { useEffect } from 'react'


export const Post = () => {

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
			.then((json) => console.log('POST', json));
	}, [])

	return (
		<>
			<h1> POST </h1>
		</>
	)
}

