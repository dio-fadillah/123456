import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Result from "../components/dashboard/Result";
import Sidebar from "../components/Sidebar";



const Dashboard = props => {
    const [inputValue, setInputValue] = useState({ email: '', password: '' })
    const { email, password } = inputValue

    const handleInput = (e) => {
        const { name, value } = e.target
        setInputValue({ ...inputValue, [name]: value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then(userCredential => {
                const isLogin = userCredential.user
                console.log(isLogin)
                if (isLogin) {
                    setInputValue({ email: '', password: '' })
                    props.navigate('/gamelist')
                }
            })
            .catch(err => {
                alert(err.message)
            })
    }

    return (
        
        <Container fluid>
            <Header />

            <Row>
                <Col xs={3} id="sidebar-wrapper">      
                    <Sidebar />
                </Col>
                <Col  xs={9} id="page-content-wrapper">
                    <h1>Welcome Andrea Gromico !!</h1>
                    <Result/>
                    <Row>
                        <Col className="p-5" xs="6">
                            <h5>Indonesia Top 5 Points Standing</h5>
                            <p>1. Abdul</p>
                            <p>2. Budi</p>
                            <p>3. Cecep</p>
                            <p>4. Dian</p>
                            <p>5. Eko</p>
                            
                        </Col>

                        <Col className="p-5" xs="6">
                            <h5>Upcoming Events</h5>
                            <p>Mabar Anak Komplek</p>
                            <p>Kompetisi bergilir piala Bang Ijal</p>
                        </Col>                                   
                    </Row>
                </Col>
            </Row>

            
            <Footer />

        </Container>
        
        );
  };

export default Dashboard