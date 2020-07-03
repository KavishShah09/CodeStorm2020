import React from "react";
import "../App.css";
import { Col, Row, Card } from "react-bootstrap";

function About() {
  return (
    <div className="about">
      <h1 className="heading">About Us</h1>
      <p className="sub-heading">
        GreenTerminal is a site that makes customers educated decisions before{" "}
        <br />
        buying anything that may have harmed the environment in the making.
        <br />
        <br />
      </p>
      <h2> We Reduce the negative effects of fashion in three ways</h2>
      <br />
      <div className="container-fluid threeway">
        <Row>
          <Col>
            <Card border="success" bg="dark" style={{ width: "18rem" }}>
              <Card.Header>Recycle</Card.Header>
              <Card.Body>
                <Card.Title> Re-use old clothes</Card.Title>
                <Card.Text>
                  We try to educateconsumers about repairing and recycling their
                  clothes and operate repairing services. We also use old
                  recyclable material to make new clothing.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="success" bg="success" style={{ width: "18rem" }}>
              <Card.Header>Replace</Card.Header>
              <Card.Body>
                <Card.Title> Switch raw materials</Card.Title>
                <Card.Text>
                  {" "}
                  A switch from virgin polyester to recycled material – made by
                  mechanically or chemically breaking down plastic drinks
                  bottles – can reduce the carbon footprint of polyester by 40%.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="success" bg="dark" style={{ width: "18rem" }}>
              <Card.Header>Reduce</Card.Header>
              <Card.Body>
                <Card.Title>Make energy savings</Card.Title>
                <Card.Text>
                  Beyond the materials stage, firms can reduce energy use in
                  their warehouses, stores and offices. Small improvements like
                  switching to energy-efficient lightbulbs can reduce emissions
                  by 70%.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <br />
      </div>
    </div>
  );
}

export default About;
