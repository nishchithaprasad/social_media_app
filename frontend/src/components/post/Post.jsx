import "./post.css";
import { MoreVert } from "@material-ui/icons";
import { Users } from "../../data/usersData";
import { useState } from "react";

export default function Post({post}) {
	const username = Users.filter(user => user.id === post.userId)[0].username;
	const profilePicture = Users.filter(user => user.id === post.userId)[0].profilePicture;
	const [like, setLike] = useState(post.like);
	const [isiked, setIsLiked] = useState(false);
	const likeHandler = () => {
		setLike(isiked ? like-1 : like+1);
		setIsLiked(!isiked);
	}
	return (
		<div className="post">
			<div className="postWrapper">
				<div className="postTop">
					<div className="postTopLeft">
						<img className="postProfilePicture" src={profilePicture} alt="" />
						<span className="postUserName">{username}</span>
						<span className="postDate">{post.date}</span>
					</div>
					<div className="postTopRight">
						<MoreVert/>
					</div>
				</div>
				<div className="postCenter">
					<span className="postText">{post?.description}</span>
					<img className="postImage" src={post.photo} alt="" />
				</div>
				<div className="postBottom">
					<div className="postBottomLeft">
						<img className="likeIcon" src="/assets/like.png" onClick={likeHandler} alt="" />
						<img className="likeIcon" src="/assets/heart.png" onClick={likeHandler} alt="" />
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