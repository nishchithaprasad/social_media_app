import "./login.css";

export default function Login() {
	return (
		<div className="login">
			<div className="loginWrapper">
				<div className="loginLeft">
					<h3 className="loginLogo">Social Media</h3>
					<span className="loginDescription">This is a mock of Facebook for learning purpose.</span>
				</div>
				<div className="loginRight">
					<div className="loginContainer">
						<input type="email" placeholder="Email" className="loginInput" />
						<input type="password" placeholder="Password" className="loginInput" />
						<button className="loginButton">Login</button>
						<span className="forgotPassword">Forgot Password?</span>
						<button className="registerButton">Create a new account</button>
					</div>
				</div>
			</div>
		</div>
	)
}