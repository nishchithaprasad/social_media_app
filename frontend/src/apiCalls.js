import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    REGISTER_START,
    REGISTER_SUCCESS,
    REGISTER_FAILURE }
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