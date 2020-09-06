import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./About.module.css";
import Profile from "../../assets/samir.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const about = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Row className=" align-items-start p-2 my-details rounded">
                Hi there! I am <strong>&nbsp;Samir Singh</strong>
                <br />A passionate programmer  born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and mySQL as my tech stack.
                <br />
                In 2020, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                <br />
                Working on new technologies, i love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> 
                Along with that i love reading motivational books and sometimes i like to cook in my free time.
                <br />
                <Col className="d-flex justify-content-center flex-wrap">
                 

                  <div>
                    <a href="https://github.com/samirsinghpat82" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/samir-singh-b6146916b" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info">
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default about;