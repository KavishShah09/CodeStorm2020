import React, { useState, useEffect } from "react";

function Item({ match }) {
  // const [item, setItem] = useState({})

  // const getItem = async () => {
  // 	const response = await fetch(`/api/item/${match.params.id}`, {
  // 		method: 'GET',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		},
  // 	})
  // 	const data = await response.json()
  // 	if (data.error_message === '') {
  // 		setItem(data.item)
  // 	}
  // }

  // useEffect(() => {
  // 	getItem()
  // }, [])

  return (
    /* <div className="d-inline">
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
			</div> */

    <div className="container">
      <h1 className="my-4 text-white">Title</h1>

      <div className="row">
        <div className="col-md-8">
          <img
            className="img-fluid"
            src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format
		  "
            alt=""
          />
        </div>

        <div className="col-md-4">
          <h3 className="my-3 text-white">Product Description</h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
            euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
            adipiscing in adipiscing et, interdum nec metus. Mauris ultricies,
            justo eu convallis placerat, felis enim.
          </p>
          <h3 className="my-3 text-white">Project Details</h3>
          <ul className="text-white">
            <li>Lorem Ipsum</li>
            <li>Dolor Sit Amet</li>
            <li>Consectetur</li>
            <li>Adipiscing Elit</li>
          </ul>
        </div>
      </div>

      <h3 className="my-4 text-white">Related Products</h3>

      <div className="row">
        <div className="col-md-3 col-sm-6 mb-4">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </div>

        <div className="col-md-3 col-sm-6 mb-4">
          <img className="img-fluid" src="http://placehold.it/500x300" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Item;
