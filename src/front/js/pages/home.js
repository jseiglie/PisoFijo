import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import ButtonOwn from "../component/Button.js";
import SearchMenu from "../component/SearchMenu.js";
import banner from "../../img/banner.png";
import servMap from "../../img/servMap.png";
import servAR from "../../img/servAR.png";
import servRoom from "../../img/servRoom.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="searchSection text-center mt-5">
        <SearchMenu />
      </div>
      <div className="container">
        <div
          className="bgInfo"
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Row className="section-margin">
            <Col xs={12} md={4}>
              <div className="card-body smDetails">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum{" "}
                </p>
                <ButtonOwn title={"More"} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card-body smDetails">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <ButtonOwn title={"More"} />
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="card-body smDetails">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
                <ButtonOwn title={"More"} />
              </div>
            </Col>
          </Row>
        </div>
      </div>


      <div className="servSection">
        <div className="container ">
        <Row xs={8} md={8} lg={8} className="infoCard">
          <Col md={2}></Col>

          <Col xs={12} md={4}>
            <div className="container ">
              <img className="imgMap" src={`${servMap}`}></img>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <p className="smDetails ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </Col>
          <Col md={2}></Col>
        </Row>
        <Row>
          <Col md={1}></Col>
          <Col md={5}>
            <div className="container moreDetailHead">
              <div
                style={{
                  backgroundImage: `url(${servRoom})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  border: '2px solid #F7BE53'
                }}
              >
                <p className="smDetailsV pTextDetails">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum
                </p>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="container smDetailsV moreDetailHead infoCard">
              <div className="text-center">
                <img className="imgAR" src={`${servAR}`}></img>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
              </p>
            </div>
          </Col>
          <Col md={1}> </Col>
        </Row>
      </div>
      </div>
    </>
  );
};
