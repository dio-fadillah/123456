import React from "react";
import {Nav} from "react-bootstrap";
import '../styles/dashboard.module.css'
// import { RiDashboard2Fill } from "react-icons/Ri";
// import { CgProfile } from "react-icons/Cg";
// import { MdOutlineRedeem, MdLiveHelp, MdLogout } from "react-icons/Md";
import { SignOut } from "../services/firebase";


const Sidebar = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/"
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/dashboard"><h5> My Dashboard</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/myprofiles"><h5> My Profiles</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/redeem"><h5> Redeem Voucher</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/gamelist"><h5> Gamelist</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="https://wa.me/+6212345678"><h5> Ask for help</h5></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={SignOut} ><h5>Logout</h5></Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default Sidebar