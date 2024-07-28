import { createContext, useContext, useEffect, useReducer } from "react";
import {loadAuthState, storeAuthState} from "./storage";
import { setToken } from "../../lib/http";

export const AuthContext = createContext();

export const AuthDispatchContext = createContext();

export function useAuthState(){
    return useContext(AuthContext);
}

export function useAuthDispatch(){
    return useContext(AuthDispatchContext);
}

const authReducer = (authState, action) => {
    switch (action.type){
        case "login-success":
            setToken(action.data.token);
            return action.data.user;
        case "logout-success":
            setToken();
            return {id: 0};
        case "user-update-success":
            return{
                ...authState,
                first_name: action.data.first_name,
                last_name: action.data.last_name,
                image: action.data.image,
                mobile: action.data.mobile
            }    
        default:
            throw new Error(`Unknow action: ${action.type}`);        
    }
}

export function AuthenticationContext({children}){
    const [authState, dispatch] = useReducer(authReducer, loadAuthState());

    useEffect(() => {
        storeAuthState(authState);
    }, [authState]);

    return (
        <AuthContext.Provider value={authState}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    )

}