import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null)
    const createuser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateuser = (userinfo) =>{
        return updateProfile(user, userinfo);
    }
    const logout = () =>{
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
            console.log('set objerbinh');
            setuser(currentuser)
        });
        return () => unsubscribe();
    },[])
    const authinfo = {
        createuser,
        signin,
        user,
        logout,
        updateuser,

    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;