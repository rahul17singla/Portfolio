import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiFillInstagram, } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
    let date = new Date();
    let year = date.getFullYear();
    return (
        <Container fluid className="footer">
            <Row>
                <Col md="4" className="footer-copywright">
                    <h3>Developed by Rahul Singla</h3>
                </Col>
                <Col md="4" className="footer-copywright">
                    <h3>Copyright © {year} RS</h3>
                </Col>
                <Col md="4" className="footer-body">
                    <a
                        href="https://www.github.com/rahul17singla"
                        style={{ color: "white", fontSize: "1.5em", marginTop: "0.5em", textAlign: "center" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillGithub />
                    </a>
                    <a
                        href="https://www.instagram.com/rahul17singla"
                        style={{ color: "white", fontSize: "1.5em", marginTop: "0.5em", textAlign: "center" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiFillInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rahul-1710-singla"
                        style={{ color: "white", fontSize: "1.5em", marginTop: "0.5em", textAlign: "center" }}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;