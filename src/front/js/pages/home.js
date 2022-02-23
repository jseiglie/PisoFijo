import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import SearchMenu from "../component/SearchMenu.js";
import banner from "../../img/banner.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="text-center mt-5">
        <SearchMenu />
      </div>
      <div className="container">
        <div
          style={{
            backgroundImage: `url(${banner}`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          >
          <Row className="section-margin">
          <Col xs={12} md={4}>
            <div className="card-body smDetails">
              <p>lorem ipsum </p>
              <ButtonOwn title={"More"} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card-body smDetails">
              <p>lorem ipsum </p>
              <ButtonOwn title={"More"} />
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div className="card-body smDetails">
              <p>lorem ipsum </p>
              <ButtonOwn title={"More"} />
            </div>
          </Col>
      </Row>
        </div>
        </div>
    </>
  );
};
