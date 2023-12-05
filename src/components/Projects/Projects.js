import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/chatify.png";

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
          <Col md={4} classN ame="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="hepling-hand-hospital-app"
              description="hepling-hand-hospital-app
              A hospital containing hospital details, blood banks details, medical labs, ect."
              ghLink="https://github.com/SAUMITRATIWARI/hepling-hand-hospital-app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
