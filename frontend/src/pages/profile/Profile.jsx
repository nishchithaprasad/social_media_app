import Feed from "../../components/feed/Feed";
import RightBar from "../../components/rightbar/RightBar";
import SideBar from "../../components/sidebar/SideBar";
import TopBar from "../../components/topbar/TopBar";
import "./profile.css";

export default function Profile() {
    return (
        <>
			<TopBar/>
			<div className="profile">
				<SideBar/>
				<div className="contianerProfileRight">
					<div className="profileRightTop">
						<div className="profileCover">
							<img src="/assets/post/3.jpeg" className="coverPhoto" alt="" />
							<img src="/assets/person/1.jpeg" className="userProfilePicture" alt="" />
						</div>
						<div className="profileInformation">
							<h4 className="profileUsername">Nishchitha</h4>
							<p className="profileDescription">This is description</p>
						</div>
					</div>
					<div className="profileRightBottom">
						<Feed/>
						<RightBar profile/>
					</div>
				</div>
			</div>
		</>
    )
};