import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Workouts.css';

function Workouts() {
	const [name, setName] = useState('');

	useEffect(() => {
		axios
			.get('/workouts')
			.then((res) => {
				setName(res.data.w1);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='workouts'>
			<div>
				<h1>Quick Start</h1>
				<h2>Start an empty workout</h2>
			</div>
			<hr />
			<div>
				<h1>Routines</h1>
				<h2>New Routine</h2>
			</div>
			<hr />
			<div>
				<h2>My Routines</h2>
				<h1>New Routine</h1>
			</div>
		</div>
	);
}

export default Workouts;
