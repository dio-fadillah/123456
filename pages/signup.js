import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Signup = () => {

    const [inputValue, setInputValue] = useState({ email: '', password: '' })
    const { email, password } = inputValue

    const handleInput = e => {
        const { name, value } = e.target
        setInputValue(input => ({ ...input, [name]: value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                if (user) {
                    setInputValue({ email: '', password: '' })
                    props.navigate('/login')
                }
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage })
            })
        
        
    }

  return (
    <Layout pageTitle="Register Page">
      <Header />

      <main>
      <Container fluid>

        <Row className="justify-content-md-center">
            <Col className="p-5" xs="4">
                <Image src="/assets/home/01.jpg" alt="Picture of the author" width="350px" height="300px"/>
            </Col>

            <Col className="p-5" xs="4">
                <FormGroup className={styles.inner}>
                    <Form>
                        <h1>User Registration</h1>

                        <FormGroup className="form-group">
                            <Label className="label">Email</Label>
                            <Input id='email' name='email' type='email' placeholder='Email' value={email} onChange={handleInput} />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Password</Label>
                            <Input id='password' name='password' type='password' placeholder='Password' value={password} onChange={handleInput} />
                        </FormGroup>

                        <Button onClick={handleSubmit} type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
                        <p className="forgot-password text-right">
                            Already registered? <a href="/login">Log in</a>
                        </p>
                    </Form>
                </FormGroup>
            </Col>
        </Row>
      </Container>
      </main>

      <Footer />
    </Layout>
  );
};
export default Signup;

