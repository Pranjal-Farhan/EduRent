import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut,signInWithEmailAndPassword  } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

export const AuthContext=createContext(null);



const AuthProvider = ({children}) => {
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
        }
        const logOut=()=>{
            return signOut(auth);
        }
        const signIn=(email,password)=>{
            signInWithEmailAndPassword(auth,email,password)
        }
           
const [user,setUser]=useState(null);
const auth=getAuth(app);
const authInfo={
    user,createUser,logOut,signIn
}

useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth, currentUser=>{
    console.log('user in the auth state changed',currentUser);
    setUser(currentUser);
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

export default AuthProvider;
