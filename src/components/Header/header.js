import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Nav, FormControl, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/img/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Container className="header_container">
        <Navbar collapseOnSelect expand="lg" variant="dark">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <span className="moviesTitle d-none d-md-block d-lg-none">HD movies at the smallest file size.</span>

          <div className="ml-auto toggleDiv">
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="searchIcon" />
            <Navbar.Toggle aria-controls="basic-navbar-nav" disabled>
              <Link to="/" className="userIcon">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14" role="img" viewBox="0 0 448 512">
                  <path
                    fill="currentColor"
                    d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                  ></path>
                </svg>
              </Link>
            </Navbar.Toggle>
          </div>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Form inline>
                <Form.Group>
                  <FontAwesomeIcon icon={faSearch} size="sm" className="searchIcon" />
                  <FormControl type="search" placeholder="Quick search" className="searchInput" />
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
};

export default Header;
