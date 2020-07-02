import React, { useEffect } from 'react'
import './App.css'

function App() {
	useEffect(() => {
		pingBackend()
	}, [])

	const options = {
		method: 'POST',
		body: JSON.stringify({ ping: 'pong' }),
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const pingBackend = async () => {
		const response = await fetch('/ping', options)
		const data = await response.json()
		console.log(data)
	}

	return (
		<div className="App">
			<h1>Code Storm 2020</h1>
		</div>
	)
}

export default App
