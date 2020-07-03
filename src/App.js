import React, { useEffect } from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import MainNav from './components/MainNav'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Items from './components/Items'

function App() {
	useEffect(() => {
		// pingBackend()
	}, [])

	// const options = {
	// 	method: 'POST',
	// 	body: JSON.stringify({ ping: 'pong' }),
	// 	headers: {
	// 		'Content-Type': 'application/json',
	// 	},
	// }

	// const pingBackend = async () => {
	// 	const response = await fetch('/ping', options)
	// 	const data = await response.json()
	// 	console.log(data)
	// }

	return (
		<div className="App">
			<MainNav />

			<div className="container-fluid">
				<Router>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/about" component={About} />
						<Route exact path="/signup" component={SignUp} />
						<Route exact path="/login" component={Login} />
						<Route exact path="/shop" component={Items} />
					</Switch>
				</Router>
			</div>
		</div>
	)
}

export default App
