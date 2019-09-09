import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
	constructor(props) {
		super(props);
		console.log(this.props.dishDetail)
	}

		renderDish(dish) {
			if(dish) {
				return (			
					<Card>
						<CardImg top src = {dish.image} alt = {dish.name}  />
							<CardBody>
								<CardTitle>{dish.name}</CardTitle>
									<CardText>{dish.description}</CardText>
								</CardBody>
					</Card>	
					)
		} else {
				return (
					<div></div>
					)
				}
			}

		fetchComments(comments) {
			let commentDetails = comments.map((comm) => {
					return (
							<div key = {comm.id}>
							<li> {comm.comment}</li>
							<li> -- {comm.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comm.date)))} </li>
							</div>
						)
					})
			return commentDetails;
		}

		renderComments(comments) {

			if(comments != null) {
				return (
					<div>
						<h4>Comments</h4>
						 <ul className = "list-unstyled">
						 	{this.fetchComments(comments)}
						</ul>
					</div>
				)

			} else {
				return (
					<div></div>
					)		
			}
		}

	render(){
		const dishDetails = this.props.dishDetail;
		let comments;
		if(dishDetails) {
			comments = dishDetails.comments;
		} else {
			comments = null;
		}
		return(	
				<div className= "container">
				<div className = "row">
					<div className = "col-12 col-md-5 m-1">
						{this.renderDish(dishDetails)}
					</div>
					<div className = "col-12 col-md-5 m-1">
						
							{this.renderComments(comments) }

					</div>
				</div>
			</div>
			)
	}

}

export default DishDetail;