import React, { useState, useEffect } from "react";

function Items() {
  // const [items, setItems] = useState([])

  // const getItems = async () => {
  // 	const response = await fetch('/api/items', {
  // 		method: 'GET',
  // 		headers: {
  // 			'Content-Type': 'application/json',
  // 		},
  // 	})
  // 	const data = await response.json()
  // 	if (data.error_message === '') {
  // 		setItems(data.items)
  // 	}
  // }

  // useEffect(() => {
  // 	getItems()
  // }, [])

  return (
    <div className="page container">
      {/* <div className="row justify-content-center">
				{items.map((item) => (
					<div className="card-group col-4">
						<div className="card card-cascade card-ecommerce wider shadow mb-5 ">
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
									<a href={`/shop/${item.id}`} className="btn btn-primary">
										Details
									</a>
								</div>
							</div>
						</div>
					</div>
				))}
			</div> */}
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-3">
          <div className="card card-cascade card-ecommerce wider shadow mb-5 ">
            <div className="view view-cascade overlay text-center">
              {" "}
              <img
                className="card-img-top"
                src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                alt=""
                height="300"
              />
              <div className="mask rgba-white-slight"></div>
            </div>
            <div className="card-body card-body-cascade text-center">
              <h4 className="card-title">
                <strong>
                  <p>Title</p>
                </strong>
              </h4>
              <p className="card-text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, reiciendis.{" "}
              </p>
              <p className="price">₹299</p>

              <div className="card-footer">
                <a href="/" className="btn btn-primary">
                  Buy now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    /* {items.map((item) => (
					<div className="col-sm-4">
						<div className="card">
							<img className="card-img-top" src={item.image_path} alt="" />
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
				))} */
  );
}

export default Items;
