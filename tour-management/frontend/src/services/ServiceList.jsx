import ServiceCard from "./ServiceCard";
import "./service-card.css";
import { Col } from "reactstrap";
import img01 from "../assets/images/weather.png";
import img02 from "../assets/images/guide.png";
import img03 from "../assets/images/customization.png";

const serviceCardInfo = [
  {
    id: 1,
    title: "Card 1",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: img01,
  },
  {
    id: 2,
    title: "Card 2",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: img02,
  },
  {
    id: 3,
    title: "Card 3",
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    imgUrl: img03,
  },
];

export const ServiceList = () => {
  return (
    <>
      {serviceCardInfo.map((curElement, index) => {
        return (
          <Col lg="3" key={index}>
            <ServiceCard item={curElement} />
          </Col>
        );
      })}
    </>
  );
};

export default ServiceList;
