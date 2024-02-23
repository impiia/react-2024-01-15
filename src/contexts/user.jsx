/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export const UserContext = React.createContext(); 

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({ name: "", email: "", id: "" });

    const updateUser = (newUser) => {
        setUser(newUser); 
    };

    return (
        <UserContext.Provider value={{ ...user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};