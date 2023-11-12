import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { FaPlus } from "react-icons/fa";

function Navbars() {
  const linkStyles = {
    color: "black",
    fontWeight: "bold",
    width: "130px",
    textDecoration: "none", // Remove default underline
  };

  const buttonStyles = {
    width: "204px",
    height: "44px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "15px",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyles = {
    backgroundColor: "#E8C33F",
  };

  const linkHoverStyles = {
    borderBottom: "2px solid yellow", // Yellow underline on hover
  };

  return (
    <Navbar
      bg="white"
      variant="dark"
      style={{ height: "60px", boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)" }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="147.93"
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Nav className="ml-auto justify-content-center">
          {/* Home */}
          <Nav.Link href="#" style={linkStyles}>
            Accueil
          </Nav.Link>
          {/* Announcements */}
          <Nav.Link href="#" style={linkStyles}>
            Annonces
          </Nav.Link>
          {/* Search */}
          <Nav.Link href="#" style={linkStyles}>
            Recherche
          </Nav.Link>
          {/* About */}
          <Nav.Link href="#" style={linkStyles}>
            À Propos
          </Nav.Link>
          {/* Contact */}
          <Nav.Link href="#" style={linkStyles}>
            Contact
          </Nav.Link>
        </Nav>
        {/* Custom Button with Icon and Hover Effect */}
        <Button
          variant="dark"
          style={buttonStyles}
          className="custom-button"
          onMouseOver={() =>
            (document.querySelector(".custom-button").style = buttonHoverStyles)
          }
          onMouseOut={() =>
            (document.querySelector(".custom-button").style = buttonStyles)
          }
        >
          <FaPlus /> Ajouter annonce
        </Button>
      </Container>
    </Navbar>
  );
}

export default Navbars;
