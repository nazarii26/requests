import React, { useEffect, useState } from 'react'

export const Get = () => {
	const [data, setData] = useState(null);
	const [isLoaded, setIsLoaded] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})

			.then((actualData) => {
				setData(actualData);
				setError(null);
				setIsLoaded(true);
			})

			.catch(error => {
				setError(error.message);
				setData(null);
			});
	}, [])

	return (
		<>
			<h1>GET</h1>

			<div>
				<ul>
					{data &&
						data.map(({ id, title }) => (
							<li key={id}>
								<h3>{title}</h3>
							</li>
						))}
				</ul>
			</div>
		</>
	)
}
