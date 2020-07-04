import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button, Toast, CardDeck } from "react-bootstrap";

function Review() {
  return (
    <div>
      <br />
      <br />
      <CardDeck>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header className="text-success">Good product</Card.Header>
          <Card.Body>
            <Card.Title>Review by Raju Rastogi</Card.Title>
            <Card.Text>Looks great and arrived in time.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header className="text-warning">Okay product</Card.Header>
          <Card.Body>
            <Card.Title>Review by Mrs. Rastogi</Card.Title>
            <Card.Text>
              Good product but very overpriced. Atayees ki hogayi hai Kammo,
              Maruti 800 mangtay hain Dahej main, aray tu itna expensive cheez
              becheja toh shaddi kaise hogi iski
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header className="text-danger">Bad product</Card.Header>
          <Card.Body>
            <Card.Title>Review by Walter White</Card.Title>
            <Card.Text>I am the danger.</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
          </Card.Footer>
        </Card>
      </CardDeck>

      <br />
      <br />

      <h3 className="text-white">Add a review</h3>
      <br />
      <div className="feedback-form d-flex justify-content-center text-white">
        <Form style={{ width: "50rem" }}>
          <Row>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" placeholder="Enter your email" />
              </Form.Group>
            </Col>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Rating</Form.Label>
              <Form.Control as="select">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Form.Control>
            </Form.Group>
          </Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Your review</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Review;
