import { Container, Row, Col } from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faInstagram } from '@fortawesome/free-solid-svg-icons'
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import Image from 'next/image';

const Result = () => {
  return (
    <Container >
        <Row>
            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                    <h5>Total Session</h5>
                    <p>Total round on game</p>
                    <h3>10</h3>
                    <p></p>
                </Row>
            </Col>

            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                    <h5>Win</h5>
                    <p>Total win on all played game</p>
                    <h3>5</h3>
                    <p></p>
                </Row>
            </Col>

            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                    <h5>Lost</h5>
                    <p>Total lost on all played game</p>
                    <h3>4</h3>
                    <p></p>
                </Row>
            </Col>

            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                    <h5>Draw</h5>
                    <p>Total lost on all played game</p>
                    <h3>1</h3>
                    <p></p>
                </Row>
            </Col>

        </Row>    
    </Container>
  );
};

export default Result;
