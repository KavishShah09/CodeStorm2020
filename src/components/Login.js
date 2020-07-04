import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

function Login() {
  const [userInput, setUserInput] = useState({
    username: "",
    password: "",
  });
  const handleOnChange = (e) => {
    setUserInput({ ...userInput, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  const loginOptions = {
    method: "POST",
    body: JSON.stringify(userInput),
    headers: {
      "Content-Type": "application/json",
    },
  };
  const loginUser = async () => {
    const response = await fetch("/api/login", loginOptions);
    const data = await response.json();
    if (data.error_message === "") {
      setUserInput({
        username: "",
        password: "",
      });
    } else {
      alert(data.error_message);
    }
  };

  return (
    <Container className="login">
      <h2>Login</h2>
      <br />
      <Form onSubmit={handleOnSubmit}>
        <Form.Group
          controlId="Username"
          size="sm"
          name="foo"
          className="d-flex justify-content-center"
        >
          <Form.Control
            type="text"
            name="username"
            onChange={handleOnChange}
            value={userInput.username}
            placeholder="Enter username"
            style={{ width: "18rem" }}
          />
        </Form.Group>
        <Form.Group
          controlId="Password"
          className="d-flex justify-content-center"
        >
          <Form.Control
            type="password"
            name="password"
            onChange={handleOnChange}
            value={userInput.password}
            placeholder="Password"
            style={{ width: "18rem" }}
          />
        </Form.Group>
        <Link to="/shop">
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Link>
        <br />
        <Link to="/signup">
          <Form.Text id="passwordHelpBlock" muted>
            Don't have an account? Sign up.
          </Form.Text>
        </Link>
      </Form>
    </Container>
  );
}

export default Login;
