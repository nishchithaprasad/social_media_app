import { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({username}) {
	const [posts, setPosts] = useState([]);
	const { user } = useContext(AuthContext);

	useEffect( () => {
		const fetchPosts = async () => {
			const res = username ? 
							await axios.get(`http://localhost:8800/api/post/profile/${username}`) : 
							await axios.get(`http://localhost:8800/api/post/timeline/${user._id}`);
			setPosts(res.data.sort((post1, post2) => {
				return new Date(post2.createdAt) - new Date(post1.createdAt);
			}));
		}
		fetchPosts();
	}, [username, user._id]);
	return (
		<div className="feed">
			<div className="feedWrapper">
				{(!username || (username === user.username)) && <Share/>}
				{posts.map(post => (
					<Post post={post} key ={post._id}/>
				))}
			</div>
		</div>
	)
}