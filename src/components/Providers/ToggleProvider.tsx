'use client';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

type LogsContextProps = {
    toggle: boolean;
    show: boolean;
};
const ToggleContext = createContext<LogsContextProps | undefined>(undefined);

interface ToggleProviderProps {
    children: ReactNode;
}

function ToggleProvider({ children }: ToggleProviderProps) {
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);
    useEffect(() => {
        const changeID = setInterval(() => {
            setShow((t) => !t);
        }, 4800);

        return () => {
            clearInterval(changeID);
        };
    }, []);

    useEffect(() => {
        if (toggle) {
            const tID = setTimeout(() => {
                setToggle(false);
            }, 800);
            return () => clearInterval(tID);
        } else {
            const tID = setTimeout(() => {
                setToggle(true);
            }, 4000);
            return () => clearInterval(tID);
        }
    }, [toggle]);

    return <ToggleContext.Provider value={{ toggle, show }}>{children}</ToggleContext.Provider>;
}

function useToggle(): LogsContextProps {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error('useLogs must be used within a LogsProvider');
    }
    return context;
}

export { ToggleProvider, useToggle };
