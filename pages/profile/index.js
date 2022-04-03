import withProtected from "../../hoc/withProtected"
import AuthLayout from '../../components/layout/Authenticate'
//import { useUser } from "../../context/user"

const Profile = () => {
    return (
        <AuthLayout title="Profile">
            Profile
        </AuthLayout>
    )
}

export default withProtected(Profile)

//cosingan ini bisa digunakan untuk file page myprofiles.js