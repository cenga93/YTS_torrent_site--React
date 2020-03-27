import React from "react";
import { Navbar, Form, Button, FormControl, Container } from "react-bootstrap";

/* imports */
import logo from "../../assets/img/logo/logo.svg";
import "./header.scss";

const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Form inline className="ml-auto">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
          </Form>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header;
