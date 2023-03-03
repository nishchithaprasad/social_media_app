import "./online.css";

export default function Online({user}) {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<li className="rightbarOnlineFriend">
			<div className="rightbarProfilePictureContainer">
				<img src={PF+user.profilePicture} className="rightbarProfilePicture" alt="" />
				<span className="rightBarOnlineStatus"></span>
			</div>
			<span className="rightbarOnlineUsername">{user.username}</span>
		</li>
	)
}
