import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bloodbank from "../../Assets/bloodbank.png";
// import leaf from "../../Assets/Projects/leaf.png";
// import emotion from "../../Assets/Projects/emotion.png";
// import editor from "../../Assets/Projects/codeEditor.png";
// import suicide from "../../Assets/Projects/suicide.png";
// import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
    return (
        <Container fluid className="project-section">
            <Particle />
            <Container>
                <h1 className="project-heading">
                    My Recent <strong className="purple">Works </strong>
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Bloodbank}
                            title="Blood Bank Assistant"
                            description="This is a client site application used for the management of the Blood Bank of a Hospital. It is made with the use of technologies like Core Java and JavaFx. SceneBuilder was used for the development of GUI. For saving the data, MySQL database was used. Data can also be exported to MS Excel from the specific application pages."
                            ghLink="https://github.com/rahul17singla/Blood-Bank-Assistant"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;