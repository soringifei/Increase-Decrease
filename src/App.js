import React, { useState } from 'react';
import Counter from './components/Counter';
import './App.css';

const App = () => {
	const [counter, setCounter] = useState(25);

	function handleDecrease() {
		setCounter(counter - 1);
	}

	function handleIncrease() {
		setCounter(counter + 1);
	}

	return (
		<div className='Card'>
			<Counter
				counter={counter}
				onClick={handleDecrease}
			/>
			<Counter
				counter={counter}
				onClick={handleIncrease}
			/>
		</div>
	);
};

export default App;
