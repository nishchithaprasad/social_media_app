import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE,
    FOLLOW,
	UNFOLLOW
}
from "./const/index";
import axios from "axios";

export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: LOGIN_START });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/login", userCredentials);
        dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error });
    }
}

export const registerCall = async (userDetails, dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/signup", userDetails);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
        dispatch({ type: REGISTER_FAILURE, payload: error });
    }
}

export const getFriends = async (userId) => {
    try {
        const res = await axios.get(`http://localhost:8800/api/user/friends/${userId}`);
        return res.data;
    } catch(error) {
        console.log(error);
    }
}

export const followUser = async (userId, currentUserId, dispatch) => {
    try {
        await axios.put(`http://localhost:8800/api/user/${userId}/follow`, {
            userId: currentUserId
        });
        dispatch({ type: FOLLOW, payload: userId });
    } catch(error) {
        console.log(error);
    }
}

export const unFollowUser = async (userId, currentUserId, dispatch) => {
    try {
        await axios.put(`http://localhost:8800/api/user/${userId}/unfollow`, {
            userId: currentUserId
        });
        dispatch({ type: UNFOLLOW, payload: userId });
    } catch(error) {
        console.log(error);
    }
}

export const createNewPost = async (postDetails) => {
    try {
        await axios.post("http://localhost:8800/api/post", postDetails);
    } catch(error) {
        console.log(error);
    }
}

export const uploadFile = async (fileData) => {
    try {
        await axios.post("http://localhost:8800/api/upload", fileData);
    } catch(error) {
        console.log(error);
    }
}