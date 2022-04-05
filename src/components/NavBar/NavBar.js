import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { LinkContainer } from 'react-router-bootstrap'

const NavBar = () => {

  return (
    <Navbar className='navBar' bg="light" expand="lg" fixed='top'>
  <Container>
    <LinkContainer to="/">
    <Navbar.Brand >Müssbags</Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto myNav">
        <LinkContainer to={`/category/carteras`}>
        <Nav.Link >Carteras</Nav.Link>
        </LinkContainer>
        <LinkContainer to={`/category/bolsos`}>
        <Nav.Link >Bolsos</Nav.Link>
        </LinkContainer>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar