import React, { useState, useEffect } from 'react'

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

	useEffect(() => {
		getItem()
	}, [])

	return (
		<div className="mt-5">
			<div className="d-inline">
				<div className="row">
					<div className="col-4">
						<img src={item.image_path} alt="" />
					</div>
					<div className="col-7">
						<h1 className="white text-left">{item.title}</h1>
						<h2 className="white text-left">{item.description}</h2>
						<h3 className="white text-left">Price: ₹{item.price}</h3>
						<h3 className="white text-left">Rating: {item.rating} </h3>
						<a href="/" className="btn btn-primary float-left mr-2">
							Buy now
						</a>
						<a href="/" className="btn btn-primary float-left">
							Add to cart
						</a>
					</div>
				</div>
			</div>
			{/* <div className="d-inline">
				<div className="row">
					<div className="col-4">
						<img
							src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
							alt=""
						/>
					</div>
					<div className="col-7">
						<h1 className="white text-left">Title</h1>
						<h2 className="white text-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas, sunt.</h2>
						<h3 className="white text-left">Price: ₹299</h3>
						<h3 className="white text-left">Rating: Good</h3>
						<a href="/" className="btn btn-primary float-left mr-2">
							Buy now
						</a>
						<a href="/" className="btn btn-primary float-left">
							Add to cart
						</a>
					</div>
				</div>
			</div> */}
		</div>
	)
}

export default Item
