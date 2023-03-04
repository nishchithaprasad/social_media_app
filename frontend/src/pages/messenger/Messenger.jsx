import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import TopBar from "../../components/topbar/TopBar";
import ChatOnline from "../../components/chatOnline/ChatOnline";
import { useContext, useEffect, useState, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { getConversations, getMessages, postMessage } from "../../apiCalls";
import "./messenger.css";

export default function Messenger() {
	const [conversations, setConversations] = useState([]);
	const [currentChat, setCurrentChat] = useState(null);
	const [messages, setMessages] = useState(null);
	const [newMessage, setNewMessage] = useState("");
	const { user } = useContext(AuthContext);
	const scrollRef = useRef();

	useEffect(() => {
		const getConversationsUser = async () => {
			const res = await getConversations(user._id);
			setConversations(res);
		}
		getConversationsUser();
	}, [user]);

	useEffect(() => {
		const getMessagesList = async () => {
			const res = await getMessages(currentChat._id);
			setMessages(res);
		}
		if(currentChat && currentChat._id) {
			getMessagesList();
		}
	}, [currentChat]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		const message = {
			conversationId: currentChat._id,
			sender: user._id,
			text: newMessage
		};
		const res = await postMessage(message);
		setMessages([...messages, res]);
		setNewMessage("");
	}

	useEffect(() => {
		scrollRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<>
			<TopBar/>
			<div className="messenger">
				<div className="chatMenu">
					<div className="chatMenuWrapper">
						<input type="text" className="searchFriends" placeholder="Search for friends"/>
						{conversations.map((conversation) => (
							<div key={conversation._id} onClick={() => setCurrentChat(conversation)}>
								<Conversation conversation={conversation} currentUser={user}/>
							</div>
						))}
					</div>
				</div>
				<div className="chatBox">
					<div className="chatBoxWrapper">
						{
							currentChat ?
							<>
								<div className="chatBoxTop">
									{messages && messages.map((message) => (
										<div key={message._id} ref={scrollRef}>
											<Message message={message} own={message.sender === user._id}/>
										</div>
									))}
								</div>
								<div className="chatBoxBottom">
									<textarea
										placeholder="Write something..."
										className="chatMessageInput"
										onChange={(event) => setNewMessage(event.target.value)}
										value={newMessage}
									>
									</textarea>
									<button className="chatSubmitButton" onClick={handleSubmit}>Send Message</button>
								</div>
							</> :
							<span className="noConversationText">Open a conversation to start a chat.</span>
						}
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