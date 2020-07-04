import React, { useState } from 'react'
import { Col, Row, Card, Form, Button } from 'react-bootstrap'
import Moment from 'react-moment'

function Review() {
	let today = new Date()
	let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()

	const [reviews, setReviews] = useState([])
	const [newReview, setNewReview] = useState({
		description: '',
		name: '',
		date: date,
	})

	const handleOnChange = (e) => {
		setNewReview({ ...newReview, [e.target.name]: e.target.value })
	}

	const handleOnSubmit = (e) => {
		e.preventDefault()
		setReviews([...reviews, newReview])
	}

	return (
		<div>
			<h4 className="text-white float-left mt-lg-5">Add a review:</h4>
			<div className="feedback-form d-flex justify-content-center text-white">
				<Form style={{ width: '59rem' }} className="mt-lg-5" onSubmit={handleOnSubmit}>
					<Row>
						<Col>
							<Form.Group controlId="exampleForm.ControlInput1">
								<Form.Control
									type="text"
									name="name"
									value={newReview.name}
									onChange={handleOnChange}
									placeholder="Enter your name"
								/>
							</Form.Group>
						</Col>
					</Row>
					<Form.Group controlId="exampleForm.ControlTextarea1">
						<Form.Control
							as="textarea"
							rows="2"
							name="description"
							value={newReview.description}
							onChange={handleOnChange}
							placeholder="Enter your review"
						/>
					</Form.Group>
					<Button variant="dark" type="submit">
						Submit
					</Button>
				</Form>
			</div>
			<div className="reviews">
				<h4 className="text-white text-left">Reviews : </h4>
				{reviews.map((review) => (
					<Card className="mt-3">
						<Card.Body>
							<Card.Title>{review.description}</Card.Title>
						</Card.Body>
						<Card.Footer>
							<small className="text-muted text-right">
								{review.name}{' '}
								<Moment format="D MMM YYYY" withTitle>
									{review.date}
								</Moment>
							</small>
						</Card.Footer>
					</Card>
				))}
				<Card className="mt-3">
					<Card.Body>
						<Card.Title>
							Great fit. Bargain at the price and also made feel helping in the environment in some way
						</Card.Title>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted text-right">John Doe 27 June 2020</small>
					</Card.Footer>
				</Card>
				<Card className="mt-3">
					<Card.Body>
						<Card.Title>Been looking for such a t-shirt since a long time</Card.Title>
					</Card.Body>
					<Card.Footer>
						<small className="text-muted text-right">Brad Cooper 29 June 2020</small>
					</Card.Footer>
				</Card>
			</div>
		</div>
	)
}

export default Review
