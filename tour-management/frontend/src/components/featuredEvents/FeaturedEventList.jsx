import React from "react";
import eventData from "../../assets/data/tours";
import EventCard from "../../shared/EventCard";
import { Col } from "reactstrap";

const FeaturedEventList = () => {
  return (
    <>
      {eventData?.map((data) => {
        return (
          <Col lg="3" className="mb-4" key={data.id}>
            <EventCard element={data} />
          </Col>
        );
      })}
    </>
  );
};

export default FeaturedEventList;
