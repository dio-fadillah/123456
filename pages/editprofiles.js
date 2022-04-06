import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useRef, useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { auth, SignUp, GetSignUpErrorMessage } from "../services/firebase";
// import firebase from '../services/firebase'
// import FormError from "../components/forms/error";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useUser } from "../context/user";
import withProtected from "../context/protected";

const Editprofile = (props) => {
    const user = useUser()
    const { uid } = user

    const [inputValue, setInputValue] = useState({ email: '', password: '',  passwordRef:'', passwordConfirm:''})
    const [username, setusername] = useState('')
    const [phone, setphone] = useState('')

    const { email, password, passwordRef, passwordConfirm } = inputValue

    const handlerOnchange = (e) => {
        e.preventDefault()
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        console.log(inputValue)
    };

   
    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        console.log(inputValue)

    }
    

  return (
    <Layout pageTitle="Login Page">
      <Header />

      <main>

        <Container>
        <Row className="justify-content-md-center">
        <Col className="p-5" xs="4">
                <h3></h3>
                <Image src="/assets/editprofiles/avatar.png" alt="Picture of the author" width="350px" height="300px"/>
            </Col>
        <Col xs="4">
        <Form onSubmit={handleSubmit}>
        <FormGroup className={styles.outer}>
                <FormGroup className={styles.inner}>
                    
                       

                        <FormGroup className="form-group">
                            <Label className="label">Username</Label>
                            <Input 
                            id='username' 
                            name="username" 
                            type="text" 
                            variant='filled'
                            placeholder="" 
                            value={username}
                            onChange={handlerOnchange}
                            // {...register("email", { required: true })}
                            />
                            {/* <FormError error={errors.email} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Email</Label>
                            <Input 
                            id='email' 
                            name="email" 
                            type="email" 
                            variant='filled'
                            placeholder="" 
                            value={email}
                            onChange={handlerOnchange}
                            // {...register("email", { required: true })}
                            />
                            {/* <FormError error={errors.email} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Phone</Label>
                            <Input 
                            id='phone' 
                            name="phone" 
                            type="text" 
                            variant='filled'
                            placeholder="" 
                            value={phone}
                            onChange={handlerOnchange}
                            // {...register("email", { required: true })}
                            />
                            {/* <FormError error={errors.email} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Password</Label>
                            <Input 
                            id='passwordRef' 
                            name="passwordRef" 
                            type="password" 
                            variant='filled'
                            placeholder="Enter password" 
                            value={passwordRef}
                            onChange={handlerOnchange}
                            // {...register("password", { required: true, minLength: 8 })}
                            />
                            {/* <FormError error={errors.password} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Re-Type Password</Label>
                            <Input 
                            id='passwordConfirm' 
                            name="passwordConfirm" 
                            type="password" 
                            variant='filled'
                            placeholder="Enter password" 
                            value={passwordConfirm}
                            onChange={handlerOnchange}
                            // {...register("password", { required: true, minLength: 8 })}
                            />
                            {/* <FormError error={errors.password} /> */}
                        </FormGroup>

                        {/* <FormGroup>
                            <FormGroup className="custom-control custom-checkbox">
                                <Input type="checkbox" className="custom-control-input" id="customCheck1" />
                                <Label className="custom-control-label" htmlFor="customCheck1"> Remember me</Label>
                            </FormGroup>
                        </FormGroup> */}

                        <Button type="submit" variant='contained' className="btn btn-dark btn-lg btn-block">Edit Profile</Button>
                        
                        {/* <p className="forgot-password text-right">
                            <Link href="https://wa.me/+6212345678"> Forgot password?</Link>
                        </p> */}

                
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
// export default Editprofile;
export default withProtected(Editprofile)

