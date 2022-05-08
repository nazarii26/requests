import React, { useEffect } from 'react'

export const Delete = () => {

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts/1', {
			method: 'DELETE',
		})
	})
	return (
		<h1>DELETE</h1>
	)
}
