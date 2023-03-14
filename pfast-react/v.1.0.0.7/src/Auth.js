import { createContext,useContext,useEffect,useReducer } from "react";
import { useLocation, Navigate } from "react-router-dom";
import supabase from "./config/supabaseClient";

// store


const localstorage = localStorage.getItem('auth')

const initialState = {auth:localstorage}

const authContext = createContext()

export function reducer(state,action) {
    

    switch(action.type){
        case 'login':
            return {auth:true}
        case 'logout':
            return {auth:false}
        default:
            throw new Error()
    }
}

// auth provider
export function AuthProvider({children}) {

    const [authed,dispatch] = useReducer(reducer,initialState)

    return <authContext.Provider value={[authed,dispatch]}>{children}</authContext.Provider>
}

// own auth consumer hook
export default function AuthConsumer(){
    return useContext(authContext)
}

const RequireAuth = ({children}) => {
    const [authed,dispatch] = AuthConsumer()
    const location = useLocation()
    return localStorage.getItem('sb-oyfuerrpagolgokoemnj-auth-token') !== null ? (
        children
    ) : (
        <Navigate to={"/"} replace state={{path: location.pathname}}></Navigate>
    )
    
  }

export {RequireAuth}