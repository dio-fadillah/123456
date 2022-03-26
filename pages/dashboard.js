import React from "react";
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import Result from "../components/dashboard/Result";
import Footer from "../components/Footer";
import Header from "../components/header";
import Sidebar from "../components/Sidebar";
import '../styles/dashboard.module.css'

const Dashboard = props => {
   

    return (
        <>
        <Container fluid>
            <Header />

            <Row>
                <Col xs={3} id="sidebar-wrapper">      
                    <Sidebar />
                </Col>
                <Col  xs={9} id="page-content-wrapper">
                    <h1>Welcome Andrea Gromico !!</h1>
                    <Result/>
                </Col> 
            </Row>

            <Footer />

        </Container>
        </>
        );
  };

  export default Dashboard