import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar} from 'react-bootstrap';
import useWebAnimations from "@wellyshen/use-web-animations";


function Header() {

    const animateTiming = {
        duration: 2000,
        iterations: Infinity,
        easing: "ease-in-out",
        direction: "alternate"

    };

    const Heading = useWebAnimations({
        keyframes: {
            color: ["aqua", "green", "orange"]
        },
        timing: animateTiming
    });

    return (
        <div className="Header">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Nav className="mx-auto">

                    <h5 ref={Heading.ref}>Switch Experience</h5>

                </Nav>

            </Navbar>
        </div>
    )
}

export default Header
