import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Workouts from './routes/Workouts/Workouts';
import Home from './routes/Home/Home';
import EmptyWorkout from './routes/EmptyWorkout/EmptyWorkout';
import NewRoutine from './routes/NewRoutine/NewRoutine';
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
						<Route path='/' element={<Home />}></Route>
						<Route path='/workouts' element={<Workouts />}></Route>
						<Route path='/empty-workout' element={<EmptyWorkout />}></Route>
						<Route path='/new-routine' element={<NewRoutine />}></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
