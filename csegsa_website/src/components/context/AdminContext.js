import React, { useState, useEffect, useContext, createContext } from 'react';

export const AdminContext = createContext();

export const AdminProvider = (props) => {
    const [isAdmin, setAdmin] = useState(false);

    const adminContext = { isAdmin };
    
    return (
        <AdminContext.Provider value={adminContext}>
            {props.children}
        </AdminContext.Provider>
    )

}