import React from "react";
import "../styles/home.css";
import Subtitle from "../shared/Subtitle";

import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero_img_01.jpeg";
import heroImg02 from "../assets/images/hero_img_02.JPG";
import eventImg from "../assets/images/world.png";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/af_experience.png";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedEventList from "../components/featuredEvents/FeaturedEventList";
import PintrestGallery from "../components/image-gallery/PintrestGallery";

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
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptas ducimus praesentium temporibus dicta similique quas
                  laboriosam veniam aperiam non? Odit sed laudantium magnam nemo
                  laborum? Veritatis at velit fugiat neque, ad temporibus
                  mollitia distinctio odio magnam, minus quas eaque animi culpa
                  vitae itaque a dolorem eveniet necessitatibus incidunt
                  sapiente consectetur!
                </p>
              </div>
            </Col>

            <Col lg="2">
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt="" autoPlay loop muted />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ============= hero section end============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h5 className="services__subtitle">What we offer?</h5>
              <h2 className="services__title">
                We offer best and affordable services
              </h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>
      {/* ============= hero section end============= */}
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <Subtitle subtitle={"Explore"} />
            <h2 className="featured__event-title">Our Featured Events</h2>
          </Col>
          <FeaturedEventList />
        </Row>
      </Container>
      {/* ============= hero section end============= */}
      {/* ============= experience section start============= */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With all our experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. At,
                  iste. <br />
                  Lorem ipsum dolor sit amet.
                </p>
                <div className="counter__wrapper d-flex align-items-center gap-5">
                  <div className="counter__box">
                    <span>12k+</span>
                    <h6>Successful events</h6>
                  </div>
                  <div className="counter__box">
                    <span>2k+</span>
                    <h6>Happy clients</h6>
                  </div>
                  <div className="counter__box">
                    <span>5+</span>
                    <h6>Years of experience</h6>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="af_experience" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= experience section end============= */}

      {/* ============= gallery section start============= */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallery"} />
              <h2 className="gallery__title">
                Visit our customers event gallery
              </h2>
            </Col>
            <Col lg="12">
              <PintrestGallery />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ============= gallery section end============= */}
    </>
  );
};

export default Home;
