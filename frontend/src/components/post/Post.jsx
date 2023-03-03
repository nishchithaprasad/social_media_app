import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";

export default function Post({post}) {
	const [like, setLike] = useState(post.likes.length);
	const [isiked, setIsLiked] = useState(false);
	const [user, setUser] = useState(null);
	const likeHandler = () => {
		setLike(isiked ? like-1 : like+1);
		setIsLiked(!isiked);
	}
	useEffect( () => {
		const fetchUser = async () => {
			const res = await axios.get(`http://localhost:8800/api/user?userId=${post.userId}`);
			setUser(res.data);
		}
		fetchUser();
	}, [post.userId]);
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;

	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<Link to={`profile/${user && user.username}`}>
							<img
								className="postProfilePicture"
								src={(user && user.profilePicture)? PF+user.profilePicture : PF+"/person/noAvatar.png"}
								alt="" />
						</Link>
						<span className="postUserName">{user?.username}</span>
						<span className="postDate">{format(post.createdAt)}</span>
					</div>
					<div className="postTopRight">
						<MoreVert/>
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.description}</span>
					<img className="postImage" src={PF+post.img} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src={`${PF}like.png`} onClick={likeHandler} alt="" />
						<img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
						<span className="postLikeCounter">{like} people like it</span>
					</div>
					<div className="postBottomRight">
						<span className="postCommentText">{post.comment} comment</span>
					</div>
				</div>
			</div>
		</div>
	);
}