import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

const Index = () => {
  return (
    <Layout pageTitle="Rock Paper Scissors">
      <Header />

      <main>
      <Container fluid>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h1 className="display-4">ROCK PAPER SCISSORS</h1>
            </Col>
        </Row>




        <Row className="justify-content-md-center">
            <Col className="p-5" xs="4">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <p>Player</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="5">
                        <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="5">
                        <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="5">
                        <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                    </Col>
                </Row>
            </Col>

            <Col className="flex-column" xs="4">

                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h3>VS</h3>
                        <p>{GameResult}</p>
                    </Col>
                </Row>
        
            </Col>

            
            <Col className="p-5" xs="4">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <p>Com</p>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="5">
                        <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="5">
                        <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col xs="5">
                        <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                    </Col>
                </Row>
            </Col>
            
        </Row>

        <Row className="justify-content-md-center">
            <Col className="p-5" md="auto">
                <Link className="btn btn-warning btn-lg" href="/login" role="button"><a>Refresh</a></Link>
            </Col>
        </Row>
      </Container>
      </main>

      <Footer />
    </Layout>
  );
};
export default Index;

