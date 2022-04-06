<<<<<<< HEAD
=======
// import withProtected from "../context/protected"
// import AuthLayout from '../context/Authenticate'
// import { useUser } from "../context/user"

// const Protect = () => {
//     const user = useUser()
//     const { email, uid } = user
//     return (
//         <AuthLayout title="Protected Page">
//             <div>
//                 <p>Email: <b>{email}</b></p>
//                 <br />
//                 <p>UID: <b>{uid}</b></p>
//             </div>
            
//         </AuthLayout>
//     )
// }

// export default withProtected(Protect) 


import Layout from "../components/Layout";
>>>>>>> 496d1d65f0a8b8ca41fd575a8b62f2241ed5586d
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Image from 'next/image'
import Sidebar from "../components/Sidebar";
import Link from 'next/link'

import { useUser } from "../context/user";
import withProtected from "../context/protected";


const MyProfiles = props => {
    const user = useUser()
    const [username, setuserName] = useState('Register your username')
    const [phone, setPhone] = useState('Register your handphone number')
    const [fullname, setFullname] = useState('Register your fullname')
    
    return (
        <>
        <Container fluid>
            <Header />

                <Row>
                    <Col xs={3} id="sidebar-wrapper">      
                        <Sidebar />
                    </Col>
                    
                    <Col  xs={9} id="page-content-wrapper">
                    <Row className="justify-content-md">
                        <Col className="p-5" xs="3">
                            <Image src="/assets/editprofiles/avatar.png" alt="Picture of the author" width="100px" height="100px"/>
                        </Col>

                        <Col className="p-5" xs="6">
                            <h1>{fullname}</h1>
                            <p>Silver Membership</p>
                        </Col>                                   
                    </Row>
                   
                    
            <Row className="justify-content-md-center">
                <Col className="p-5" xs="3">
                    <p>User Name</p>
                    <p>Email</p>
                    <p>Phone Number</p>

                </Col>

                <Col className="p-5" xs="6">
                    <p>{username}</p>
                    <p>&nbsp;{user.email}</p>
                    <p>{phone}</p>

                </Col>

                <Col className="p-5" xs="3">
                    <Link href="/editprofiles" role="button"><a className="btn btn-warning btn-md">Edit</a></Link>
                </Col>
            </Row>


                </Col> 
            </Row>

            <Footer />

        </Container>
        </>
        );
  };

  //export default MyProfiles
  export default withProtected(MyProfiles)