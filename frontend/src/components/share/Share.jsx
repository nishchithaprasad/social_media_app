import "./share.css";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { PermMedia, Label, Room, EmojiEmotions } from "@material-ui/icons"
import { uploadFile, createNewPost } from "../../apiCalls";
export default function Share() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const { user } = useContext(AuthContext);
	const description = useRef();
	const [file, setFile] = useState(null);
	const submitHandler = (event) => {
		event.preventDefault();
		const newPost = {
			userId: user._id,
			description: description.current.value
		};
		if(file) {
			const data = new FormData();
			const fileName = Date.now() + file.name;
      		data.append("name", fileName);
			data.append("file", file);
			newPost.img = file.name;
			uploadFile(data);
		}
		createNewPost(newPost);
	}
	return (
		<div className="share">
			<div className="shareWrapper">
				<div className="shareTop">
					<img 
						src={
							user.profilePicture ? 
							PF+user.profilePicture : 
							PF+"person/noAvatar.png"
						}
						className="shareProfilePicture" 
						alt=""
					/>
					<input 
						type="text"
						ref={description}
						placeholder={`What's on your mind, ${user.username}?`}
						className="shareInput"
					/>
				</div>
				<hr className="shareDivider" />
				<form className="shareBottom" onSubmit={submitHandler}>
					<div className="shareOptions">
						<label htmlFor="file" className="shareOption">
							<PermMedia className="shareIcon" htmlColor="tomato"/>
							<span className="shareOptionText">Photo/Video</span>
							<input
								type="file"
								id="file"
								style={{display: "none"}}
								accept=".png, .jpeg, jpg"
								onChange={(event) => setFile(event.target.files[0])}
							/>
						</label>
						<div className="shareOption">
							<Label className="shareIcon" htmlColor="blue"/>
							<span className="shareOptionText">Tag</span>
						</div>
						<div className="shareOption">
							<Room className="shareIcon" htmlColor="green"/>
							<span className="shareOptionText">Location</span>
						</div>
						<div className="shareOption">
							<EmojiEmotions className="shareIcon" htmlColor="goldenrod"/>
							<span className="shareOptionText">Feelings</span>
						</div>
					</div>
					<button className="shareButton" type="submit">Share</button>
				</form>
			</div>
		</div>
	)
}
