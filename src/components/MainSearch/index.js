import React from "react";
import { Wrapper } from "..";
import { Col, Row, Form, Button } from "react-bootstrap";
import "./MainSearch.scss";

const MainSearch = ({ className }) => {
  return (
    <Wrapper className={className}>
      <Col lg={8} className="d-none  d-lg-block d-md-none">
        <Form>
          <Row>
            <Col lg={12}>
              <h4 className="mb-3">Search Term</h4>
            </Col>
            <Col lg={10}>
              <Form.Control />
            </Col>
            <Col lg={2} className="pl-2">
              <Button variant="primary" type="submit" className="search_btn">
                Search
              </Button>
            </Col>
            <Col lg={10} className="mt-3">
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Quality:</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Genre:</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Rating:</Form.Label>
                  <Form.Control as="select">
                    <option>All</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Order By:</Form.Label>
                  <Form.Control as="select">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Control>
                </Form.Group>
              </Form.Row>
            </Col>
          </Row>
        </Form>
      </Col>
    </Wrapper>
  );
};

export default MainSearch;
