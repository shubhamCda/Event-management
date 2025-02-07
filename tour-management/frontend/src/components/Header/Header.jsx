import React from "react";
import { Container, Row, Button } from "reactstrap";
import { NavLink, Link } from "react-router-dom";

import logo from "../../assets/images/logo/AF_logo.png";
import "../Header/Header.css";

const nav_links = [
  {
    id: 0,
    path: "/home",
    display: "Home",
  },
  {
    id: 1,
    path: "/events",
    display: "Events",
  },
  {
    id: 2,
    path: "/ticket",
    display: "Tickets",
  },
];

const Header = () => {
  
  return (
    <>
      <header className="header sticky__header">
        <Container>
          <Row>
            <div className="nav-wrapper d-flex align-items-center justify-content-between">
              {/* =============logo============= */}
              <div className="logo">
                <img src={logo} alt="AF-logo" />
              </div>
              {/* =============logo============= */}

              {/* =============menu start============= */}
              <div className="navigation">
                <ul className="menu d-flex align-items-center gap-5">
                  {nav_links.map((item) => {
                    return (
                      <>
                        <li className="nav__item" key={item.id}>
                          <NavLink
                            to={item.path}
                            className={(navClass) =>
                              navClass.isActive ? "active__link" : ""
                            }
                          >
                            {item.display}
                          </NavLink>
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
              {/* =============menu end============= */}
              <div className="nav__right d-flex align-items-center gap-4">
                <div className="nav__btns d-flex align-items-center gap-4">
                  <Button className="btn secondary__btn">
                    <Link to="/login">Login</Link>
                  </Button>
                  <Button className="btn primary__btn">
                    <Link to="/register">Register</Link>
                  </Button>
                </div>
                <span className="mobile__menu">
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </Row>
        </Container>
      </header>
    </>
  );
};

export default Header;
