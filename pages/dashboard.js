import Header from "../components/Header";
import Footer from "../components/Footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Result from "../components/dashboard/Result";
import Sidebar from "../components/Sidebar";

import { useUser } from "../context/user";
import withProtected from "../context/protected";



const Dashboard = props => {
    const user = useUser()
    
    const { email, uid } = user


    return (
        
        <Container fluid>
            <Header />

            <Row>
                <Col xs={3} id="sidebar-wrapper">      
                    <Sidebar />
                </Col>
                <Col  xs={9} id="page-content-wrapper">
                    <h2>Welcome {user.email} !</h2>
                    <Result/>
                    <Row>
                        <Col className="p-5" xs="6">
                            <h5>Indonesia Top 5 Points Standing</h5>
                            <p>1. Abdul</p>
                            <p>2. Budi</p>
                            <p>3. Cecep</p>
                            <p>4. Dian</p>
                            <p>5. Eko</p>
                            
                        </Col>

                        <Col className="p-5" xs="6">
                            <h5>Upcoming Events</h5>
                            <p>Mabar Anak Komplek</p>
                            <p>Kompetisi bergilir piala Bang Ijal</p>
                        </Col>                                   
                    </Row>
                </Col>
            </Row>

            
            <Footer />

        </Container>
        
        );
  };

//export default Dashboard
export default withProtected(Dashboard)