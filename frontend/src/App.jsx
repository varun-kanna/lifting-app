import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from 'react-router-dom';
import Workouts from './routes/Workouts/Workouts';
import Home from './routes/Home/Home';
import EmptyWorkout from './routes/EmptyWorkout/EmptyWorkout';
import NewRoutine from './routes/NewRoutine/NewRoutine';
import SignInPage from './routes/SignIn/SignIn';
import { SignedIn, UserButton, useAuth } from '@clerk/clerk-react';

import './App.css';

const RequireAuth = ({ children }) => {
	const { isSignedIn } = useAuth();

	if (!isSignedIn) {
		return <Navigate to='/sign-in' replace />;
	}

	return children;
};

function App() {
	return (
		<>
			<header>
				<SignedIn>
					<UserButton />
				</SignedIn>
			</header>
			<Router>
				<div>
					<Routes>
						<Route path='/' element={<Home />}></Route>
						<Route path='/sign-in' element={<SignInPage />}></Route>
						<Route
							path='/workouts'
							element={
								<RequireAuth>
									<Workouts />
								</RequireAuth>
							}></Route>
						<Route
							path='/empty-workout'
							element={
								<RequireAuth>
									<EmptyWorkout />
								</RequireAuth>
							}></Route>
						<Route
							path='/new-routine'
							element={
								<RequireAuth>
									<NewRoutine />
								</RequireAuth>
							}></Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
