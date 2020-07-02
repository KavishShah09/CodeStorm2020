import React, { useState } from 'react'

function Items() {
	const [items, setItems] = useState([])

	return (
		<div className="container">
			<div className="row">
				{items.map((item) => (
					<div className="col-sm-6">
						<div className="card">
							<img class="card-img-top" src={item.image_path} alt="" />
							<div className="card-body">
								<h5 className="card-title"> {item.title} </h5>
								<p className="card-text"> {item.description} </p>
								<p>Price: {item.price}</p>
								<p>Rating: {item.rating}</p>
								<a href="/" className="btn btn-primary">
									Buy now
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Items
