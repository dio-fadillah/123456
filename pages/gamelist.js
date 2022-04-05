import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ReactPlayer from 'react-player'

const Gamelist = () => {
  return (
    <Layout pageTitle="Gamelist Page">
      <Header />

      <main>
      <Container fluid>
            <Row className="justify-content-md-center">
                <Col className="p-5" xs="4">
                    <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
                </Col>

                <Col className="p-5" xs="8">
                    <h2 className={styles.display_5}>Rock Paper Scissors</h2>
                    <p className={styles.display_10}>Rock paper scissors (also known by other orderings of the three items, with rock sometimes being called stone, or as Rochambeau, roshambo, or ro-sham-bo)  is a hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are rock (a closed fist), paper (a flat hand), and scissors (a fist with the index finger and middle finger extended, forming a V). Scissors is identical to the two-fingered V sign (also indicating victory or peace) except that it is pointed horizontally instead of being held upright in the air.</p>
                </Col>
            </Row>
            <Row>
                <Col className="p-5" xs={3}>
                    <Row className="justify-content-md-center">
                        <h2>Rock Paper Scissors</h2>
                        <p>Rock paper scissors is a hand game, usually played between two people.  </p>
                        {/* <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/> */}
                        <ReactPlayer url="https://www.youtube.com/watch?v=ND4fd6yScBM" />
                        <p></p>
                        <Col md="auto">
                            <Link className="btn btn-warning btn-lg" href="/login" role="button"><a>PLAY NOW</a></Link>
                        </Col>
                        <p></p>
                    </Row>
                </Col>

                <Col className="p-5" xs={3}>
                    <Row className="justify-content-md-center">
                        <h2>Mobile Legends</h2>
                        <p>A mobile multiplayer online battle arena game developed and published by Moonton</p>
                        {/* <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/> */}
                        <ReactPlayer url="https://youtu.be/cftqT7au9gk" />
                        <p></p>
                        <Col md="auto">
                            <Link className="btn btn-warning btn-lg" href="/login" role="button"><a>PLAY NOW</a></Link>
                        </Col>
                        <p></p>
                    </Row>
                </Col>

                <Col className="p-5" xs={3}>
                    <Row className="justify-content-md-center">
                        <h2>PUBG Mobile</h2>
                        <p>A free-to-play battle royale video game developed by LightSpeed and Quantum Studio</p>
                        {/* <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/> */}
                        <ReactPlayer url="https://youtu.be/_LTiEXMc5J0" />
                        <p></p>
                        <Col md="auto">
                            <Link className="btn btn-warning btn-lg" href="/login" role="button"><a>PLAY NOW</a></Link>
                        </Col>
                        <p></p>
                    </Row>
                </Col>

                <Col className="p-5" xs={3}>
                    <Row className="justify-content-md-center">
                        <h2>Candy Crush</h2>
                        <p>Switch and match your way through hundreds of levels in this divine puzzle adventure</p>
                        {/* <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/> */}
                        <ReactPlayer url="https://www.youtube.com/watch?v=j6QCe_AqaZ4" />
                        <p></p>
                        <Col md="auto">
                            <Link className="btn btn-warning btn-lg" href="/login" role="button"><a>PLAY NOW</a></Link>
                        </Col>
                        <p></p>
                    </Row>
                </Col>
            </Row>        
        </Container>
      </main>

      <Footer />
    </Layout>
  );
};

export default Gamelist;
