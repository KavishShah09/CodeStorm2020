import React from 'react'
import './App.css'
import './index.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import MainNav from './components/MainNav'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Items from './components/Items'
import Item from './components/Item'
import Cart from './components/Cart'
import Thanks from './components/Thanks'

function App() {
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
						<Route exact path="/shop/:id" component={Item} />
						<Route exact path="/cart" component={Cart} />
						<Route exact path="/thanks" component={Thanks} />
					</Switch>
				</Router>
			</div>
		</div>
	)
}

export default App
