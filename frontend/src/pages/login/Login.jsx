import { useContext, useRef } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import "./login.css";

export default function Login() {
	const email = useRef();
	const password = useRef();
	const { isFetching, dispatch } = useContext(AuthContext);
	const navigate = useNavigate();

	const handleSubmit = (event) => {
		event.preventDefault();
		loginCall({email: email.current.value, password: password.current.value}, dispatch);
	};
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Social Media</h3>
					<span className="loginDescription">This is a mock of Facebook for learning purpose.</span>
				</div>
				<div className="loginRight">
					<form className="loginContainer" onSubmit={handleSubmit}>
						<input 
							required
							type="email"
							placeholder="Email"
							className="loginInput"
							ref={email}
						/>
						<input
							required
							type="password"
							placeholder="Password"
							className="loginInput"
							ref={password}
							minLength="2"
						/>
						<button className="loginButtonLogin" 
							type="submit"
							disabled={isFetching}
						>
								{ isFetching ? 
									<CircularProgress color="white" size="20px"/> : 
									"Login"
								}
						</button>
						<span className="forgotPassword">Forgot Password?</span>
						<button className="registerButtonLogin" 
							disabled={isFetching}
							onClick={() => navigate('/signup')}
						>
								{ isFetching ? 
									<CircularProgress color="white" size="20px"/> : 
									"Create a New Account"
								}
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}