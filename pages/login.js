import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, FormControl, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useForm } from "react-hook-form";
import FormError from "../components/forms/error";
import { Link } from "react-bootstrap-icons";

import { SignIn, GetSignInErrorMessage } from "../services/firebase";
import { async } from "@firebase/util";

const Login = (props) => {
    // const [inputValue, setInputValue] = useState({ email: '', password: '' })
    // const { email, password } = inputValue

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (values) => {
        const { email, password } = values
        try {
            await SignIn(email, password)
        } catch (error) {
            const message = GetSignInErrorMessage(error.code)
            console.log(message)
        }
    }
    

    // const handleInput = (e) => {
    //     const { name, value } = e.target
    //     setInputValue({ ...inputValue, [name]: value })
    // }
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(userCredential => {
    //             const isLogin = userCredential.user
    //             console.log(isLogin)
    //             if (isLogin) {
    //                 setInputValue({ email: '', password: '' })
    //                 props.navigate('/gamelist')
    //             }
    //         })
    //         .catch(err => {
    //             alert(err.message)
    //         })
    // }

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
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <h1>Log in</h1>

                        <FormControl className="form-group">
                            <Label className="label">Email</Label>
                            <Input 
                            id='email' 
                            name="email" 
                            type="email" 
                            variant='filled'
                            placeholder="Enter email" 
                            {...register("email", { required: true })}
                            />
                            <FormError error={errors.email} />
                        </FormControl>

                        <FormControl className="form-group">
                            <Label className="label">Password</Label>
                            <Input 
                            id='password' 
                            name="password" 
                            type="password" 
                            variant='filled'
                            placeholder="Enter password" 
                            {...register("password", { required: true, minLength: 8 })}
                            />
                            <FormError error={errors.password} />
                        </FormControl>

                        <FormGroup>
                            <FormGroup className="custom-control custom-checkbox">
                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <Label className="custom-control-label" htmlFor="customCheck1"> Remember me</Label>
                            </FormGroup>
                        </FormGroup>

                        <Button type="submit" variant='contained' className="btn btn-dark btn-lg btn-block" fullWidth>Sign in</Button>
                        
                        <p className="forgot-password text-right">
                            <Link href="https://wa.me/+6212345678"> Forgot password?</Link>
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

