import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Posts } from "../../data/postsData";

export default function Feed() {
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share/>
				{Posts.map(post => (
					<Post post={post} key ={post.id}/>
				))}
			</div>
		</div>
	)
}