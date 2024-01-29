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

const MAX_COUNTER = 5;

function ToggleProvider({ children }: ToggleProviderProps) {
    const [toggleCounter, setToggleCounter] = useState(0);
    const [toggle, setToggle] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const tID = setTimeout(() => {
            setToggleCounter((c) => c + 1);
            if (toggleCounter >= MAX_COUNTER) {
                setToggleCounter(0);
                setShow((t) => !t);
            } else {
                setToggle(false);
                if (toggleCounter >= MAX_COUNTER - 1) {
                    setToggle(true);
                }
            }
        }, 800);
        return () => clearInterval(tID);
    }, [toggle, toggleCounter, show]);

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
