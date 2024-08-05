import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Workouts.css';

function Workouts() {
	const [name, setName] = useState('');

	useEffect(() => {
		axios
			.get('http://localhost:8080/workouts')
			.then((res) => {
				setName(res.data.workouts[0]);
				// console.log(res.data.workouts);
			})
			.catch((err) => console.log(err));
	}, []);

	return (
		<div className='workouts'>
			<nav>
				<Link to='/'>Home</Link>
				<br />
				<Link to='/workouts'>Workouts</Link>
			</nav>
			<h1>{name}</h1>
			<div>
				<h1>Quick Start</h1>
				<Link to='/empty-workout'>Start an empty workout</Link>
			</div>
			<hr />
			<div>
				<h1>Routines</h1>
				<Link to='/new-routine'>New Routine</Link>
			</div>
			<hr />
			<div>
				{/* Toggle */}
				<h2>My Routines</h2>
				<h1>If routine exists, it shows up here</h1>
			</div>
		</div>
	);
}

export default Workouts;
