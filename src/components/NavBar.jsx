import React from 'react'
import CartWidget from './CartWidget'/* 
import Button from 'react-bootstrap/Button'; */
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavBar = () => {
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <img src="images/logo/havaianas-logo-2-1-2048x404.png" alt="Logo" width="auto" height="50"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Mujer</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Hombre</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Niño</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <CartWidget/>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar