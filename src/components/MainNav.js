import React from 'react'
import { Nav, Navbar, Button, Badge, Image } from 'react-bootstrap'

function MainNav() {
	return (
		<div>
			<Navbar bg="dark" variant="dark" expand="lg">
				<Navbar.Brand href="/">
					<img
						src="https://github.com/KavishShah09/CodeStorm2020/blob/master/public/images/logo.png?raw=true"
						height="40"
						width="141.46"
						alt=""
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/shop">Shop</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
					<Button className="profile dropdown" variant="dark" size="sm">
						<Image
							src="https://github.com/KavishShah09/CodeStorm2020/blob/master/public/images/user-icon.png?raw=true"
							height="35px"
							width="33px"
							rounded
							className="dropdown-toggle"
							id="navbarDropdown"
							role="button"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						/>
						<div className="dropdown-menu" aria-labelledby="navbarDropdown">
							<a className="dropdown-item" href="/signup">
								Sign Up
							</a>
							<a className="dropdown-item" href="/login">
								Login
							</a>
							<div className="dropdown-divider"></div>
							<a className="dropdown-item" href="/cart">
								Your Cart
							</a>
						</div>
					</Button>
					<Button className="cart" href="/cart" variant="dark" size="sm">
						<Badge variant="light">0</Badge>
						<span className="sr-only">unread messages</span>
						<Image
							src="https://raw.githubusercontent.com/KavishShah09/CodeStorm2020/master/public/images/cart-icon.png"
							height="35px"
							width="33px"
							rounded
						/>
					</Button>
				</Navbar.Collapse>
			</Navbar>
		</div>
	)
}

export default MainNav
