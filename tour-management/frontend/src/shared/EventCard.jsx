import React from "react";
import { Link } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import "./event-card.css";

export const EventCard = ({ element }) => {
  const { id, title, photo, city, featured, avgRating, reviews } = element;
  return (
    <div className="event__card card" >
      <Card>
        <div className="event__img">
          <img src={photo} alt={title} />
          {/* <span>Featured Events</span> */}
        </div>
      </Card>

      <CardBody>
        <div className="card__top d-flex align-item-center justify-content-between">
          <span className="event__location d-flex align-item-center gap-1">
            <i className="ri-map-pin-fill">{city}</i>
          </span>
          <span className="event__rating d-flex align-item-center gap-1">
            <i className="ri-star-fill">{avgRating}</i>
          </span>
        </div>
        <h5 className="event__title">
          <Link to={`/event/${id}`}>{title}</Link>
        </h5>
        <div className="event__location d-flex align-item-center justify-content-between mt-3">
          
        </div>
      </CardBody>
    </div>
  );
};

export default EventCard;
