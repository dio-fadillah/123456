import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col } from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useState } from "react";


const Suwit = () => {
    
    const [enableHover, setenableHover] = useState(true)
    const [GameResult, setGameResult] = useState('')
    const [enableClick, setenableClick] = useState(true)


    const onRefresh = () =>{

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.com')[i].style.backgroundColor = ''
            document.querySelectorAll('.choose')[i].style.backgroundColor = ''

            setenableHover(true)
            setGameResult('')
        } 

    }

    

    const onChoose = (e) => {
        
        if (!enableHover) return 0

        const playerChoice = e.target.alt
        e.target.style.background = '#FF0000'
        console.log('player',playerChoice)

        const comShuffle = ['batu', 'kertas', 'gunting'];
        const comChoice = comShuffle[Math.floor(Math.random() * comShuffle.length)];

        console.log('computer',comChoice)

        if(comChoice === 'batu'){
            document.querySelectorAll('.com')[0].style.backgroundColor = '#FF0000'
        }else if (comChoice === 'gunting'){
            document.querySelectorAll('.com')[1].style.backgroundColor = '#FF0000'
        }else{
            document.querySelectorAll('.com')[2].style.backgroundColor = '#FF0000'
        }

        if(comChoice === playerChoice){
            setGameResult('DRAW PAK')
        }else if (playerChoice === "batu" && comChoice === "gunting" || (playerChoice === "gunting" && comChoice === "kertas") || playerChoice === "kertas" && comChoice === "batu"){
            setGameResult('PLAYER MENANG')
        }else{
            setGameResult('KOMPUTER MENANG')
        }

        setenableHover(false)
        
       

  

    }  

    // const onHover = (e) => {
    //     if (hoverEnable) {
    //         e.target.style.background = '#d4d4d4'
    //     }
    // }

    // const unHover = (e) => {
    //     if (hoverEnable) {
    //         e.target.style.background = '#fff'
    //     }
    // }

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
                    <Col md="auto">
                        <Image src="/assets/suwit/batu.png" className='choose' onClick={onChoose} alt="batu" width="80px" height="80px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src="/assets/suwit/gunting.png" className='choose' onClick={onChoose} alt="gunting" width="80px" height="80px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src="/assets/suwit/kertas.png" className='choose' onClick={onChoose} alt="kertas" width="80px" height="80px"/>
                    </Col>
                </Row>
            </Col>

            <Col xs="4">

                <Row className="text-center">
                    <Col className="align-items-center" xs="5">
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
                    <Col md="auto">
                         <Image src="/assets/suwit/batu.png" className="com" alt="batu" width="80px" height="80px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src="/assets/suwit/gunting.png" className="com" alt="gunting" width="80px" height="80px"/>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Image src="/assets/suwit/kertas.png"  className="com" alt="kertas" width="80px" height="80px"/>
                    </Col>
                </Row>
            </Col>
            
        </Row>

        <Row className="justify-content-md-center">
            <Col className="p-5" md="auto">
                <Image src="/assets/suwit/refresh.png" onClick={onRefresh} alt="batu" width="80px" height="80px"/>
            </Col>
        </Row>
      </Container>
      </main>

      <Footer />
    </Layout>
  );
};
export default Suwit;

