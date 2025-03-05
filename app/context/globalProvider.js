'use client';
import React, { createContext, useContext, useState } from 'react';
import themes from './themes';

export const GlobalContext = createContext(null);
export const GlobalUpdateContext = createContext(null);

export const GlobalProvider = ({ children }) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const theme = themes[selectedTheme]

    return (
        <GlobalContext.Provider
            value={{
                theme, selectedTheme
            }}
        >
            <GlobalUpdateContext.Provider value={setSelectedTheme}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider >
    )
};

export const useGlobalState = () => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalProvider");
    }
    return context;
};

export const useGlobalUpdate = () => {
    const context = useContext(GlobalUpdateContext);
    if (!context) {
        throw new Error("useGlobalUpdate must be used within a GlobalProvider");
    }
    return context;
};