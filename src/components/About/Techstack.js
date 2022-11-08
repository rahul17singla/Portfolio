import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiMongodb, DiCss3, DiJava } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai"
import { SiExpress } from "react-icons/si"


function Techstack() {
    return (
        <>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <CgCPlusPlus />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>C++</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJava />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>Java</div>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <AiOutlineHtml5 />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>HTML</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiCss3 />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>CSS</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiJavascript1 />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>JavaScript</div>
                </Col>
            </Row>
            <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                <Col xs={4} md={2} className="tech-icons">
                    <DiMongodb />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>MongoDB</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <SiExpress />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>Express.js</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiReact />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>React.js</div>
                </Col>
                <Col xs={4} md={2} className="tech-icons">
                    <DiNodejs />
                    <div style={{ fontSize: "0.3em", paddingTop: "0.3em", borderTop: "0.5px solid white" }}>Node.js</div>
                </Col>
            </Row>
        </>
    );
}

export default Techstack;