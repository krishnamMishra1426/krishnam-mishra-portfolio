import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Krishnam Mishra </span> 
            from <span className="purple">Indore, Madhya Pradesh, India.</span>
            <br />
            I am a Full Stack Developer specializing in the MERN stack.
            <br />
            I have completed my Bachelor of Engineering in Industrial & Production Engineering from <span className="purple"> Jabalpur Engineering College (JEC)</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Traveling
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "Building innovative solutions, one line of code at a time!"{" "}
          </p>
          <footer className="blockquote-footer">Krishnam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
