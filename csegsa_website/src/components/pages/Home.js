import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import TeamBoard from '../team/TeamBoard';
import { auth, signInWithGoogle, signOutOfGoogle } from '../../Firebase';

const Home = (props) => {

    const [authenticated, setAuthenticated] = useState(false);
    const { username, setUsername } = useContext(AppContext);

    auth.onAuthStateChanged( user => {
        if (user) {
            console.log("user logged in before");
            setAuthenticated(true);
        } else {
            console.log("user hasn't logged in");
            setAuthenticated(false);
        }
    })

    useEffect(() => {
        if (authenticated) {
            console.log("authenticad state changed recognized...");
            setUsername(auth.currentUser.displayName);
            // console.log(auth.currentUser.email);
        } else {
            setUsername("");
        }
    }, [authenticated]);

    return (
        <div className="">
            <div>This is the home page </div>

            {/* <div>Enter your username here: <input onChange={handleChange}></input></div> */}

            {authenticated && 
                <div>
                    <h2>{username}</h2>
                    {/* <h2>{localStorage.getItem("email")}</h2>
                    <img src={localStorage.getItem("profilePic")}></img> */}
                </div>
            }
            
            
            <TeamBoard/>

            {!authenticated && 
                <button onClick={signInWithGoogle}>
                    Sign in With Google
                </button>
            }

            {authenticated && 
                <button onClick={signOutOfGoogle}>
                    Sign Out
                </button>
            }
        </div>
      );  
}

export default Home;