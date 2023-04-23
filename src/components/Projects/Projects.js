import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Bloodbank from "../../Assets/bloodbank.png";
import ShareMeApp from "../../Assets/ShareMe.png";
import Coursebundler from "../../Assets/coursebundler.png";
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
                <Row
                    style={{ justifyContent: "center", paddingBottom: "10px" }}
                >
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Bloodbank}
                            title="Blood Bank Assistant"
                            description="It is a client site application used for the management of the Blood Bank of a Hospital. It is made with the use of technologies like Core Java and JavaFx. SceneBuilder was used for the development of GUI. For saving the data, MySQL database was used. Data can also be exported to MS Excel from the specific application pages."
                            ghLink="https://github.com/rahul17singla/Blood-Bank-Assistant"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={ShareMeApp}
                            title="ShareMe - Social Media App"
                            description="ShareMe is a Full Stack Social Media Application where Users can login using their Google Account and upload images. Google OAuth and JWT used for authentication and easy Login. The frontend was developed using React.js and Sanity.io used for backend. Includes features such as Liking, Saving, Commenting, and Downloading Posts. "
                            ghLink="https://github.com/rahul17singla/Blood-Bank-Assistant"
                            demoLink="https://rs1710-share-me.netlify.app/"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={Coursebundler}
                            title="CourseBundler - Learning Platform"
                            description="CourseBundler is a Full Stack Web Application where Users can login using their credentials and can pay for access to premium computer science courses. Frontend is developed using React.js, ChakraUI and /Redux. For backend Node.js and Express.js and database is managed by MongoDB. Payment Gateway built using Razorpay. Admin Dashboard build with help of Chart.js and provides the functionality of real time update on statistics of number of users, subscriptions and course views."
                            ghLink="https://github.com/rahul17singla/CourseBundlerClient"
                            demoLink="https://course-bundler-client.vercel.app/"
                        />
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
