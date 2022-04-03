import Layout from "../components/Layout";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useRef, userState } from "react";
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useForm } from "react-hook-form";
import FormError from "../components/forms/error";
import { SignUp, GetSignUpErrorMessage } from "../services/firebase";
import withUnprotected from "../hoc/withUnprotected";
import firebase from '../services/firebase'


export default function signUp() { 

    

    const handlerOnchange = (event) => {
        const {name,values} = event.target
        setInputValue ({...inputValue,[name]: values})  
        console.log(inputValue.email)
        
    }

    

    const onSubmit = (values) => {
       setIsLoading(true) 
        const { email, password } = values
        try {
            SignUp(email, password)
        } catch(error) {
            const message = GetSignUpErrorMessage(error.code)
            console.log(message)
            setIsLoading(false)
        }
    }


    

    return (
        // We pass the event to the handleSubmit() function on submit.
        <Form onSubmit={handleSubmit}>
          <Label htmlFor="first">First Name</Label>
          <Input type="text" id="email" onChange={handlerOnchange} name="email" required />
    
          <Label htmlFor="last">Last Name</Label>
          <Input type="text" id="last" onChange={handlerOnchange} name="last" required />
    
          <button type="submit">Submit</button>
        </Form>
    )  
}