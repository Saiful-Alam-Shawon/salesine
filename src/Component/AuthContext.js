import React, { createContext, useEffect, useState } from 'react';
import app from './firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'

// const auth = getAuth(app)
export const AuthShare = createContext();
const auth = getAuth(app);

const AuthContext = ({ children }) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log("object");
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [])

    const authInfo = { user, createUser, login, logOut }

    return (
        <div>
            <AuthShare.Provider value={authInfo}>
                {children}
            </AuthShare.Provider>
        </div>
    );
};

export default AuthContext;