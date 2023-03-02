import "./online.css";

export default function Online({user}) {
	return (
		<li className="rightbarOnlineFriend">
			<div className="rightbarProfilePictureContainer">
				<img src={user.profilePicture} className="rightbarProfilePicture" alt="" />
				<span className="rightBarOnlineStatus"></span>
			</div>
			<span className="rightbarOnlineUsername">{user.username}</span>
		</li>
	)
}
