import { useEffect, useState } from "react";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({username}) {
	const [posts, setPosts] = useState([]);

	useEffect( () => {
		const fetchPosts = async () => {
			const res = username ? 
							await axios.get(`http://localhost:8800/api/post/profile/${username}`) : 
							await axios.get("http://localhost:8800/api/post/timeline/63ffe276ecdadf750b4e06d8");
			setPosts(res.data);
		}
		fetchPosts();
	}, [username]);
	return (
		<div className="feed">
			<div className="feedWrapper">
				<Share/>
				{posts.map(post => (
					<Post post={post} key ={post._id}/>
				))}
			</div>
		</div>
	)
}