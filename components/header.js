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
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  const handleScroll = () => {
    if (window.scrollY >90) {
      setSticky(true);
    } else if (window.scrollY < 90) {
      setSticky(false);
    }
  }

  return (
    <div className={`header${sticky ? ' sticky' : ''}`}>
    <Nav navbar>
      <Navbar light expand="md" >
      <Container>
        <Collapse isOpen={isOpen} navbar>
          <NavbarToggler className="m-auto" onClick={toggle} />
            <NavbarBrand xs={6} href="/">LOGO DISINI</NavbarBrand>
          
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/gamelist">Gamelist</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/login">Login</NavLink>
            </NavItem>
            
            <NavItem>
              <NavLink href="/signup">Signup</NavLink>
            </NavItem>
        </Collapse>
      </Container>
    </Navbar>

    </Nav>
    </div>    
  );
}

export default Header;
