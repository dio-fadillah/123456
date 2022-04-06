import Header from "../components/header";
import Footer from "../components/footer";
import { Container, Button, Form, FormGroup, Label, Input, Col, Row } from 'reactstrap'
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";

import { useUser } from "../context/user";
import withProtected from "../context/protected";

const Redeem = props => {
    const user = useUser()
    const { uid } = user
    
    const [inputValue, setInputValue] = useState({ voucher: '' })
    const { voucher } = inputValue

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
        
        <Container fluid>
            <Header />
            <Row>
                <Col xs={3} id="sidebar-wrapper">      
                        <Sidebar />
                </Col>
                <Col  xs={3} id="page-content-wrapper">
                <Form onSubmit={handleSubmit}>
                <FormGroup className="form-group">
                            <Label className="label">Input Voucher Code</Label>
                            <Input 
                            id='password' 
                            name="voucher" 
                            type="text" 
                            variant='filled'
                            placeholder="Voucher code" 
                            value={voucher}
                            onChange={handlerOnchange}
                            // {...register("password", { required: true, minLength: 8 })}
                            />
                            {/* <FormError error={errors.password} /> */}
                        </FormGroup>

                        
                        <Button type="submit" variant='contained' className="btn btn-dark btn-md btn-block">Redeem</Button>
                </Form>
                
                </Col>
            </Row>
            
            <Footer />

        </Container>
        
        );
  };

// export default Redeem
export default withProtected(Redeem)