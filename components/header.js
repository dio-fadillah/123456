import React, { useState, useEffect } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY > 90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    // <div className={`header${sticky ? ' sticky' : ''}`}>
    <Nav className="m-auto" navbar>
      <Navbar light expand="md" >
      <Container>
        <Collapse isOpen={isOpen} navbar>
          <NavbarToggler onClick={toggle} />
          <Row>
            <NavbarBrand className="m-auto" href="/">ABCD</NavbarBrand>
          </Row>

          <Row>
            <NavItem>
              <NavLink href="/">Logo</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#feature">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#service">Login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#about">Signup</NavLink>
            </NavItem>
          </Row>
        </Collapse>
      </Container>
    </Navbar>

    </Nav>
    
    // </div>


    
  );
}

export default Header;
