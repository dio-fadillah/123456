import React from "react";
import {Nav} from "react-bootstrap";
import '../styles/dashboard.module.css'
import { RiDashboard2Fill } from "react-icons/Ri";
import { CgProfile } from "react-icons/Cg";
import { MdOutlineRedeem, MdLiveHelp } from "react-icons/Md";


const Sidebar = props => {
   

    return (
        <>
    
            <Nav className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
                <div className="sidebar-sticky"></div>
            <Nav.Item>
                <Nav.Link href="/home"><h4><RiDashboard2Fill/> My Dashboard</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="/profile"><h4><CgProfile/> My Profiles</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2"><h4><MdOutlineRedeem/> Redeem Voucher</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2"><h4><MdOutlineRedeem/> Gamelist</h4></Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2"><h4><MdLiveHelp/> Ask for help</h4></Nav.Link>
            </Nav.Item>
            </Nav>
          
        </>
        );
  };
  export default Sidebar