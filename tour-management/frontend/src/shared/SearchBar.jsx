import React, { useRef } from "react";
import { Col, Form, FormGroup } from "reactstrap";
import "./search-bar.css";

const SearchBar = () => {
  const locationRef = useRef('');
  const distanceRef = useRef(0);

  const searchHandler = () => {
    const location = locationRef.current.value;
    const distance = distanceRef.current.value;

    if (location === '' || distance === '') {
      alert('Please fill all fields!')
    }
  };

  return (
    <>
      <Col lg="12">
        <div className="search__bar">
          <Form className="d-flex align-items-center gap-4">
            <FormGroup className="d-flex gap-3 form__group form__group-fast">
              <span>
                <i className="ri-map-pin-fill"></i>
              </span>
              <div>
                <h6>Location</h6>
                <input
                  type="text"
                  placeholder="Your current location?"
                  ref={locationRef}
                />
              </div>
            </FormGroup>
            <FormGroup className="d-flex gap-3 form__group form__group-last">
              <span>
                <i className="ri-pin-distance-fill"></i>
              </span>
              <div>
                <h6>Distance</h6>
                <input
                  type="number"
                  placeholder="Distance k/m"
                  ref={distanceRef}
                />
              </div>
            </FormGroup>
            <span className="search__icon" type="submit" onClick={searchHandler}>
              <i className="ri-search-eye-line"></i>
            </span>
          </Form>
        </div>
      </Col>
    </>
  );
};

export default SearchBar;
