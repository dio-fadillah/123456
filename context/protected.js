import { useRouter } from "next/router";
import { useUser } from "../context/user";

const withProtected = (Pages) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const router = useRouter()
        const user = useUser()
        const { uid } = user

        if (!uid) {
            router.replace('/')
            return <></>
        }

        return <Pages {...props} />
    }
}

export default withProtected


// import { createContext, useContext, useState } from "react";
// import { InitialUserState, useUser } from "./user";


// const UserContext = createContext()

// // export const useUser = () => {
// //     return useContext(UserContext)
// // }


// export const Protected = (props) => {
//     // const [userState, setUserState] = useState(InitialUserState)

//     // console.log({ userState })

// 	const user = useUser()
// 	if (
// 		user = InitialUserState
// 	) {
// 		return 
// 	}


//     // const SetUser = (userCredential) => {
//     //     setUserState({ ...userCredential })
//     // }

//     // const ResetUser = () => {
//     //     setUserState(InitialUserState)
//     // }

//     const value = { ...userState, SetUser, ResetUser }
//     return <UserContext.Provider value={value} {...props} />
// }