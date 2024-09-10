import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);



const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
        }
        const logOut=()=>{
            setLoading(true);
            return signOut(auth);
        }
        const signIn=(email,password)=>{
            setLoading(true);
            signInWithEmailAndPassword(auth,email,password)
        }
           
const [user,setUser]=useState(null);
const [loading,setLoading]=useState(true);

const auth=getAuth(app);
const authInfo={
    user,createUser,logOut,signIn,loading
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, currentUser=>{
    console.log('user in the auth state changed',currentUser);
    setUser(currentUser);
    setLoading(false);
});
return ()=>{
    unsubscribe();
}
},[])
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};
export const auth=getAuth(app);

export default AuthProvider;
