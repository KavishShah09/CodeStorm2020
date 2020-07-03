import React from 'react'
import '../App.css'

function Home() {
	return (
		<div>
			<div className="jumbotron">
				<h1 className="display-4 ">
					Welcome To{' '}
					<strong>
						<span className="text-success">Green</span>Terminal
					</strong>
				</h1>
				<p className="lead">A place where fashion is led by environment</p>
				<hr className="my-4" />
				<p>Click on Sign Up to get started</p>
				<a className="btn btn-primary btn-lg" href="/signup" role="button">
					Sign Up
				</a>
			</div>
		</div>
	)
}

export default Home
