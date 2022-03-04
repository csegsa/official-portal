import React, { useState, useEffect, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Events = (props) => {

    const { username } = useContext(AppContext);

    useEffect(()=>{
        console.log("username in Events: " + username);
    }, [username])

    return (
        <div className="">
            This is the Events Page

            {username !== '' && 
            <div>Hello, {username}</div>}
        </div>
      );  
}

export default Events;