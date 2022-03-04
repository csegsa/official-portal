import React, { useState, useEffect, createContext, useContext } from 'react';

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [username, setUsername] = useState('');

    const usersContext = {
        username, setUsername,
    }

    return (
        <AppContext.Provider value={usersContext}>
            {props.children}
        </AppContext.Provider>
    )
}