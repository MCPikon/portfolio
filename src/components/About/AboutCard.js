import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola a todos, Soy <span className="purple">Javier Picón </span>
            y actualmente vivo en <span className="purple"> Madrid, España.</span>
            <br />He estudiado Desarrollo de Aplicaciones Web, soy programador junior
            especializado en Java, también soy Técnico de Sistemas Microinformáticos
            <br />
            <br />
            Aparte de programar, ¡hay otras cosas que me gusta hacer!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar a Videojuegos
            </li>
            <li className="about-activity">
              <ImPointRight /> Montar en Skate
            </li>
            <li className="about-activity">
              <ImPointRight /> Ver Series y Películas
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
