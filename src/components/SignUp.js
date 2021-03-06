import React, { useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import '../App.css'
function SignUp() {
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		address: '',
		phone_number: '',
		age: '',
		username: '',
		password: '',
		confirm_password: '',
	})

	const handleOnChange = (e) => {
		setUser({ ...user, [e.target.name]: e.target.value })
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		registerUser()
	}

	const signUpOptions = {
		method: 'POST',
		body: JSON.stringify(user),
		headers: {
			'Content-Type': 'application/json',
		},
	}

	const registerUser = async () => {
		const response = await fetch('/api/signup', signUpOptions)
		const data = await response.json()
		if (data.error_message === '') {
			setUser({
				first_name: '',
				last_name: '',
				email: '',
				address: '',
				phone_number: '',
				age: '',
				username: '',
				password: '',
				confirm_password: '',
			})
			window.location.replace('http://localhost:3000/login')
		} else {
			alert(data.error_message)
			window.location.replace('http://localhost:3000/signup')
		}
	}

	return (
		<Container className="signup">
			<h2>Sign up</h2>
			<br />
			<Form variant="light" onSubmit={handleOnSubmit}>
				<Row>
					<Col>
						<Form.Group controlId="FirstName" size="sm" name="foo">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								name="first_name"
								onChange={handleOnChange}
								value={user.first_name}
								placeholder="Enter first Name"
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="LastName" size="sm" name="foo">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								type="text"
								name="last_name"
								onChange={handleOnChange}
								value={user.last_name}
								placeholder="Enter last Name"
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="Age">
							<Form.Label>Age</Form.Label>
							<Form.Control
								type="number"
								name="age"
								onChange={handleOnChange}
								value={user.age}
								placeholder="Enter your age"
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col xs="8">
						<Form.Group controlId="Address 1">
							<Form.Label>Address</Form.Label>
							<Form.Control
								type="text"
								name="address"
								onChange={handleOnChange}
								value={user.address}
								placeholder="Enter your current address"
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="Number">
							<Form.Label>Phone number</Form.Label>
							<Form.Control
								type="number"
								name="phone_number"
								onChange={handleOnChange}
								value={user.phone_number}
								placeholder="Enter your phone number"
							/>
						</Form.Group>
					</Col>
				</Row>
				<Row>
					<Col>
						<Form.Group controlId="Email" size="sm" name="foo">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								onChange={handleOnChange}
								value={user.email}
								placeholder="Enter email"
							/>
							<Form.Text className="text-muted"></Form.Text>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="Username" size="sm" name="foo">
							<Form.Label>Username</Form.Label>
							<Form.Control
								type="text"
								name="username"
								onChange={handleOnChange}
								value={user.username}
								placeholder="Enter username"
							/>
						</Form.Group>
					</Col>
				</Row>

				<Form.Row></Form.Row>
				<Row>
					<Col>
						<Form.Group controlId="Password">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								onChange={handleOnChange}
								value={user.password}
								placeholder="Password"
							/>
						</Form.Group>
					</Col>
					<Col>
						<Form.Group controlId="ConfirmPassword">
							<Form.Label>Confirm password</Form.Label>
							<Form.Control
								type="password"
								name="confirm_password"
								onChange={handleOnChange}
								value={user.confirm_password}
								placeholder=" Confirm Password"
							/>
						</Form.Group>
					</Col>
				</Row>
				<Button variant="dark" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	)
}

export default SignUp
