import React,{useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import person1 from "./images/person1.svg";
import person2 from "./images/person2.svg";
import person3 from "./images/person3.svg";
import person4 from "./images/person4.svg";
import person5 from "./images/person5.svg";
import person6 from "./images/person6.svg";

function Review() {

    useEffect(() => {
        Aos.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
        });
      }, []);

  return (
    <div className="Review">
      <Container>
        <Row>
          <Col  data-aos = "fade-right" lg={6} md = {12} sm={12} xs = {12}>
            <div className="Review__cardleft">
              <div className="Review__cardleftimg">
                <img src={person1} alt="" />
              </div>
              <div className="Review__cardleftcontent">
                  <div className = "Review__cardleftcontentheading">
                <h5>Karl Van Lieshout</h5>
                <p>Owner & Operator – Ausbeds</p>
                </div>
                <div className = "Review__cardleftcontentbelow">
                    <h4>"..innovative"</h4>
                    <h4>"..seamless UX"</h4>
                    <h4>"..more online sales"</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos = "fade-right" lg={6} md = {12} sm={12} xs = {12}>
            <div className="Review__cardleft">
              <div className="Review__cardleftimg">
                <img src={person2} alt="" />
              </div>
              <div className="Review__cardleftcontent">
                  <div className = "Review__cardleftcontentheading">
                <h5>Karl Van Lieshout</h5>
                <p>Owner & Operator – Ausbeds</p>
                </div>
                <div className = "Review__cardleftcontentbelow">
                    <h4>"..innovative"</h4>
                    <h4>"..seamless UX"</h4>
                    <h4>"..more online sales"</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos = "fade-right" lg={6} md = {12} sm={12} xs = {12}>
            <div className="Review__cardleft">
              <div className="Review__cardleftimg">
                <img src={person3} alt="" />
              </div>
              <div className="Review__cardleftcontent">
                  <div className = "Review__cardleftcontentheading">
                <h5>Karl Van Lieshout</h5>
                <p>Owner & Operator – Ausbeds</p>
                </div>
                <div className = "Review__cardleftcontentbelow">
                    <h4>"..innovative"</h4>
                    <h4>"..seamless UX"</h4>
                    <h4>"..more online sales"</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos = "fade-left" lg={6} md = {12} sm={12} xs = {12}>
            <div className="Review__cardleft">
              <div className="Review__cardleftimg">
                <img src={person4} alt="" />
              </div>
              <div className="Review__cardleftcontent">
                  <div className = "Review__cardleftcontentheading">
                <h5>Karl Van Lieshout</h5>
                <p>Owner & Operator – Ausbeds</p>
                </div>
                <div className = "Review__cardleftcontentbelow">
                    <h4>"..innovative"</h4>
                    <h4>"..seamless UX"</h4>
                    <h4>"..more online sales"</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos = "fade-left" lg={6} md = {12} sm={12} xs = {12}>
            <div className="Review__cardleft">
              <div className="Review__cardleftimg">
                <img src={person5} alt="" />
              </div>
              <div className="Review__cardleftcontent">
                  <div className = "Review__cardleftcontentheading">
                <h5>Karl Van Lieshout</h5>
                <p>Owner & Operator – Ausbeds</p>
                </div>
                <div className = "Review__cardleftcontentbelow">
                    <h4>"..innovative"</h4>
                    <h4>"..seamless UX"</h4>
                    <h4>"..more online sales"</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col data-aos = "fade-left" lg={6} md = {12} sm={12} xs = {12}>
            <div className="Review__cardleft">
              <div className="Review__cardleftimg">
                <img src = {person6} alt="" />
              </div>
              <div className="Review__cardleftcontent">
                  <div className = "Review__cardleftcontentheading">
                <h5>Karl Van Lieshout</h5>
                <p>Owner & Operator – Ausbeds</p>
                </div>
                <div className = "Review__cardleftcontentbelow">
                    <h4>"..innovative"</h4>
                    <h4>"..seamless UX"</h4>
                    <h4>"..more online sales"</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}

export default Review;
