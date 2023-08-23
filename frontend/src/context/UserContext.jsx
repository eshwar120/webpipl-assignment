import { createContext, useState } from "react";


const UserContext = createContext({});

const UserContextProvider = ({ children }) => {

    const [formData, setFormData] = useState({});
    // console.log(formData)
 
    const value = {
        formData : formData,
        updateFormData : (values) => {
            setFormData(formData => ({
                ...formData,
                ...values
            }))
        }
    }

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export {
    UserContext,
    UserContextProvider
}