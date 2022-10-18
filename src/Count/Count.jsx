import React, { PureComponent } from 'react';

class Count extends PureComponent {
	constructor() {
		super();
		this.state = {
			count: 0
		};
	}

	// PureComponent has already built-in shouldComponentUpdate with shallow comparison of current and previous props and state
	// Thanks to this component won't be rerendered even if the previous state has the same value
	// Below I showed example how it would be implemented if class would extend Component instead of PureComponent, and we would like to achieve the same result


	//   shouldComponentUpdate(nextProps, nextState) {
	//     if(nextState.count !== this.state.count) {
	//         return true
	//     }
	//     return false
	// }

	update(event) {
		const val = event.target.value;
		if (val != '') {
			this.setState({ count: val  });              
		}
	}

	render() {
		return (
			<div>
				<h3> Count: { this.state.count }</h3>
				<input 
					onChange={(e) => this.update(e)} 
					placeholder="Enter a count.."
				></input>
			</div>
		);
	}
}

export default Count;