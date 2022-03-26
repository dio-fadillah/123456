//Login Page
import React, { Fragment, useState } from "react";
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap'
// //import { withRouter } from '../libs/withRouter';
import { auth } from '../libs/services/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import styles from '../styles/loginRegister.module.css'
// import NavbarTop from "../components/NavbarTop";

const Login = (props) => {
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
        <Fragment>
            {/* <NavbarTop /> */}
            <Container className="container1">
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
            </Container>
        </Fragment>
    );
}

// export default withRouter(Login);
export default Login
