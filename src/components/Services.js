import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Service1 from "./images/service1.svg";
import Service2 from "./images/service2.svg";
import Service3 from "./images/service3.svg";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const animateTiming = {
    duration:1000,
    iterations:Infinity,
    direction:"alternate",
    easing:"ease-in-out"
  };

  const move = useWebAnimations({
    keyframes:{
      transform:["translate(0,40px)","scale(1.05)"],
      // transform:["scale(1.05)"]

    },
    timing:animateTiming
  });

  const move1 = useWebAnimations({
    keyframes:{
      transform:["translate(0,40px)","scale(1.05)"],

    },
    timing:animateTiming
  });

  const move3 = useWebAnimations({
    keyframes:{
      transform:["translate(0,40px)","scale(1.05)"],
    },
    timing:animateTiming
  });
  

  return (

    <div className="Services">
      <Container>
        <Row>
          <Col lg={6} sm={12}>
            <div data-aos="fade-right" className="Services__section1image">
              <img ref = {move.ref} src={Service1} alt="service1" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div data-aos = "fade-up" className="Services__section1text ">
              <h1>UX Writing</h1>
              <p>
                I develop clear and useful text in product interfaces to help
                users reach a specific goal, whether that's completing a form or
                tapping a button. This includes every type of contehnt from
                on-screen help systems, user onboarding and in-app messages to
                push notifications and tooltips.
              </p>
              <div className="Services__taglist">
                <span>.Microcopy</span>
                <span>.Taxonomy & Labeling</span>
                <span>.Chatbots</span>
                <span>.User Research</span>
                <span>.Content Style Guide</span>
                <span>.User Testing </span>
                <span>.Design Principles</span>
                <span>.Prototype</span>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} sm={12}>
            <div data-aos = "fade-up" className="Services__section1text ">
              <h1>Website Copywriting</h1>
              <p>
                I develop clear and useful text in product interfaces to help
                users reach a specific goal, whether that's completing a form or
                tapping a button. This includes every type of contehnt from
                on-screen help systems, user onboarding and in-app messages to
                push notifications and tooltips.
              </p>
              <div className="Services__taglist">
                <span>.Microcopy</span>
                <span>.Taxonomy  Labeling</span>
                <span>.Chatbots</span>
                <span>.User Research</span>
                <span>.Content Style Guide</span>
                <span>.User Testing </span>
                <span>.Design Principles</span>
                <span>.Prototype</span>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div data-aos="fade-left" className="Services__section1image">
              <img ref = {move1.ref} src={Service2} alt="service1" />
            </div>
          </Col>
        </Row>

        <Row>
          <Col lg={6} sm={12}>
            <div data-aos="fade-right" className="Services__section1image">
              <img ref = {move3.ref} src={Service3} alt="service1" />
            </div>
          </Col>
          <Col lg={6} sm={12}>
            <div data-aos = "fade-up" className="Services__section1text ">
              <h1>Content Writing</h1>
              <p>
                I develop clear and useful text in product interfaces to help
                users reach a specific goal, whether that's completing a form or
                tapping a button. This includes every type of contehnt from
                on-screen help systems, user onboarding and in-app messages to
                push notifications and tooltips.
              </p>
              <div className="Services__taglist">
                <span>.Microcopy</span>
                <span>.Taxonomy & Labeling</span>
                <span>.Chatbots</span>
                <span>.User Research</span>
                <span>.Content Style Guide</span>
                <span>.User Testing </span>
                <span>.Design Principles</span>
                <span>.Prototype</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Services;
