import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
    user: {
        "_id": "640109145d3344ed3e069ed8",
        "username": "jane",
        "email": "jane@hey.com",
        "password": "7890",
        "profilePicture": "person/3.jpeg",
        "coverPicture": "post/3.jpeg",
        "followers": ["63ffe276ecdadf750b4e06d8","640109e25d3344ed3e069ee0","64010a325d3344ed3e069ee4"],
        "following": ["63ffdf87eb7db0d388470170","6401094e5d3344ed3e069eda","64010a4e5d3344ed3e069ee6"]
    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}