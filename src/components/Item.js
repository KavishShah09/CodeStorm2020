import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

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
    // <div className="container">
    // 	<div className="row mt-5">
    // 		<div className="col-4">
    // 			<img className="img-fluid" src={item.image_path} alt="" width="400" />
    // 		</div>

    // 		<div className="col-md-8">
    // 			<h1 className="my-4 text-white text-left">{item.title}</h1>
    // 			<h3 className="my-3 text-white text-left">Product Description :</h3>
    // 			<p className="text-white text-left">{item.description}</p>
    // 			<h3 className="text-white text-left">Price: </h3>
    // 			<h5 className="text-white text-left">₹{item.price}</h5>
    // 			<p className="text-success text-left">In Stock</p>
    // 			<p className="text-white text-left">Deliverable in 3-4 Business Days</p>
    // 		</div>

    // 		<div className="col-4"></div>
    // 	</div>
    // 	<h2 className="my-4 text-white">Reviews</h2>

    // 	<div className="justify-content-center">
    // 		<div className="text-dark bg-light">
    // 			<p>this is a review</p>
    // 		</div>

    // 		<div className="text-dark bg-light">
    // 			<p>this is a review</p>
    // 		</div>

    // 		<div className="text-dark bg-light">
    // 			<p>this is a review</p>
    // 		</div>
    // 	</div>
    // </div>
    <div className="container">
      <div className="row mt-5">
        <div className="col-4 border border-dark">
          <img
            className="img-fluid"
            src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
            alt=""
            width="400"
          />
        </div>

        <div className="col-md-8 product  ">
          <h1 className="my-4  text-left d-flex justify-content-center border-bottom border-warning">
            Title
          </h1>

          <>
            <Button variant="dark" size="sm" className="sizes" active>
              S
            </Button>{" "}
            <Button variant="dark" size="sm" className="sizes" disabled>
              M
            </Button>{" "}
            <Button variant="dark" size="sm" className="sizes" disabled>
              L
            </Button>
          </>
          <br />
          <h3 className="text-white text-left d-flex justify-content-center mt-2">
            Price:{" "}
          </h3>
          <h5 className="text-white text-left d-flex justify-content-center">
            ₹299
          </h5>
          <p className="text-success text-left d-flex justify-content-center border-bottom border-success">
            In Stock
          </p>
          <h3 className="my-3 text-white d-flex justify-content-center">
            Description
          </h3>
          <p className="text-white text-center ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Nam viverra euismod odio, gravida pellentesque urna varius vitae.{" "}
            <br />
          </p>

          <p className="text-white text-left d-flex justify-content-center">
            Deliverable in 3-4 Business Days
          </p>
          <div className="product-buttons d-flex justify-content-center">
            <Link to="/login">
              <Button variant="dark" type="submit">
                Buy now
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="dark" type="submit">
                Add to Cart
              </Button>
            </Link>
            <Link to="/shop">
              <Button variant="dark" type="submit">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <h2 className="my-4 text-white">Reviews</h2>

      <div className="justify-content-center">
        <div className="text-dark bg-light">
          <p>this is a review</p>
        </div>

        <div className="text-dark bg-light">
          <p>this is a review</p>
        </div>

        <div className="text-dark bg-light">
          <p>this is a review</p>
        </div>
      </div>
    </div>
  );
}

export default Item;
