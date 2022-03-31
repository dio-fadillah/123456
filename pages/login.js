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
import firebase from '../services/firebase'

const Login = (props) => {
    // const [inputValue, setInputValue] = useState({ email: '', password: '' })
    // const { email, password } = inputValue


    const { register, handleSubmit, formState: { errors } } = useForm();

    
    const onSubmit = async (values) => {
        const { email, password } = values
        console.log(email)
        try {
            await SignIn(email, password)
        } catch (error) {
            const message = GetSignInErrorMessage(error.code)
            console.log(message)
        }
    }
// =======
//     const handleInput = (e) => {
//         const { name, value } = e.target
//         setInputValue({ ...inputValue, [name]: value })
//     }
//     const handleSubmit = () => {
//         // e.preventDefault()
//         firebase.auth.signInWithEmailAndPassword(auth, email, password)
//             .then(userCredential => {
//                 const isLogin = userCredential.user
//                 console.log(isLogin)
//                 if (isLogin) {
//                     setInputValue({ email: '', password: '' })
//                     props.navigate('/gamelist')
//                 }
//             })
//             .catch(err => {
//                 alert(err.message)
//             })
// >>>>>>> 08c912b60876ccbf36fa0f239d1402a0ee350683
//     }
    

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
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                            {...register("email", { required: true })}
                            />
                            <FormError error={errors.email} />
                        </FormGroup>

                        <FormGroup className="form-group">
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
export default Login;

