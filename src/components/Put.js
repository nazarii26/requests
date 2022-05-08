import React, { useEffect } from 'react'

export const Put = () => {


	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'PUT',
			body: JSON.stringify({
				newItem: 1, // add a new Item
				title: 'foo',
				body: 'bar',
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log('PUT', json));
	})

	return (
		<h1>PUT</h1>
	)
}
