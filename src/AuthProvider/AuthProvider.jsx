import { getAuth, createUserWithEmailAndPassword, signOut, signInWithPopup, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";
import { app } from './../firebase/firebase.config';
import axios from 'axios';

export const AuthContext= createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser]= useState(null)
    const [loading, setLoading]= useState(true)
    const googleProvider= new GoogleAuthProvider();

    //Register with email and password
    const createUser= (email,password) =>{
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    //
    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth,(currentUser) =>{
            
            setUser(currentUser)
            if (currentUser){
                axios.post(`http://localhost:5000/authen`,{
                    email: currentUser.email
                })
                .then((data) =>{
                    if(data.data){
                        localStorage.setItem("access-token", data?.data?.token)
                        setLoading(false)
                    }
                })
            }
            else{
                localStorage.removeItem("access-token");
                setLoading(false);
            }

            // if (currentUser) {
            //     // User is signed in, see docs for a list of available properties
            //     // https://firebase.google.com/docs/reference/js/auth.user
            //    console.log(currentUser);
            //     // ...
            //   } else {
            //     console.log('no user');
            //   }
        });
        return (
            ()=>{
                return unSubscribe();
            }
        )
    },[])


    //login with email and password
    const Login = (email,password) =>{
        return signInWithEmailAndPassword(auth, email, password);
        
    }
    
    // logout
    const LogOut= () =>{
        return signOut(auth);
    }

    // google login
    const GoogleLogin= ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const authInfo={
        user,loading, createUser,Login, LogOut, GoogleLogin
    }

    //user,loading,

    return <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;