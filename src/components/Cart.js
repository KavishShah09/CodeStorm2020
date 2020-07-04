import React, { useState, useEffect } from 'react'
import StripeCheckout from 'react-stripe-checkout'

function Cart() {
	const [items, setItems] = useState([])
	const [total, setTotal] = useState('')

	const getItems = async () => {
		const response = await fetch('/api/cart', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		if (data.error_message === '') {
			setItems(data.items)
			setTotal(data.total)
		} else {
			alert('unable to get items in cart')
			window.location.replace('http://localhost:3000/shop')
		}
	}

	const deleteItem = async (id) => {
		const response = await fetch(`/api/cart/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		if (data.error_message !== '') {
			alert('unable to remove item from cart')
			window.location.replace('http://localhost:3000/cart')
		}
	}

	const handleOnRemove = (e) => {
		deleteItem(e.target.id)
		window.location.reload()
	}

	function handleToken(token, addresses) {
		console.log({ token, addresses })
	}

	useEffect(() => {
		getItems()
	}, [])

	return (
		<div className="container text-white">
			{!items ? (
				<p>No items added to cart yet</p>
			) : (
				<React.Fragment>
					<h1 className="jumbotron-heading">Shopping Cart</h1>
					<div className="container mb-4">
						<div className="row">
							<div className="col-12">
								<div className="table-responsive">
									<table className="table table-striped text-white">
										<thead>
											<tr>
												<th scope="col"> </th>
												<th scope="col">Product</th>
												<th scope="col">Rating</th>
												<th scope="col" className="text-right">
													Price
												</th>
												<th> </th>
											</tr>
										</thead>
										<tbody>
											{items.map((item) => (
												<React.Fragment key={item.id}>
													<tr>
														<td>
															<img src={item.image_path} alt="" height="50" width="50" />{' '}
														</td>
														<td>{item.title}</td>
														<td className={`text-${item.rating}`}>{item.rating}</td>

														<td className="text-right">₹{item.price}</td>
														<td className="text-right">
															<button className="btn btn-sm btn-danger" id={item.id} onClick={handleOnRemove}>
																<i className="fa fa-trash"></i>
																{'Remove'}
															</button>{' '}
														</td>
													</tr>
												</React.Fragment>
											))}
											<tr>
												<td></td>
												<td></td>

												<td>Sub-Total</td>
												<td className="text-right">₹{total}</td>
												<td></td>
											</tr>
											<tr>
												<td></td>
												<td></td>

												<td>Shipping</td>
												<td className="text-right">Free</td>
												<td></td>
											</tr>
											<tr>
												<td></td>
												<td></td>

												<td>
													<strong>Total</strong>
												</td>
												<td className="text-right">
													<strong>₹{total}</strong>
												</td>
												<td></td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>
							<div className="col mb-2">
								<div className="row">
									<div className="col">
										<StripeCheckout
											stripeKey="pk_test_51H1HLzFCV0EJSYKgB5GfTu6kgCLPdn2Fzuexrla4gdVLfpkWjfvakXCxgJzflxWyjse3AVZzRnEGBUM5ESzzE6oy00esaSKO3W"
											token={handleToken}
											amount={total * 100}
											currency="inr"
											name="T-shirts"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</React.Fragment>
			)}
		</div>
	)
}

export default Cart
