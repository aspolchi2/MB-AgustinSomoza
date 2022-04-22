import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import { LinkContainer } from "react-router-bootstrap";
import { coverData } from "../../data/coverData";

const NavBar = () => {
  return (
    <Navbar className="navBar" bg="light" expand="lg" fixed="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Müssbags</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto myNav">
            {coverData.map((item, i) => (
              <LinkContainer key={i} to={`/category/${item.name}`}>
                <Nav.Link>{item.name}</Nav.Link>
              </LinkContainer>
            ))}
            <CartWidget />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
