
import React from 'react'
import {
	Nav,
	Navbar,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Badge,
	Image,
	Container
  } from "react-bootstrap";
function SignUp(){
    return (
		<Container>
		<Form>
		<Form.Group controlId="Name" size="sm" name="foo">
		  <Form.Label>First Name</Form.Label>
		  <Form.Control type="text" placeholder="Enter first Name" />
		 </Form.Group> 	
		<Form.Group controlId="Email" size="sm" name="foo">
		  <Form.Label>Email address</Form.Label>
		  <Form.Control type="email" placeholder="Enter email" />
		  <Form.Text className="text-muted">
			
		  </Form.Text>
		</Form.Group>
		<Form.Group controlId="Password">
		  <Form.Label>Password</Form.Label>
		  <Form.Control type="password" placeholder="Password" />
		</Form.Group>
		<Form.Group controlId="Password">
		  <Form.Label>Confirm Password</Form.Label>
		  <Form.Control type="password" placeholder=" Confirm Password" />
		</Form.Group>
		<Form.Group controlId="Address 1" >
		  <Form.Label>Address</Form.Label>
		  <Form.Control type="text" placeholder="1234 Main st." />
		</Form.Group>
	
		<Form.Group controlId="Number" >
		  <Form.Label>Phone Number</Form.Label>
		  <Form.Control type="number" placeholder="" />
		</Form.Group>
		<Form.Group controlId="Age" >
		  <Form.Label>Age</Form.Label>
		  <Form.Control type="number" placeholder="" />
		</Form.Group>
		<Button variant="primary" type="submit">
		  Submit
		</Button>
	  </Form>
	  </Container>
	);
}

export default SignUp;