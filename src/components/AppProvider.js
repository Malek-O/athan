import React, { useState } from 'react'

const AppContext = React.createContext();


const AppProvider = ({ children }) => {

    const [select, setSelect] = useState('')

    return (
        <AppContext.Provider value={{ select, setSelect }}>
            {children}
        </AppContext.Provider>
    )
}

export { AppProvider, AppContext }