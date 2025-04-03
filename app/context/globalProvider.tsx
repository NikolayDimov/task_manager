'use client';
import React, { createContext, useContext, useState } from 'react';
import themes from './themes';

// Update the context type to reflect Dispatch<SetStateAction<number>> for GlobalUpdateContext
export const GlobalContext = createContext<any>(null);
export const GlobalUpdateContext = createContext<React.Dispatch<React.SetStateAction<number>> | null>(null);

interface GlobalStateProps {
    theme: any;
    allTasks: () => void;
    closeModal: () => void;
}

interface GlobalProviderProps {
    children: React.ReactNode;
}

export const GlobalProvider = ({ children }: GlobalProviderProps) => {
    const [selectedTheme, setSelectedTheme] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const theme = themes[selectedTheme];

    const allTasks = () => {
        console.log('Fetching all tasks...');
    };

    const closeModal = () => {
        setIsModalOpen(false);
        console.log('Modal closed');
    };

    return (
        <GlobalContext.Provider
            value={{
                theme,
                allTasks,
                closeModal,
            }}
        >
            <GlobalUpdateContext.Provider value={setSelectedTheme}>
                {children}
            </GlobalUpdateContext.Provider>
        </GlobalContext.Provider>
    );
};

export const useGlobalState = (): GlobalStateProps => {
    const context = useContext(GlobalContext);
    if (!context) {
        throw new Error("useGlobalState must be used within a GlobalProvider");
    }
    return context;
};

export const useGlobalUpdate = (): React.Dispatch<React.SetStateAction<number>> | null => {
    const context = useContext(GlobalUpdateContext);
    if (!context) {
        throw new Error("useGlobalUpdate must be used within a GlobalProvider");
    }
    return context;
};
