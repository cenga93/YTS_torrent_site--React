import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Form, FormControl } from "react-bootstrap";

const Search = ({ Search }) => {
  return (
    <Form inline>
      <Form.Group>
        <FontAwesomeIcon icon={faSearch} size="sm" className="searchIcon" />
        <FormControl type="search" placeholder="Quick search" className="searchInput" onChange={Search} />
      </Form.Group>
    </Form>
  );
};

export default Search;
