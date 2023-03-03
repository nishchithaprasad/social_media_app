import { useContext, useRef } from "react";
import { registerCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import "./signup.css";

export default function Signup() {
	const username = useRef();
	const email = useRef();
	const password = useRef();
	const passwordAgain = useRef();
	const { user, isFetching, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = async (event) => {
		event.preventDefault();
		if(password.current.value !== passwordAgain.current.value) {
			passwordAgain.current.setCustomValidity("Passwords don't match");
		} else {
			const userDetails = {
				username: username.current.value,
				email: email.current.value,
				password: password.current.value
			}
			registerCall(userDetails, dispatch);
		}
	}
	console.log("user", user);
	return (
		<div className="signup">
			<div className="registerWrapper">
				<div className="registerLeft">
					<h3 className="registerLogo">Social Media</h3>
					<span className="registerDescription">This is a mock of Facebook for learning purpose.</span>
				</div>
				<div className="registerRight">
					<form className="registerContainer" onSubmit={handleSubmit}>
                        <span className="registerDescription">Sign up here!</span>
						<input 
							type="text"
							placeholder="Username" 
							ref={username}
							className="registerInput"
							required
						/>
						<input
							type="email" 
							placeholder="Email" 
							ref={email} 
							className="registerInput"
							required
						/>
						<input 
							type="password" 
							placeholder="Password" 
							ref={password} 
							className="registerInput"
							required
							minLength="2"
						/>
						<input 
							type="password" 
							placeholder="Password Again" 
							ref={passwordAgain} 
							className="registerInput"
							required
							minLength="2"
						/>
						<button 
							className="registerButton"
							type="submit"
							disabled={isFetching}
						>
							{ isFetching ? 
								<CircularProgress color="white" size="20px"/> : 
								"Signup"
							}
						</button>
                        <button 
							className="loginButton"
							disabled={isFetching}
							onClick={() => navigate('/login')}
						>
							{ isFetching ? 
								<CircularProgress color="white" size="20px"/> : 
								"Log into your account"
							}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}