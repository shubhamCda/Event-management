import React from "react";
import { Col, Form, FormGroup } from "reactstrap";

const SearchBar = () => {
  return (
    <>
      <Col lg="12">
        <div className="search__bar">
          <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i class="ri-map-pin-fill"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input type="text"placeholder="Your current location?" />
              </div>
            </FormGroup>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default SearchBar;
