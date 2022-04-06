import { useRouter } from "next/router";
import { useUser } from "../context/user";

const withUnprotected = (Pages) => {
    // eslint-disable-next-line react/display-name
    return (props) => {
        const router = useRouter()
        const user = useUser()
        const { uid } = user

        if (uid) {
            
            router.replace('/dashboard') //bisa digunakan untuk redirect ke halaman dashboard
            return <></>
        }

        return <Pages {...props} />
    }
}

export default withUnprotected