import React, { useState } from 'react';
import { BrowserRouter as Navigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Home.css';
import { SignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

function Home() {
	return (
		<div className='home'>
			<nav>
				<Link to='/'>Home</Link>
				<br />
				<Link to='/workouts'>Workouts</Link>
			</nav>

			<SignedOut>
				<div>
					<h1>Login to get started using lifting-app</h1>
					<div className='SignIn'>
						<SignIn path='/' />
					</div>
				</div>
			</SignedOut>

			<SignedIn>
				<>
					<h1>Home</h1>
					<ul className='home'>
						<li>
							Workout 1
							<ul>
								<li>Exercise 1</li>
								<li>Exercise 2</li>
								<li>Exercise 3</li>
							</ul>
						</li>
					</ul>
					<ul>
						<li>
							Workout 2
							<ul>
								<li>Exercise 1</li>
								<li>Exercise 2</li>
								<li>Exercise 3</li>
							</ul>
						</li>
					</ul>
				</>
			</SignedIn>
		</div>
	);
}

export default Home;
