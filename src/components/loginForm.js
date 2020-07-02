import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
function Login() {
	const [userInput, setUserInput] = useState({
		username: '',
		password: '',
	})
	const handleOnChange = (e) => {
		setUserInput({ ...userInput, [e.target.name]: e.target.value })
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		loginUser()
	}

	const loginOptions = {
		method: 'POST',
		body: JSON.stringify(userInput),
		headers: {
			'Content-Type': 'application/json',
		},
	}
	const loginUser = async () => {
		const response = await fetch('/api/login', loginOptions)
		const data = await response.json()
		if (data.error_message !== '') {
			setUserInput({
				username: '',
				password: '',
			})
		} else {
			alert(data.error_message)
		}
	}

	return (
		<Container>
			<Form onSubmit={handleOnSubmit}>
				<Form.Group controlId="Username" size="sm" name="foo">
					<Form.Label>Username</Form.Label>
					<Form.Control
						type="text"
						name="username"
						onChange={handleOnChange}
						value={userInput.username}
						placeholder="Enter username"
					/>
				</Form.Group>
				<Form.Group controlId="Password">
					<Form.Label>Password</Form.Label>
					<Form.Control
						type="password"
						name="password"
						onChange={handleOnChange}
						value={userInput.password}
						placeholder="Password"
					/>
				</Form.Group>
				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	)
}

export default Login
