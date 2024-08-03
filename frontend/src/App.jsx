import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
	const [name, setName] = useState('');

	useEffect(() => {
		axios
			.get('/items')
			.then((res) => {
				setName(res.data.name);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='App'>
			<header>
				<h1>Hello, {name}</h1>
			</header>
		</div>
	);
}

export default App;
