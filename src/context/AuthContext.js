import React, { createContext, useState } from 'react';

// Create Context
const AuthContext = createContext();

// Create a provider component
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const login = (username, password) => {
        // In a real app, you should verify credentials with a backend service
        if (username === 'admin' && password === 'password') {
            setUser({ username });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
