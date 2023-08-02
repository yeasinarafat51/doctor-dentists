import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setuser] = useState(null);
    const [loading, setLoading] = useState(true)
    const createuser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    };
    const signin = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    };
    const updateuser = (userinfo) =>{
        return updateProfile(auth.currentUser, userinfo);
    }
    const logout = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect(()=>{
      const unsubscribe =  onAuthStateChanged(auth, currentuser =>{
            console.log('set objerbinh');
            setuser(currentuser)
            setLoading(false)
        });
        return () => unsubscribe();
    },[])
    const authinfo = {
        createuser,
        signin,
        user,
        logout,
        updateuser,
        loading

    }

    return (
        <AuthContext.Provider value={authinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;