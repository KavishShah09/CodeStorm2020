import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
function SignUp() {
	const [user, setUser] = useState({
		first_name: '',
		last_name: '',
		email: '',
		address: '',
		phone_number: 0,
		age: 0,
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
		if (data.error_message !== '') {
			setUser({
				first_name: '',
				last_name: '',
				email: '',
				address: '',
				phone_number: 0,
				age: 0,
				username: '',
				password: '',
				confirm_password: '',
			})
		} else {
			alert(data.error_message)
		}
	}

	return (
		<Container>
			<Form onSubmit={handleOnSubmit}>
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
				<Form.Group controlId="Address 1">
					<Form.Label>Address</Form.Label>
					<Form.Control
						type="text"
						name="address"
						onChange={handleOnChange}
						value={user.address}
						placeholder="1234 Main st."
					/>
				</Form.Group>
				<Form.Group controlId="Number">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="number"
						name="phone_number"
						onChange={handleOnChange}
						value={user.phone_number}
						placeholder=""
					/>
				</Form.Group>
				<Form.Group controlId="Age">
					<Form.Label>Age</Form.Label>
					<Form.Control type="number" name="age" onChange={handleOnChange} value={user.age} placeholder="" />
				</Form.Group>
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
				<Form.Group controlId="ConfirmPassword">
					<Form.Label>Confirm Password</Form.Label>
					<Form.Control
						type="password"
						name="confirm_password"
						onChange={handleOnChange}
						value={user.confirm_password}
						placeholder=" Confirm Password"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	)
}

export default SignUp
