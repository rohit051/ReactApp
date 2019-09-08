import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
	}

		renderDish(dish) {
			return (
				<Card>
					<CardImg top src = {dish.image} alt = {dish.name}  />
						<CardBody>
							<CardTitle>{dish.name}</CardTitle>
								<CardText>{dish.description}</CardText>
							</CardBody>
				</Card>
				)
		}

		renderComments(comments) {
			let commentDetails;
			if(comments != null) {
				commentDetails = comments.map((comm) => {
					let commentDate = new Date(comm.date).toDateString();
					return (
							<div key = {comm.id}>
							<li> {comm.comment}</li>
							<li> -- {comm.author},  {commentDate} </li>
							</div>
						)
					})
			} else {
				commentDetails = <div></div>;		
			}
			return commentDetails;
		}

	render(){
		const dishDetails = this.props.dishDetail;
		return(
				<div className = "row">
					<div className = "col-12 col-md-5 m-1">
						{this.renderDish(dishDetails)}
					</div>
					<div className = "col-12 col-md-5 m-1">
						<h4>Comments</h4>
						 <ul className = "list-unstyled">
							{this.renderComments(dishDetails.comments) }
						</ul>
					</div>
				</div>
			)
	}

}

export default DishDetail;