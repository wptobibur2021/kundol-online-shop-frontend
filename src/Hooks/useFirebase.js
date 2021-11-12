import userAuthentication from "../Firebase/initialize";
import { getIdToken,updateProfile,getAuth, createUserWithEmailAndPassword,signOut,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {useEffect, useState} from "react";
import axios from "axios";
userAuthentication();
const auth = getAuth();
const useFirebase = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const [user, setUser] = useState({})
    const [error, setError] = useState({})
    const [token, setToken] = useState('')
    // New user create methods declaration
    const newUserCreate = (email, password,fullName, userCreate, history) =>{
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result)
                const newUser = {email: email, displayName: fullName}
                setUser(newUser)
                console.log("New",newUser)
                //Save User Information to database
                saveUser(email, fullName)
                updateProfile(auth.currentUser, {
                    displayName: fullName
                }).then(() => {
                }).catch((error) => {
                });
                userCreate()
                history.push('/')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(()=>setIsLoading(false));
    }
    //Logout methods declaration
    const logOut = (history,userLogout) =>{
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
            history.push('/')
            userLogout()
        }).catch((error) => {
            setError(error.message)
        })
            .finally(()=>setIsLoading(false));
    }
    // user Auth State Change
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken=>{
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe;
    }, [])
    // Sine In User
    const loginUser = (email, password, location, history, userLogin) =>{
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/'
                history.replace(destination)
                setUser(result.user)
                userLogin()
            })
            .catch((error) => {
                console.log(error.message)
            })
            .finally(()=>setIsLoading(false));
    }


    // Save User to Database
    const saveUser = (email, fullName)=>{
        const newUser = {email, fullName, role: 0}
        const url = 'https://shielded-shelf-27362.herokuapp.com/api/new-user-info'
        axios.post(url, newUser).then(res =>{
            console.log(res.data)
        })

    }

    //User Admin Check and Rerender
    useEffect(()=>{
        axios.get(`https://shielded-shelf-27362.herokuapp.com/api/user/admin/${user.email}`).then(res=>{
            setAdmin(res.data.admin)
        })
    },[user.email])

    return {user,token, newUserCreate, logOut,loginUser, isLoading,admin}
}
export default useFirebase