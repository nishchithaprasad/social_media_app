import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topbar/TopBar";
import "./profile.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

export default function Profile() {
	const PF = process.env.REACT_APP_PUBLIC_FOLDER;
	const [user, setUser] = useState(null);
	const username = useParams().username;

	useEffect( () => {
		const fetchUser = async () => {
			const res = await axios.get(`http://localhost:8800/api/user?username=${username}`);
			setUser(res.data);
		}
		fetchUser();
	}, [username]);
    return (
        <>
			<TopBar/>
			<div className="profile">
				<SideBar/>
				<div className="contianerProfileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src={(user && user.coverPicture)? PF+user.coverPicture : PF+"/person/noCover.png"} className="coverPhoto" alt="" />
							<img src={(user && user.profilePicture)? PF+user.profilePicture : PF+"/person/noAvatar.png"} className="userProfilePicture" alt="" />
						</div>
						<div className="profileInformation">
							<h4 className="profileUsername">{user?.username}</h4>
							<p className="profileDescription">{user?.description}</p>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed username={username}/>
						<RightBar user={user}/>
					</div>
				</div>
			</div>
		</>
    )
};