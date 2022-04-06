import { Container, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { BsInstagram } from "react-icons/Bs";
import { BsFacebook } from "react-icons/Bs";
import { BsWhatsapp } from "react-icons/Bs";

const Footer = () => {
  return (
    <Container >
        <Row className="justify-content-md-center">
            <Col className="p-5" md="auto">
                <p>Full stack web development bootcamp - Team 1 Task Force</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col md="auto">
                <a className="btn btn-social mx-2" href="#!"><BsInstagram/></a>
                <a className="btn btn-social mx-2" href="#!"><BsFacebook/></a>
                <a className="btn btn-social mx-2" href="#!"><BsWhatsapp/></a>
               
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col md="auto">
                <a className="link-dark text-decoration-none me-3" href="#!">Privacy Policy</a>
                <a className="link-dark text-decoration-none" href="#!">Terms of Use</a>
            </Col>
        </Row>
        
    </Container>
  );
};

export default Footer;
