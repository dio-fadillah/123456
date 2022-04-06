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
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useUser } from "../context/user";
import withProtected from "../context/protected";
import db from "../services/firebase";
import { doc, updateDoc } from "firebase/firestore";

const Editprofile = (props) => {
    const user = useUser()
    const { uid } = user
    const userIdRef = auth.currentUser.uid
    const [inputValue, setInputValue] = useState({ fullname: '', username: '',  phone:''})
    const { fullname, username, phone } = inputValue
    // const [username, setusername] = useState('')
    // const [phone, setphone] = useState('')


    const handlerOnchange = (e) => {
        e.preventDefault()
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
    };

   
    const handleSubmit = (e) => {
        e.preventDefault()
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        console.log(inputValue)

      updateProfile(auth, fullname, username, phone, userIdRef)
      .then(() => {
        return updateDoc(doc(db, 'users', userIdRef), {
          fullname: fullname,
          username: username,
          phone: phone
        })
      }).then(() => {
        alert("Data terupdate")
        window.location.assign('/myprofiles')
      })
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
                    <br></br>

                    <FormGroup className="form-group">
                            <Label className="label">Fullname</Label>
                            <Input 
                            id='fullname' 
                            name="fullname" 
                            type="text" 
                            variant='filled'
                            placeholder="Enter Fullname" 
                            value={fullname}
                            onChange={handlerOnchange}
                            // {...register("email", { required: true })}
                            />
                            {/* <FormError error={errors.email} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Username</Label>
                            <Input 
                            id='username' 
                            name="username" 
                            type="text" 
                            variant='filled'
                            placeholder="Enter Username" 
                            value={username}
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
                            type="tel" 
                            variant='filled'
                            placeholder="Enter phone" 
                            value={phone}
                            onChange={handlerOnchange}
                            // {...register("password", { required: true, minLength: 8 })}
                            />
                            {/* <FormError error={errors.password} /> */}
                        </FormGroup>

                       
                        <Button type="submit" variant='contained' className="btn btn-warning btn-md btn-block">Save</Button>
                        
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