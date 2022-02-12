import React from 'react';
import { Container, Navbar, NavDropdown, Form,Button, Nav, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import image from '../images/Rectangle.jpg'

const Header = () => {
  return (
    <Navbar className='navbar_container' expand="lg">
        <Container>
            <Navbar.Brand href="#home" style={{color: 'white', fontWeight: 'bold'}}>LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse>
                <Nav>
                    <Nav.Link >
                        <Link className='nav-link' to="/home">Home</Link> 
                    </Nav.Link>
                    <Nav.Link >
                        <Link className='nav-link' to="/about">About us</Link> 
                    </Nav.Link>
                    <Nav.Link >
                        <Link className='nav-link' to="/portfolio">Portfolio</Link> 
                    </Nav.Link>
                    <Nav.Link >
                        <Link className='nav-link' to="/news">News</Link>    
                    </Nav.Link>
                    <Nav.Link >
                        <div style={{width: '131px', height: '100%', borderRadius: '7px', backgroundColor: '#FA9021'}}>
                            <Link style={{textAlign: 'center'}} className='nav-link' to="/contact">Contact us</Link>    
                        </div>                    
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            
        </Container>
        
    </Navbar>
  );
};

export default Header;
