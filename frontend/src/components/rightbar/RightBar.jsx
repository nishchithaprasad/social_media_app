import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { Add, Remove } from "@material-ui/icons";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../data/usersData";
import Online from "../online/Online";
import { getFriends, followUser, unFollowUser } from "../../apiCalls";
import "./rightbar.css";

export default function Rightbar({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const { user: currentUser, dispatch } = useContext(AuthContext);
    const [friends, setFriends] = useState([]);
    const [followed, setFollowed] = useState(currentUser.following.includes(user?._id));
    
    useEffect(() => {
        const getFriendList = async () => {
            const friendList = await getFriends(user._id);
            setFriends(friendList);
        }
        getFriendList();
    }, [user]);

    const followHandler = async () => {
        if (followed) {
            await unFollowUser(user?._id, currentUser._id, dispatch);
        } else {
            await followUser(user?._id, currentUser._id, dispatch);
        }    
        setFollowed(!followed);
    }
    
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
                {user.username !== currentUser.username && (
                    <button className="rightbarFollow" onClick={followHandler}>
                        {followed ? "Unfollow" : "Follow"}
                        {followed ? <Remove/> : <Add/>}
                    </button>
                )}
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
                    {friends.length && friends.map(friend => (
                        <Link to={`/profile/${friend.username}`} style={{textDecoration:"none"}}>
                            <div key={friend._id} className="rightbarFollowing">
                                <img 
                                    src={
                                        friend.profilePicture ? 
                                        PF+friend.profilePicture : 
                                        PF+"person/noAvatar.png"
                                    }
                                    className="rightbarFollowingImage"
                                    alt=""
                                />
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                        </Link>
                    ))}
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