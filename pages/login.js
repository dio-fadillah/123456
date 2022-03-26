import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Login = (orops) => {
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
    <Layout pageTitle="Login Page">
      <Header />

      <main>

        <Container>
        <Row className="justify-content-md-center">
        <Col className="p-5" xs="4">
                <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
            </Col>
        <Col className="p-5" xs="4">
        <FormGroup className={styles.outer}>
                <FormGroup className={styles.inner}>
                    <Form onSubmit={handleSubmit}>
                        <h1>Log in</h1>

                        <FormGroup className="form-group">
                            <Label className="label">Email</Label>
                            <Input id='email' name="email" type="email" placeholder="Enter email" onChange={handleInput} />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Password</Label>
                            <Input id='password' name="password" type="password" placeholder="Enter password" onChange={handleInput} />
                        </FormGroup>

                        <FormGroup>
                            <FormGroup className="custom-control custom-checkbox">
                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <Label className="custom-control-label" htmlFor="customCheck1"> Remember me</Label>
                            </FormGroup>
                        </FormGroup>

                        <Button type="submit" className="btn btn-dark btn-lg btn-block">Sign in</Button>
                        
                        <p className="forgot-password text-right">
                            <a href="https://wa.me/+6212345678"> Forgot password?</a>
                        </p>

                    </Form>
                </FormGroup>
            </FormGroup>
        </Col>

        </Row>
        
            
        </Container>
      </main>

      <Footer />
    </Layout>
  );
};
export default Login;

