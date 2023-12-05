import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Saumitra Tiwari </span>
            from <span className="purple"> Indore, India.</span>
            <br /> I am a final year student pursuing an MCA digree from Parul
            University.
            <br />
            Additionally, I am currently a free lencer at Indore, Madhya
            Pradesh.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Saumitra Tiwari</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
