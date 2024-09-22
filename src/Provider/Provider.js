'use client'

import { createContext } from 'react';



export const ProviderContext = createContext()
const Provider = ({ children }) => {

    const name = "Shahed Ahmed"



    const share = { name }
    return (
        <ProviderContext.Provider value={share}>
            {children}
        </ProviderContext.Provider>

    );
};

export default Provider;