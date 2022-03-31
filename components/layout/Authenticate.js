import { Head } from "next/document"
import { Container, Box } from "reactstrap"
import { Navbar } from "reactstrap"
import { ButtonToolbar } from "reactstrap"
import { Button } from "bootstrap"
import { SignOut } from "../../services/firebase"

const Authenticate = ({ children, title }) => {
    const defaultTitle = "Traditional Game"
    const pageTitle = title ? `${title} | ${defaultTitle}` : defaultTitle
    return (
        <>
        <Head>
            <title>{pageTitle}</title>
        </Head>
        <Navbar>
            <ButtonToolbar>
                <Button onClick={SignOut} sx={{ ml : 1 }}>Sign Out</Button>
            </ButtonToolbar>
        </Navbar>
        <Box component='main' sx={{ pt: '64px'}}>
            <Container>
                {children}
            </Container>
            
        </Box>
        </>
    )
}

export default Authenticate