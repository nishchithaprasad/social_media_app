import { useEffect, useState } from "react";
import { getUser } from "../../apiCalls";
import "./conversation.css";

export default function Conversation({conversation, currentUser}) {
	const [user, setUser] = useState(null);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	useEffect(() => {
		const friendId = conversation.members.find((member) => member !== currentUser._id);
		const getFriend = async () => {
			const res = await getUser(friendId);
			setUser(res);
		}
		getFriend();
	}, [currentUser, conversation]);

	return (
		<div className="conversation">
			<img src={(user && user.profilePicture) ? 
					PF+user.profilePicture : 
					PF+"/person/noAvatar.png"
				} 
				alt="" 
				className="conversationImage" 
			/>
			<span className="conversationName">{user ? user.username : ""}</span>
		</div>
	)
}
