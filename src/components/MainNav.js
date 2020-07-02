import React from 'react'
import { Nav, Navbar, Button, Badge, Image } from 'react-bootstrap'

function MainNav() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="/">Codestorm 2020</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
						<Nav.Link href="/signup">Sign Up</Nav.Link>
						<Nav.Link href="/login">Login</Nav.Link>
					</Nav>
					<Button href="/" className="profile" variant="light " size="sm">
						<Image src="images/user-icon.svg" height="35px" width="23px" rounded />
					</Button>
					<Button className="cart" variant="light " size="sm">
						<Badge variant="dark">0</Badge>
						<span className="sr-only">unread messages</span>
						<Image src="images/cart-icon.svg" height="35px" width="23px" rounded />
					</Button>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default MainNav
