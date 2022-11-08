import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{ textAlign: "justify" }}>
                        Hi Everyone, I am <span className="purple">Rahul Singla </span>
                        from <span className="purple"> Chandigarh, India.</span>
                        <br />I am a student pursuing B.E. in Computer Science and Engineering at <br />UIET, Panjab University.
                        <br />
                        <br />
                        Apart from coding, some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight /> Playing Cricket
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Listening Music
                        </li>
                        <li className="about-activity">
                            <ImPointRight /> Study Space Explorations
                        </li>
                    </ul>

                    <p style={{ color: "rgb(155 126 172)" }}>
                        "Everything will end beautifully if you make an effort!"{" "}
                    </p>
                    <footer className="blockquote-footer">Rahul</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;