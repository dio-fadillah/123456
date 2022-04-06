import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { auth, SignUp, GetSignUpErrorMessage } from "../services/firebase";
// import firebase from '../services/firebase'
// import FormError from "../components/forms/error";
import { signInWithEmailAndPassword } from "firebase/auth";
<<<<<<< HEAD
// import withUnprotected from "../hoc/withUnprotected";
import { prisma } from "../lib/_prisma";
=======

import withUnprotected from "../context/unprotected";
>>>>>>> 496d1d65f0a8b8ca41fd575a8b62f2241ed5586d

const Login = (props) => {
    const [userAuthy,setuserAuthy] = useState('')
    const [inputValue, setInputValue] = useState({ email: '', password: '' })
    const { email, password } = inputValue


    const handlerOnchange = (e) => {
        e.preventDefault()
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        console.log(inputValue)
    };
  
    const handleSubmit = (e) => {
        e.preventDefault()
        
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        console.log(inputValue)
        
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                window.location.assign('/dashboard');
            
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage })
            })


        function postMessage(e) {
           
            let content = document.querySelector("#email");
          
            fetch(`${server}/api/posts/write`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ content: content.value }),
            })
                .catch((error) => console.error("WriteError", error))
                .finally(() => {
                    content.value = "";
                    author.value = "";
                });
        }
    }


  return (
    <Layout pageTitle="Login Page">
      <Header />

      <main>

        <Container>
        
        <Row className="justify-content-md-center">
<<<<<<< HEAD
        <Col xs="6">
                <Image src="/assets/login/lock1.jpg" alt="Picture of the author" width="604px" height="339px"/>
            </Col>
        <Col xs="4">
=======
        <Col className="p-6" xs="4">
            <Image src="/assets/login/lock1.jpg" alt="Picture of the author" width="604px" height="339px"/>
        </Col>
        
        <Col className="p-6" xs="4">
>>>>>>> 496d1d65f0a8b8ca41fd575a8b62f2241ed5586d
        <Form onSubmit={handleSubmit}>
        <FormGroup className={styles.outer}>
                <FormGroup className={styles.inner}>
                    
                        <h1>Log in</h1>

                        <FormGroup className="form-group">
                            <Label className="label">Email</Label>
                            <Input 
                            id='email' 
                            name="email" 
                            type="email" 
                            variant='filled'
                            placeholder="Enter email" 
                            value={email}
                            onChange={handlerOnchange}
                            // {...register("email", { required: true })}
                            />
                            {/* <FormError error={errors.email} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Password</Label>
                            <Input 
                            id='password' 
                            name="password" 
                            type="password" 
                            variant='filled'
                            placeholder="Enter password" 
                            value={password}
                            onChange={handlerOnchange}
                            // {...register("password", { required: true, minLength: 8 })}
                            />
                            {/* <FormError error={errors.password} /> */}
                        </FormGroup>

                        <FormGroup>
                            <FormGroup className="custom-control custom-checkbox">
                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <Label className="custom-control-label" htmlFor="customCheck1"> Remember me</Label>
                            </FormGroup>
                        </FormGroup>

                        <Button type="submit" variant='contained' className="btn btn-dark btn-lg btn-block">Sign in</Button>
                        
                        <p className="forgot-password text-right">
                            <Link href="https://wa.me/+6212345678"> Forgot password?</Link>
                        </p>

                
                </FormGroup>
        </FormGroup>
        </Form>
        </Col>

        </Row>
        
            
        </Container>
      </main>

      <Footer />
    </Layout>
  );
};
//export default Login;
export default withUnprotected(Login)

