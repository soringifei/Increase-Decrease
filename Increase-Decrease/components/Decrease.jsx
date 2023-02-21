import React, { useState } from 'react';

function Decrease() {
	const [count, setCount] = useState(25);

	function handleClick() {
		setCount(count - 1);
	}

	return (
		<div>
			<p>Count: {count}</p>
			<button onClick={handleClick}>Decrease count by 1</button>
		</div>
	);
}

export default Decrease;
