import React, { useState, useEffect } from "react";

function Review() {
  return (
    <div>
      <link
        href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
      {/*---- Include the above in your HEAD tag --------*/}
      <div className="container">
        <div className="row">
          <h2>Feedback</h2>
          <div className="col-md-9 col-md-offset-0"></div>
          <table width="100%" border={0}>
            <tbody>
              <tr>
                <td width="77%">
                  <div className>
                    <form
                      className="form-horizontal"
                      action="send.php"
                      method="post"
                    >
                      <fieldset>
                        {/* Name input*/}
                        <div className="form-group">
                          <label
                            className="col-md-3 control-label"
                            htmlFor="name"
                          >
                            Full Name
                          </label>
                          <div className="col-md-9">
                            <input
                              id="name"
                              name="name"
                              type="text"
                              placeholder="Your name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        {/* Email input*/}
                        <div className="form-group">
                          <label
                            className="col-md-3 control-label"
                            htmlFor="email"
                          >
                            Your E-mail
                          </label>
                          <div className="col-md-9">
                            <input
                              id="email"
                              name="email"
                              type="text"
                              placeholder="Your email"
                              className="form-control"
                            />
                          </div>
                        </div>
                        {/* Message body */}
                        <div className="form-group">
                          <label
                            className="col-md-3 control-label"
                            htmlFor="message"
                          >
                            Your message
                          </label>
                          <div className="col-md-9">
                            <textarea
                              className="form-control"
                              id="message"
                              name="message"
                              placeholder="Please enter your feedback here..."
                              rows={5}
                              defaultValue={""}
                            />
                          </div>
                        </div>
                        {/* Rating */}
                        <div className="form-group">
                          <label
                            className="col-md-3 control-label"
                            htmlFor="message"
                          >
                            Your rating
                          </label>
                          <div className="col-md-9">
                            <input
                              id="input-21e"
                              defaultValue={0}
                              type="number"
                              className="rating"
                              min={0}
                              max={5}
                              step="0.5"
                              data-size="xs"
                            />
                          </div>
                        </div>
                      </fieldset>
                    </form>
                  </div>
                </td>
                <td align="center" valign="top" width="23%">
                  {/* Form actions */}
                  <div className="form-group">
                    <div className="col-md-12 text-center">
                      <img
                        src="http://www.gohacking.com/wp-content/uploads/2010/06/captcha-300x171.jpg"
                        height="140px"
                        width="270px"
                      />
                      <br />
                      <button type="submit" className="btn btn-primary btn-md">
                        Submit
                      </button>
                      <button type="reset" className="btn btn-default btn-md">
                        Clear
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="container">
          <div className="row">
            <h2>Featured Testimonials</h2>
            <div className="col-md-6">
              <div className="blockquote-box clearfix">
                <div className="square pull-left">
                  <img
                    src="http://placehold.it/60/8e44ad/FFF&text=B"
                    alt=""
                    className
                  />
                </div>
                <h4>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </div>
              <div className="blockquote-box blockquote-primary clearfix">
                <div className="square pull-left">
                  <span className="glyphicon glyphicon-music glyphicon-lg" />
                </div>
                <h4>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.{" "}
                  <a href="http://www.jquery2dotnet.com/search/label/jquery">
                    jquery2dotnet
                  </a>
                </p>
              </div>
              <div className="blockquote-box blockquote-success clearfix">
                <div className="square pull-left">
                  <span className="glyphicon glyphicon-tree-conifer glyphicon-lg" />
                </div>
                <h4>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="blockquote-box blockquote-info clearfix">
                <div className="square pull-left">
                  <span className="glyphicon glyphicon-info-sign glyphicon-lg" />
                </div>
                <h4>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </div>
              <div className="blockquote-box blockquote-warning clearfix">
                <div className="square pull-left">
                  <span className="glyphicon glyphicon-warning-sign glyphicon-lg" />
                </div>
                <h4>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </div>
              <div className="blockquote-box blockquote-danger clearfix">
                <div className="square pull-left">
                  <span className="glyphicon glyphicon-record glyphicon-lg" />
                </div>
                <h4>John Doe</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer posuere erat a ante.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
