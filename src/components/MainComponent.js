import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu  from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dishes : DISHES,
			selectedDish : null
		};
	}

	onDishSelected(dish) {
		this.setState({ selectedDish : dish });
		}

	render() {
	  return (
	    <div>
	      <Navbar dark color="primary">
	        <div className="container">
	          <NavbarBrand href="/">Ristorant Con Fusion</NavbarBrand>
	        </div>
	      </Navbar>
	      <Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelected(dishId)}  />
	      <DishDetail dishDetail = {this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
	    </div>
	  );
	}
}

export default Main;
