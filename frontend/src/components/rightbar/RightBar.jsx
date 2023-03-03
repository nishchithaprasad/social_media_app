import "./rightbar.css";
import { Users } from "../../data/usersData";
import Online from "../online/Online";

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src={`${PF}gift.png`} className="birthdayImage" alt="" />
                    <span className="birthdayText"><b>Nithin Narasapuram</b> and <b>3 other friends</b> have their birthday today.</span>
                </div>
                <img className="rightbarAd" src={`${PF}ad.png`} alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendOnlineList">
                    {Users.map(user => (<Online user={user} key={user.id}/>))}
                </ul>
            </>
        )
    };

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className="rightbarTitle">
                    User Information
                </h4>
                <div className="rightbarInformation">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 2 ? "Married" : "Committed" }</span>
                    </div>
                </div>
                <h4 className="rightbarTitle">
                    User Friends
                </h4>
                <div className="rightbarFollowingContainer">
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/2.jpeg`} className="rightbarFollowingImage" alt="" />
                        <span className="rightbarFollowingName">Nithin Narasapuram</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/3.jpeg`} className="rightbarFollowingImage" alt="" />
                        <span className="rightbarFollowingName">Nithin Narasapuram</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/4.jpeg`} className="rightbarFollowingImage" alt="" />
                        <span className="rightbarFollowingName">Nithin Narasapuram</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/5.jpeg`} className="rightbarFollowingImage" alt="" />
                        <span className="rightbarFollowingName">Nithin Narasapuram</span>
                    </div>
                </div>
            </>
        )
    }

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar /> : <HomeRightbar />}
            </div>
        </div>
    )
}