import React, { useEffect } from 'react';
import './App.css';
import SignUp from './components/signUpForm'; 
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
			<SignUp />
		</div>
	)
}

export default App
