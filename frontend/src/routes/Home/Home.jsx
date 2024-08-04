import React, { useState } from 'react';
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react';

import './Home.css';

function Home() {
	const [auth, setAuth] = useState(true);

	return (
		<div className='home'>
			{/* <header>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header> */}
			{/*  If not authenticated, utilize CLerk for signup/login */}
			{!auth && (
				<div>
					<h1>Welcome!</h1>
					<h2>Login/signup</h2>
				</div>
			)}
			{/* If authenticated, show homepage */}
			{auth && (
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
			)}
		</div>
	);
}

export default Home;
