import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Workouts from './routes/Workouts/Workouts';
import Home from './routes/Home/Home';
import {
	SignedIn,
	SignedOut,
	SignInButton,
	UserButton,
} from '@clerk/clerk-react';

import './App.css';

function App() {
	return (
		<>
			<header>
				<SignedOut>
					<SignInButton />
				</SignedOut>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header>
			<Router>
				<div>
					<Routes>
						<Route exact path='/' element={<Home />}></Route>
						<Route exact path='/workouts' element={<Workouts />}></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
