import React from 'react'

function Thanks() {
	return (
		<div className="wrapJumbotron">
			<div className="jumbotron">
				<h1 className="display-4">Thank You</h1>
				<p className="lead">Your order has been placed and will be delivered to you in 3-4 business days</p>
				<hr className="my-4" />
				<p>Want to continue shopping?</p>
				<a className="btn btn-primary btn-lg" href="/shop" role="button">
					Go back to shop
				</a>
			</div>
		</div>
	)
}

export default Thanks
