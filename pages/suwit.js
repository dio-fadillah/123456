import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Row, Col, Button } from 'reactstrap';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import { useState } from "react";

import { useUser } from "../context/user";
import withProtected from "../context/protected";


const Suwit = () => {
    const user = useUser()
    const { uid } = user
    
    const [enableHover, setenableHover] = useState(true)
    const [GameResult, setGameResult] = useState('')
    const [matchCount, setmatchCount] = useState(0)
    const [winCount, setwinCount] = useState(0)
    const [drawCount, setdrawCount] = useState(0)
    const [loseCount, setloseCount] = useState(0)
    

    const onRefresh = () =>{

        for (let i = 0; i < 3; i++) {
            document.querySelectorAll('.com')[i].style.backgroundColor = '';
            document.querySelectorAll('.choose')[i].style.backgroundColor = '';

        }

        setenableHover(true)
        setGameResult('')

    }

    const quitgame = () =>{
        console.log('match', matchCount)
        console.log('draw', drawCount)
        console.log('win', winCount)
        console.log('lose', loseCount)
        window.location.assign('/dashboard');

    }

    

    const onChoose = (e) => {
        if (!enableHover) return 0

        setmatchCount(matchCount +1)

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
            setGameResult('DRAW')
            setdrawCount(drawCount+1)
        }else if (playerChoice === "batu" && comChoice === "gunting" || (playerChoice === "gunting" && comChoice === "kertas") || playerChoice === "kertas" && comChoice === "batu"){
            setGameResult('PLAYER WIN')
            setwinCount(winCount +1)
        }else{
            setGameResult('COM WIN')
            setloseCount(loseCount+1)
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

        <Row>
            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                <h5>Match Count : </h5>
                <h5>{matchCount}</h5>
                </Row>
            </Col>

            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                <h5>Draw Count : </h5>
                <h5>{drawCount}</h5>
                
                </Row>
            </Col>

            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                <h5>Win Count : </h5>
                <h5>{winCount}</h5>
                
                </Row>
            </Col>

            <Col className="p-5" xs={3}>
                <Row className="justify-content-md-center">
                    <h5>Lose Count :</h5> 
                    <h5>{loseCount}</h5>
                </Row>
            </Col>
        </Row>  




        <Row className="justify-content-md-center">
            <Col xs={4}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h2>Player</h2>
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

            <Col xs={2}>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h3>VS</h3>
                        <p>{GameResult}</p>
                    </Col>
                </Row>

            </Col>

            

            
            <Col xs="4">
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h2>Com</h2>
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
            <Col md="auto">
                <Image src="/assets/suwit/refresh.png" onClick={onRefresh} alt="batu" width="80px" height="80px"/>
                
            </Col>
        </Row>

        <Row className="justify-content-md-center">
            <Col  md="auto">
            <Button onClick={quitgame} variant='contained' className="btn btn-warning btn-md btn-block">Quit Game</Button>
            </Col>
        </Row>

        
      </Container>
      </main>

      <Footer />
    </Layout>
  );
};
// export default Suwit;
export default withProtected(Suwit)

