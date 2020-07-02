import React, { useEffect } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Badge,
  Image,
} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/about";

function App() {
  useEffect(() => {
    pingBackend();
  }, []);

  const options = {
    method: "POST",
    body: JSON.stringify({ ping: "pong" }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const pingBackend = async () => {
    const response = await fetch("/ping", options);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Codestorm 2020</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-dark">Search</Button>
            </Form>
            <Button className="profile" variant="light " size="sm">
              <Image
                src="images/user-icon.svg"
                height="35px"
                width="23px"
                rounded
              />
            </Button>
            <Button className="cart" variant="light " size="sm">
              <Badge variant="dark">9</Badge>
              <span className="sr-only">unread messages</span>
              <Image
                src="images/cart-icon.svg"
                height="35px"
                width="23px"
                rounded
              />
            </Button>
          </Navbar.Collapse>
        </Navbar>
        <Route exact path="/about" component={About} />
      </Router>
    </div>
  );
}

export default App;
