import React, { useState } from 'react';

function SecondCounter() {
	const [count, setCount] = useState(0);

	return (
		<div>
			<h3> Count: { count }</h3>
			<input 
				onChange={e => setCount(e.target.value)} 
				placeholder="Enter a count.."
			></input>
		</div>
	);
}

export default SecondCounter;