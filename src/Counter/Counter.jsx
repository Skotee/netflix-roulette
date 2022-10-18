import React, { Component } from 'react';

import './Counter.scss';

class Counter extends Component {
	constructor() {
		super();
		this.state = {
			counter: 0
		}; 
	}

	increment = () => {
		this.setState({ counter: this.state.counter + 1 });
	};

	decrement = () => {
		this.setState({ counter: this.state.counter - 1 });
	};

	render() {
		return (
			<div>
				<div>
					<h3>Counter</h3>
					<p>Your number:</p>
					<p>{this.state.counter}</p>
				</div>
				<div className='buttonContainer'>
					<button onClick={this.decrement}>-1</button>
					<button onClick={this.increment}>+1</button>
				</div>
			</div>
		);
	}
}

export default Counter;