import React, { useState, useEffect } from 'react'

function Items() {
	const [items, setItems] = useState([])

	const getItems = async () => {
		const response = await fetch('/api/items', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		})
		const data = await response.json()
		if (data.error_message === '') {
			setItems(data.items)
		}
	}

	useEffect(() => {
		getItems()
	}, [])

	return (
		<div className="page container">
			<div className="ratings">
				<br />
				<ul>
					<li className="d-inline mr-5" style={{ color: 'white' }}>
						Environmental Rating:
					</li>
					<li className="d-inline mr-5" style={{ color: 'green' }}>
						Best
					</li>
					<li className="d-inline mr-5" style={{ color: 'rgb(204, 204, 0)' }}>
						Good
					</li>
					<li className="d-inline mr-5" style={{ color: 'orange' }}>
						Okay
					</li>
					<li className="d-inline mr-5">
						<a href="/about" style={{ color: 'white' }}>
							Check What It Means Here!
						</a>
					</li>
				</ul>
				<br />
			</div>

			<div className="row justify-content-center">
				{items.map((item) => (
					<div key={item.id} className="card-group col-4">
						<div className={`card card-cascade card-ecommerce wider shadow mb-5 ${item.rating}`}>
							<div className="view view-cascade overlay text-center">
								{' '}
								<img className="card-img-top" src={item.image_path} alt="" height="300" />
								<div className="mask rgba-white-slight"></div>
							</div>
							<div className="card-body card-body-cascade text-center">
								<h4 className="card-title">
									<strong>
										<p>{item.title}</p>
									</strong>
								</h4>
								<p className="card-text">{item.description}</p>
								<p className="price">₹{item.price}</p>

								<div className="card-footer">
									<a href={`/shop/${item.id}`} className="btn btn-dark">
										Details
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Items
