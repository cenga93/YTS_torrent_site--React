import React from "react";
import { Wrapper } from "..";
import { Col, Row, Form, Button } from "react-bootstrap";
import { values } from "../../api/values";
import "./MainSearch.scss";

const MainSearch = ({ className, search, handleInput, search_field }) => {
  return (
    <Wrapper className={className}>
      <Col lg={8} className="d-none  d-lg-block d-md-none">
        <Form onSubmit={search}>
          <Row>
            <Col lg={12}>
              <h4 className="mb-3">Search Term</h4>
            </Col>
            <Col lg={10}>
              <Form.Control onChange={handleInput} name="search_field" value={search_field} className="search_field" />
            </Col>
            <Col lg={2} className="pl-2">
              <Button variant="primary" type="submit" className="search_btn">
                Search
              </Button>
            </Col>
            <Col lg={10} className="mt-3">
              <Form.Row>
                {values.map((item, index) => {
                  return (
                    <Form.Group as={Col} controlId="formGridState" key={index}>
                      <Form.Label>{item.name}:</Form.Label>
                      <Form.Control as="select" onChange={handleInput} name={item.input_name}>
                        <option value="">All</option>
                        {item.option.map((val, i) => {
                          return (
                            <option key={i} value={val.includes("+") ? val.slice(0, -1) : val}>
                              {val.charAt(0).toUpperCase() + val.slice(1)}
                            </option>
                          );
                        })}
                      </Form.Control>
                    </Form.Group>
                  );
                })}
              </Form.Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Wrapper>
  );
};

export default MainSearch;
