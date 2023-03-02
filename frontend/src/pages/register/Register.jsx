import "./register.css";

export default function Register() {
	return (
		<div className="register">
			<div className="registerWrapper">
				<div className="registerLeft">
					<h3 className="registerLogo">Social Media</h3>
					<span className="registerDescription">This is a mock of Facebook for learning purpose.</span>
				</div>
				<div className="registerRight">
					<div className="registerContainer">
                        <span className="registerDescription">Sign up here!</span>
						<input type="text" placeholder="Username" className="registerInput" />
						<input type="email" placeholder="Email" className="registerInput" />
						<input type="password" placeholder="Password" className="registerInput" />
						<input type="password" placeholder="Password Again" className="registerInput" />
						<button className="registerButton">Register</button>
                        <button className="loginButton">Create a new account</button>
					</div>
				</div>
			</div>
		</div>
	)
}