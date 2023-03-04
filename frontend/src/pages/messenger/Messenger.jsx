import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import TopBar from "../../components/topbar/TopBar";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import "./messenger.css";

export default function Messenger() {
	return (
		<>
			<TopBar/>
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input type="text" className="searchFriends" placeholder="Search for friends"/>
						<Conversation/>
						<Conversation/>
						<Conversation/>
						<Conversation/>
						<Conversation/>
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						<div className="chatBoxTop">
							<Message/>
							<Message own={true}/>
							<Message/>
							<Message own={true}/>
							<Message/>
							<Message own={true}/>
							<Message/>
							<Message own={true}/>
						</div>
						<div className="chatBoxBottom">
							<textarea placeholder="Write something..." className="chatMessageInput"></textarea>
							<button className="chatSubmitButton">Send Message</button>
						</div>
					</div>
				</div>
				<div className="chatOnline">
					<div className="chatOnlineWrapper">
						<ChatOnline/>
					</div>
				</div>
			</div>
		</>
	)
}