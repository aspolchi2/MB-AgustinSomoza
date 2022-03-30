import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="/">Mussbags</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/carteras">Carteras</Nav.Link>
        <Nav.Link href="/bolsos">Bolsos</Nav.Link>
        <CartWidget/>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default NavBar