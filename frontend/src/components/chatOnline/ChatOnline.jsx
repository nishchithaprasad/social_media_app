import "./chatOnline.css";

export default function ChatOnline() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	return (
		<div className="chatOnline">
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img src={PF+"person/noAvatar.png"} alt="" className="chatOnlineImage" />
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img src={PF+"person/noAvatar.png"} alt="" className="chatOnlineImage" />
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
			<div className="chatOnlineFriend">
				<div className="chatOnlineImgContainer">
					<img src={PF+"person/noAvatar.png"} alt="" className="chatOnlineImage" />
					<div className="chatOnlineBadge"></div>
				</div>
				<span className="chatOnlineName">John Doe</span>
			</div>
		</div>
	)
}
