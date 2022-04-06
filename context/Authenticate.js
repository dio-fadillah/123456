
import { Container} from "reactstrap"
// import { Navbar } from "reactstrap"
// import { ButtonToolbar } from "reactstrap"
// import { Button } from "bootstrap"
// import { SignOut } from "../../services/firebase"
import Box from '@material-ui/core/Box';

const Authenticate = ({ children, title }) => {
    const defaultTitle = "Traditional Game"
    const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
    return (
        <>
        
        <Box component='main' sx={{ pt: '64px'}}>
            <Container>
                {children}
            </Container>
            
        </Box>
        </>
    )
}

export default Authenticate 