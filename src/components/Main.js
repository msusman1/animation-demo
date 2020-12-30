import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Cortex from "./images/Intro_Brain.svg";
function Main() {
  const animatetiming = {
    iterations: Infinity,
    duration: 2000,
    easing: "ease-in-out",
    direction: "alternate",
  };

  const Light = useWebAnimations({
    keyframes: {
      opacity: [0, 1, 1, 0, 1, 0, 0, 1],
    },
    timing: animatetiming,
  });

  const Brain = useWebAnimations({
    keyframes: {
      transform: ["translateY(-70px)"],
    },
    timing: animatetiming,
  });

  const Pop = useWebAnimations({ ...bounce });

  return (
    <div className="Main">
      <Container>
        <Row>
          <Col xs={12} lg={6} className="Main__center">
            <div className="Main__heading">
              <h1>CORTEX </h1>
              <h2>COPYWRITER</h2>
            </div>
            <div className="Main__para">
              Enhance your communications with psychology-based copywriting and
              UX writing
            </div>
            <div className="Main__button">
              <button ref={Pop.ref}>Send a message</button>
            </div>
          </Col>

          <Col lg={6} xs={12} sm={12} md={6}>
            <div className="Main__right">
              <div className="Main__images">
                <img
                  className="Main__machine"
                  src="http://salman-project4b.surge.sh/images/Intro_Featured_Image_Empty.svg?fbclid=IwAR1Y5hswrINQYRg71oEe7f5sBHok8uTD2N0NEdZzOqgXbU44ozpSJGIhZIE"
                  alt="machine"
                />
                <img
                  className="Main__light"
                  ref={Light.ref}
                  alt = "light"
                  src="http://salman-project4b.surge.sh/images/Intro_Front_Layer.svg?fbclid=IwAR1srwuHFS7HB6DDHKrWRygo7rUHMYy4Tj3RYLoFf-Oz3Il8cYHISwGUwZE"
                ></img>
                <img
                  ref={Brain.ref}
                  className="Main__cortex"
                  src={Cortex}
                  alt="brain"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Main;
