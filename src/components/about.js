import React from 'react'
import '../App.css'
import { Col, Row, Card } from 'react-bootstrap'

function About() {
	return (
		<div className="about">
			<h1 className="heading">About Us</h1>
			<p className="sub-heading">
				GreenTerminal is a site that makes customers educated decisions before <br />
				buying anything that may have harmed the environment in the making.
				<br />
				<br />
			</p>
			<br />
			<h2> We have a Unique Rating System</h2>
			<br />
			<div className="container-fluid  rating-system d-flex justify-content-center threeway">
				<Card className="rating-card" border="dark" bg="success" style={{ width: '50rem' }}>
					<Card.Body>
						<Card.Title>Best</Card.Title>
						<Card.Text>
							We use 100% recycled material + Reused material in the manufacture of these goods, Reducing the emissions
							caused by a whopping 60%!
						</Card.Text>
					</Card.Body>
				</Card>
				<br />
				<Card border="dark" bg="warning" style={{ width: '50rem' }}>
					<Card.Body>
						<Card.Title>Good</Card.Title>
						<Card.Text>
							We use recyclable eco-friendly material in the manufacture of these goods, causing 40% less emissions than
							regular pieces of clothing.
						</Card.Text>
					</Card.Body>
				</Card>
				<br />
				<Card className="color-card" border="dark" bg="warning" style={{ width: '50rem' }}>
					<Card.Body>
						<Card.Title>Okay</Card.Title>
						<Card.Text>
							Despite this being our lowest rating, with our re-use and recycle methods, manufacture of these goods
							causes 20% less emissions than a regular piece of clothing.
						</Card.Text>
					</Card.Body>
				</Card>
			</div>
			<br />
			<br />
			<h2> We Reduce the negative effects of fashion in three ways</h2>
			<br />
			<div className="container-fluid threeway">
				<Row>
					<Col>
						<Card border="success" bg="dark" style={{ width: '18rem' }}>
							<Card.Header>Recycle</Card.Header>
							<Card.Body>
								<Card.Title> Re-use old clothes</Card.Title>
								<Card.Text>
									We try to educate consumers about repairing and recycling their clothes and operate repairing
									services. We also use old recyclable material to make new clothing.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card border="success" bg="success" style={{ width: '18rem' }}>
							<Card.Header>Replace</Card.Header>
							<Card.Body>
								<Card.Title> Switch raw materials</Card.Title>
								<Card.Text>
									{' '}
									A switch from virgin polyester to recycled material – made by mechanically or chemically breaking down
									plastic drinks bottles – can reduce the carbon footprint of polyester by 40%.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card border="success" bg="dark" style={{ width: '18rem' }}>
							<Card.Header>Reduce</Card.Header>
							<Card.Body>
								<Card.Title>Make energy savings</Card.Title>
								<Card.Text>
									Beyond the materials stage, We reduce energy use in our warehouses, stores and offices. Small
									improvements like switching to energy-efficient lightbulbs can reduce emissions by 70%.
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
				<br />
			</div>
		</div>
	)
}

export default About
