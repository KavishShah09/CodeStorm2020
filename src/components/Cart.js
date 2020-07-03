/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Cart() {
  return (
    <div className="container text-white">
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
                  <tr>
                    <td>
                      <img
                        src="https://mms-images-prod.imgix.net/mms/images/catalog/b65970c681d6fa3ea1b6760d3c137415/colors/116223/views/alt/front_medium_extended.png?ixlib=rails-2.1.4&w=320&h=380&fit=crop&dpr=1&q=39&fm=png&auto=format"
                        height="50px"
                        width="50px"
                      />{" "}
                    </td>
                    <td>Product Name</td>
                    <td className="text-success">Best</td>

                    <td className="text-right">₹299</td>
                    <td className="text-right">
                      <button className="btn btn-sm btn-danger">
                        <i className="fa fa-trash"></i>
                        {"Remove"}
                      </button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://dummyimage.com/50x50/55595c/fff"
                        height="50px"
                        width="50px"
                      />{" "}
                    </td>
                    <td>Product Name</td>
                    <td className="text-warning">good</td>

                    <td className="text-right">₹299</td>
                    <td className="text-right">
                      <button className="btn btn-sm btn-danger">
                        <i className="fa fa-trash"></i>
                        {"Remove"}
                      </button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="https://dummyimage.com/50x50/55595c/fff"
                        height="50px"
                        width="50px"
                      />{" "}
                    </td>
                    <td>Product Name</td>
                    <td className="text-danger">Worst</td>

                    <td className="text-right">₹299</td>
                    <td className="text-right">
                      <button className="btn btn-sm btn-danger">
                        <i className="fa fa-trash"></i>
                        {"Remove"}
                      </button>{" "}
                    </td>
                  </tr>
                  <tr>
                    <td></td>
                    <td></td>

                    <td>Sub-Total</td>
                    <td className="text-right">₹897</td>
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
                      <strong>₹897</strong>
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
                <button className="btn btn-lg btn-block btn-success text-uppercase">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
