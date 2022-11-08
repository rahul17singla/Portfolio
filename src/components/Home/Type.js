import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Software Developer",
                    "Java Developer",
                    "MERN Stack Developer",
                    "C++ Programmer",
                    "Competitive Programmer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 100,
                pauseFor: 800,
            }}
        />
    );
}

export default Type;