import React, { createContext, useState } from 'react';

export const DeleteContext = createContext("");

const ContextProvider = ({ children }) => {

    const [dltask, setDltask] = useState(false);


    return (
        <>
            <DeleteContext.Provider value={{ dltask, setDltask }}>
                {children}
            </DeleteContext.Provider>
        </>

    )
}

export default ContextProvider