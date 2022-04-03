import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import FormError from "../components/forms/error";
// import { SignUp, GetSignUpErrorMessage } from "../services/firebase";
// // import withUnprotected from "../hoc/withUnprotected";
// import firebase from '../services/firebase'


const Signup = () => {
    // const [isLoading, setIsLoading] = useState(false)
    // // const [showPassword, setShowPassword] = useState(false)
    // // const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [inputValue, setInputValue] = useState({ email: 'a', password: '' })
    // const { email, password } = inputValue

    const { 
        register, 
        watch, 
        formState: { errors } 
    } = useForm();

    // const password = useRef({})
    // password.current = watch('password')

    // console.log({ pass: password.current })

    // const handlerOnchange = (event) => {
    //     const {name,values} = event.target
    //     setInputValue ({...inputValue,[name]: values})  
    //     console.log(inputValue)
        
    // }

    const handlerOnchange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value });
        console.log(inputValue)
    };
  
    const handleSubmit = (values) => {
    //    setIsLoading(true) 
    //     const { email, password } = values
    //     try {
    //         SignUp(email, password)
    //     } catch(error) {
    //         const message = GetSignUpErrorMessage(error.code)
    //         console.log(message)
    //         setIsLoading(false)
    //     }
    }

    // const handleInput = e => {
    //     const { name, value } = e.target
    //     setInputValue(input => ({ ...input, [name]: value }))
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             if (user) {
    //                 setInputValue({ email: '', password: '' })
    //                 props.navigate('/login')
    //             }
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             console.log({ errorCode, errorMessage })
    //         })

//     const handleSubmit = () => {

//         firebase.auth.createUserWithEmailAndPassword(auth, email, password)
//          .then((userCredential) => {
//             // Signed in 
//             const user = userCredential.user;
//             // props.navigate('/login')
//             console.log(userCredential)
//             // ...
//         })
//         .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//     // ..
//   });
//         // e.preventDefault();

//         // firebase.createUserWithEmailAndPassword(auth, email, password)
//         //     .then((userCredential) => {
//         //         const user = userCredential.user;
//         //         if (user) {
//         //             setInputValue({ email: '', password: '' })
//                     // props.navigate('/login')
//         //         }
//         //     })
//         //     .catch((error) => {
//         //         const errorCode = error.code;
//         //         const errorMessage = error.message;
//         //         console.log({ errorCode, errorMessage })
//         //     })
// >>>>>>> 08c912b60876ccbf36fa0f239d1402a0ee350683
        
        
//     // }

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
                    <Form onSubmit={handleSubmit}>
                        <h1>User Registration</h1>

                        <FormGroup className="form-group">
                            <Label className="label">Email</Label>
                            <Input 
                            id='email' 
                            name='email' 
                            type='email' 
                            placeholder='Enter email'
                            variant='filled'
                            onChange={handlerOnchange}
                            // {...register("email", { required: true })}
                            />
                            {/* <FormError error={errors.email} /> */}
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Password</Label>
                            <Input 
                            id='password' 
                            name='password' 
                            type='password' 
                            placeholder='Enter password'
                            onChange={handlerOnchange}
                            variant='filled'
                            // {...register("password", { required: true, minLength: 8 })}
                            />
                            <FormError error={errors.password} />
                        </FormGroup>

                        <FormGroup className="form-group">
                            <Label className="label">Confirm Password</Label>
                            <Input 
                            id='confirmPassword' 
                            name='confirmPassword' 
                            type='password' 
                            placeholder='Konfirmasi password'
                            variant='filled'
                            // {...register("confirmPassword", { 
                            //     required: true, 
                            //     minLength: 8, 
                            //     validate: (value) => value === password.current
                            // })}
                            />
                            <FormError error={errors.confirmPassword} />
                        </FormGroup>

                        <Button onClick={handleSubmit} type="submit" className="btn btn-dark btn-lg btn-block">Register</Button>
                        <p className="forgot-password text-right">
                            Already registered? <Link href="/login">Log in</Link>
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
export default withUnprotected(Signup);

