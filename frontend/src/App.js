import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import {
	BrowserRouter as Router,
	Routes,
	Route
  } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
	const { user } = useContext(AuthContext);
	return (
		<Router>
			<Routes>
          		<Route path="/" element={ user ? <Home /> : <Signup /> } />
				<Route path="/login" element={ user ? <Home /> : <Login /> } />
				<Route path="/signup" element={ user ? <Home /> : <Signup /> } />
				<Route path="/profile/:username" element={<Profile />} />
			</Routes>
		</Router>
	);
}

export default App;
