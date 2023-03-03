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
    } catch (err) {
        dispatch({ type: LOGIN_FAILURE, payload: err });
    }
}

export const registerCall = async (userDetails, dispatch) => {
    dispatch({ type: REGISTER_START });
    try {
        const res = await axios.post("http://localhost:8800/api/auth/signup", userDetails);
        dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (err) {
        dispatch({ type: REGISTER_FAILURE, payload: err });
    }
}