import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Wrapper } from "..";
import "./Footer.scss";

const navigation = [
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "DMCA",
    link: "/dmca",
  },
  {
    name: "API",
    link: "/api",
  },
  {
    name: "RSS",
    link: "/rss-guide",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Browse Movies",
    link: "/browse-movies",
  },
  {
    name: "Requests",
    link: "/login",
  },
  {
    name: "Login",
    link: "/login",
  },
];

const Footer = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Row className="align-items-center">
        <p className="m-0 copy">YTS &copy; 2011 - 2020</p>
        <ul className="first_list m-0">
          {navigation.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.link}>{item.name}</Link>
              </li>
            );
          })}
        </ul>
      </Row>
      <Row className="m-0">
        <ul className="second_list">
          <li>
            <a href="https://www.google.rs">EZTV</a>
          </li>
          <li>
            <a href="https://vpn.ht/yts">YTS VPN</a>
          </li>
        </ul>
      </Row>
      <Row>
        <p>
          By using this site you agree to and accept our <Link to="/terms">User Agreement</Link>, which can be read <Link to="/terms">here</Link>.
        </p>
      </Row>
    </Wrapper>
  );
};
export default Footer;
