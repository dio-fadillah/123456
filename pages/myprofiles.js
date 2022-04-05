import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Result from "../components/dashboard/Result";
import Sidebar from "../components/Sidebar";
import Link from 'next/link'
// import { withProtected } from "../context/route";



const MyProfiles = props => {
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
        <>
        <Container fluid>
            <Header />

                <Row>
                    <Col xs={3} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    
                    <Col  xs={9} id="page-content-wrapper">
                    <Row className="justify-content-md">
                        <Col className="p-5" xs="3">
                            <Image src="/assets/editprofiles/avatar.png" alt="Picture of the author" width="100px" height="100px"/>
                        </Col>

                        <Col className="p-5" xs="6">
                            <h1>Andrea Gromico</h1>
                            <p>Silver Membership</p>
                        </Col>                                   
                    </Row>
                   
                    
            <Row className="justify-content-md-center">
                <Col className="p-5" xs="3">
                    <p>User Name</p>
                    <p>Email</p>
                    <p>Phone Number</p>
                    <p>Password</p>
                </Col>

                <Col className="p-5" xs="6">
                    <p>AndrGrmc</p>
                    <p>andrea.gromico@gmail.com</p>
                    <p>+628781234567890</p>
                    <p>1234345768</p>
                </Col>

                <Col className="p-5" xs="3">
                    <Link href="/editprofiles" role="button"><a className="btn btn-warning btn-lg">Edit</a></Link>
                </Col>
            </Row>


                </Col> 
            </Row>

            <Footer />

        </Container>
        </>
        );
  };

  export default MyProfiles