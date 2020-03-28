import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav, FormControl, Container } from "react-bootstrap";

/* imports */
import logo from "../../assets/img/logo/logo.svg";
import "./header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  render() {
    return (
      <header>
        <Container>
          <Navbar collapseOnSelect expand="md" variant="dark">
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Form inline>
                  <Form.Group controlId="formBasicEmail">
                    <FontAwesomeIcon
                      icon={faSearch}
                      size="sm"
                      className="searchIcon"
                    />
                    <FormControl
                      type="search"
                      placeholder="Quick search"
                      className="searchInput"
                    />
                  </Form.Group>
                </Form>

                <Nav.Link href="#1">Home</Nav.Link>
                <Nav.Link href="#2" className="link_highlight">
                  4K
                </Nav.Link>
                <Nav.Link href="#3">Browse Movies</Nav.Link>
                <Nav.Link href="#4" className="login_link">
                  Login
                </Nav.Link>
                <span className="vertical_line"></span>
                <Nav.Link href="#5" className="register_link">
                  Register
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </header>
    );
  }
}
export default Header;
