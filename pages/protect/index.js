
import withProtected from "../../hoc/withProtected"
import AuthLayout from '../../components/layout/Authenticate'
import { useUser } from "../../context/user"

const Protect = () => {
    const user = useUser()
    const { email, uid } = inputValue
    return (
        <AuthLayout title="Protected Page">
            <div>
                <p>Email: <b>{email}</b></p>
                <br />
                <p>UID: <b>{uid}</b></p>
            </div>
            
        </AuthLayout>
    )
}

export default withProtected(Protect)


//coding halaman file ini bisa diimplementasikan pada file dashboard.js