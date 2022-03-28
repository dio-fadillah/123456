import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const Index = () => {
  return (
    <Layout pageTitle="Landing Page">
      <Header />

      <main>
      <Container fluid>
        <Row className="justify-content-md-center">
            <Col md="auto">
                <h1 className="display-4">PLAY TRADITIONAL GAME</h1>
            </Col>
        </Row>


        <Row className="justify-content-md-center">
            <Col md="auto">
                <p className="lead">Experience new traditional game play</p>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col md="auto">
                <Link href="/login" role="button"><a className="btn btn-warning btn-lg">PLAY NOW</a></Link>
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col className="p-5" xs="4">
                <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
            </Col>

            <Col className="p-5" xs="6">
                <h2 className={styles.display_5}>Rock Paper Scissors</h2>
                <p className={styles.display_10}>Rock paper scissors (also known by other orderings of the three items, with rock sometimes being called stone, or as Rochambeau, roshambo, or ro-sham-bo)  is a hand game, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand. These shapes are rock (a closed fist), paper (a flat hand), and scissors (a fist with the index finger and middle finger extended, forming a V). Scissors is identical to the two-fingered V sign (also indicating victory or peace) except that it is pointed horizontally instead of being held upright in the air.</p>
            </Col>
        </Row>
      </Container>
      </main>

      <Footer />
    </Layout>
  );
};
export default Index;

