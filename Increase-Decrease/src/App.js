import React from 'react';
import Increase from './components/Increase';
import Decrease from './components/Decrease';
import './App.css';

const App = () => {
	return (
		<div className='Card'>
			<Increase />
			<Decrease />
		</div>
	);
};

export default App;
