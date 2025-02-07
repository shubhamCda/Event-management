import React from "react";
import "../styles/home.css";
import Subtitle from "../shared/Subtitle";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero_img_01.jpeg";
import heroImg02 from "../assets/images/hero_img_02.JPG";
import eventImg from "../assets/images/world.png";
import heroVideo from "../assets/images/hero-video.mp4";

const Home = () => {
  return (
    <>
      {/* ============= hero section start============= */}

      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Happiness comes at a cost of smile"} />
                  <img src={eventImg} alt="event-img" />
                </div>
                <h1>
                  We will help you to create long lasting{" "}
                  <span className="highlight">memories</span>{" "}
                </h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ducimus praesentium temporibus dicta similique quas laboriosam veniam aperiam non? Odit sed laudantium magnam nemo laborum? Veritatis at velit fugiat neque, ad temporibus mollitia distinctio odio magnam, minus quas eaque animi culpa vitae itaque a dolorem eveniet necessitatibus incidunt sapiente consectetur!</p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" autoPlay loop muted />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= hero section end============= */}
    </>
  );
};

export default Home;
