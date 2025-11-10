import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Projects/image.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hello! I'm <b className="purple"> Krishnam Mishra </b>, a passionate <b className="purple"> MERN Stack Developer </b> with a deep love for programming. Over the years, I've honed my skills in various languages and frameworks, allowing me to create seamless and efficient web applications
              <br />
              <br />I am fluent in classics like<br/><br/>
              <i>
                <b>Frontend Development:<b className="purple">React.js, Next.js, React Native, HTML, CSS, Tailwind CSS, JavaScript.</b> </b><br/><br/>
                <b>Backend Development:<b className="purple">  Node.js, Express.js, NestJS.</b> </b><br/><br/>
                <b>Database Management:<b className="purple">  MongoDB (NoSQL) ,Mongodb Atlas.</b></b><br/><br/>
                <b>Tools & Platforms: <b className="purple">Git, GitHub, VS Code, Postman, AWS, Firebase.</b></b>
              </i>
              <br />
              <br />
              I enjoy tackling challenging problems and continuously learning new technologies to enhance my skill set. Whether it's building responsive user interfaces or developing robust server-side applications, I am committed to delivering high-quality solutions.
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar ">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/krishnammishra123"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/KrishnamMishr15?t=QZaWun-bOCvzUh9K7M9BdQ&s=09"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/krishnam-mishra-5618b5199/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mishrakrishnam?igsh=OTRlejI4d2lxeHF3"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
