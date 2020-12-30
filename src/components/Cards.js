import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import useWebAnimations from "@wellyshen/use-web-animations";
import Aos from "aos";
import chatbox from "./images/chatbot.jpg"
import speedpix from "./images/speedpix.jpg"
import scale from "./images/startscale.jpg";
import "aos/dist/aos.css";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";




function Cards() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const animatetiming = {
    iterations:Infinity,
    duration : 2000,
    easing: "ease",
    direction: "alternate"
};

  const shake1 = useWebAnimations({
    keyframes:{
      transform:["scale(1.05)"]
    },
    timing:animatetiming,
    
  });

  const shake2 = useWebAnimations({
    keyframes:{
      transform:["scale(1.05)"]
    },
    timing:animatetiming,
    
  });

  const shake3 = useWebAnimations({
    keyframes:{
      transform:["scale(1.05)"]
    },
    timing:animatetiming,
    
  });

  return (
    <div className="Cards">
            <h1>Useful UX</h1>

      <Container>
        <Row>
          <Col  ref = {shake1.ref}  lg={4} md = {12} sm = {12} xs = {12}>
            <Card data-aos = "fade-right" className = "Cards__box" style={{ width: "auto" }}   >
              <Card.Img src={chatbox} height = "220px" />
              <Card.Body>
                <Card.Title>Scripted ChatBot </Card.Title>
                <Card.Text>
                  Conversation design guidelines such as chatbot personality,
                  flowcharts, and scripts helped me convert complex mattress
                  fitting data into simple dialogue for a scripted chatbot that
                  guides customers in choosing the right mattress for their
                  weight range.
                </Card.Text>
                <Button variant="primary">See More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col ref = {shake2.ref}  lg={4} md = {12} sm = {12} xs = {12}>
            <Card data-aos = "fade-up" className = "Cards__box" style={{ width: "auto" }}>
              <Card.Img src={speedpix} height = "220px" />
              <Card.Body>
                <Card.Title>User OnBoarding </Card.Title>
                <Card.Text>
                  Here is the first screen in an onboarding process I wrote for
                  a SaaS product. To create a smooth introduction to the product
                  and improve conversion rates, I used reassuring details and
                  informative labels to clear possible uncertainties and reduce
                  .
                </Card.Text>
                <Button variant="primary">See More</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col ref = {shake3.ref} lg={4} md = {12} sm = {12} xs = {12} >
            <Card data-aos = "fade-left" className = "Cards__box" style={{ width: "auto" }}>
              <Card.Img src= {scale} height = "220px" />
              <Card.Body>
                <Card.Title>Scripted ChatBot </Card.Title>
                <Card.Text>
                  As the sole UX writer on a product team building the 'Uber of
                  marketing', I wrote and designed web copy, microcopy,
                  notifications, forms, FAQs, sales video script, automated
                  emails, signup page, login page, pricing page, checkout page,
                  .
                </Card.Text>
                <Button variant="primary">See More</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Cards;
