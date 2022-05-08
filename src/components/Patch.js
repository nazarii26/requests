import React, { useEffect } from 'react'

export const Patch = () => {

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'PATCH',
			body: JSON.stringify({
				title: 'interesting',
				body: 'thing',
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((json) => console.log('PATCH', json));
	})
	return (
		<h1>PATCH</h1>
	)
}
