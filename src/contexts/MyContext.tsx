import {createContext, useState} from "react";
import type {ReactNode, Dispatch, SetStateAction} from 'react';

interface MyContextValue {
    name: string;
    setName: Dispatch<SetStateAction<string>>
}

export type MyContextType = null | MyContextValue;

export const MyContext = createContext<MyContextType >(null);

export const MyContextProvider = ({children}: { children: ReactNode }) => {

    const [name, setName] = useState('');

    return (
        <MyContext.Provider value={{
            name,
            setName
        }}>
            {children}
        </MyContext.Provider>
    )
}