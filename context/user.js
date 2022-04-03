import { createContext, useContext, useState } from "react";

export const InitialUserState = {
    email: null,
    uid: null
}

const UserContext = createContext()

export const useUser = () => {
    return useContext(UserContext)
}


//Bagian ini merupakan set Global state seperti bagian Action pada Redux
export const UserProvider = (props) => {
    const [userState, setUserState] = useState(InitialUserState)

    console.log({ userState })

    const SetUser = (userCredential) => {
        setUserState({ ...userCredential })
    }

    const ResetUser = () => {
        setUserState(InitialUserState)
    }

    const value = { ...userState, SetUser, ResetUser }
    return <UserContext.Provider value={value} {...props} />
}