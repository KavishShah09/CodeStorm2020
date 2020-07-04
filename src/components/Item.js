import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import Review from './Review'

function Item({ match }) {
	const [item, setItem] = useState({})

	const getItem = async () => {
		const response = await fetch(`/api/item/${match.params.id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		if (data.error_message === '') {
			setItem(data.item)
		}
	}

	const handleAddToCart = async () => {
		const response = await fetch(`/api/cart/${match.params.id}`, {
			method: 'POST',
			body: JSON.stringify({
				title: item.title,
				rating: item.rating,
				price: item.price,
				image_path: item.image_path,
			}),
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		if (data.error_message !== '') {
			alert('Unable to add item to cart')
			window.location.replace(`http://localhost:3000/shop/${match.params.id}`)
		} else {
			alert('Item added to cart. Click on the cart icon to check it')
		}
	}

	useEffect(() => {
		getItem()
	}, [])

	return (
		<div className="container">
			<div className="row mt-2">
				<Link to="/shop">
					<Button variant="dark" type="submit" className="ml-3">
						Go Back To Shop
					</Button>
				</Link>
			</div>
			<div className="row mt-3">
				<div className="col-4 ">
					<img className="img-fluid" src={item.image_path} alt="" height="320" width="390" />
				</div>

				<div className="col-md-8 product  ">
					<h1 className="text-left d-flex justify-content-center border-bottom border-warning">{item.title}</h1>

					<>
						<Button variant="dark" size="sm" className="sizes">
							S
						</Button>{' '}
						<Button variant="dark" size="sm" className="sizes">
							M
						</Button>{' '}
						<Button variant="dark" size="sm" className="sizes">
							L
						</Button>
					</>
					<br />
					<h3 className="text-white text-left d-flex justify-content-center mt-2">Price: ₹{item.price}</h3>
					<p className="text-success text-left d-flex justify-content-center border-bottom border-success">In Stock</p>
					<h3 className="my-3 text-white d-flex justify-content-center">Description: </h3>
					<p className="text-white text-center ">{item.description}</p>

					<p className="text-white text-left d-flex justify-content-center">Deliverable in 3-4 Business Days</p>
					<div className="product-buttons d-flex justify-content-center">
						<Link to="/thanks">
							<Button variant="dark" type="submit">
								Buy now
							</Button>
						</Link>
						<Button variant="dark" type="submit" onClick={handleAddToCart}>
							Add to Cart
						</Button>
					</div>
				</div>
			</div>
			<Review />
		</div>
	)
}

export default Item
