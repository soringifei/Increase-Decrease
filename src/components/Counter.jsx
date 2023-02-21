import React, { useState } from 'react';

function Counter(props) {
	return (
		<div>
			<p>Count: {props.counter}</p>
			<button onClick={props.onClick}>Click</button>
		</div>
	);
}

export default Counter;
