import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import proyectoaprobador from "../../Assets/Projects/proyectoaprobador.jpg";
import tiendaangular from "../../Assets/Projects/tiendaangular.jpg";
import tiendajava from "../../Assets/Projects/tiendajava.jpg";
import testbuzzfeed from "../../Assets/Projects/testbuzzfeed.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">Trabajos </strong> Recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí estan unos cuantos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={proyectoaprobador}
              isBlog={false}
              title="Proyecto Aprobador"
              description="Proyecto que consiste en una página para visualizar noticias de una Base de Datos con noticias sobre diferentes temas, con capacidad para eliminar noticias, pasarlas a la tabla para publicar y publicarlas en Twitter. Todo ello creado con Angular y PHP. Proyecto de las prácticas para DevAcademy"
              link="https://github.com/MCPikon/proyecto-aprobador"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiendaangular}
              isBlog={false}
              title="Tienda Online Videojuegos"
              description="Tienda online para comprar Videojuegos creada con Angular y PHP para la parte de backend. Proyecto de las asignaturas de Cliente y Servidor."
              link="https://github.com/MCPikon/tienda_angular_php_01"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tiendajava}
              isBlog={false}
              title="Tienda Online Compra-Venta Consolas y Videojuegos"
              description="Proyecto de Tienda Online para comprar y vender consolas, videojuegos y periféricos creado con HTML, CSS y JavaScript para la parte Frontend y Java para el Backend. Proyecto de las asignaturas de Cliente y Servidor"
              link="https://github.com/MCPikon/ProyectoFinal-TiendaOnline"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={testbuzzfeed}
              isBlog={false}
              title="Buzzfeed Test"
              description="Test de Buzzfeed sobre una serie de anime (Jujutsu Kaisen) creado con JavaScript, HTML y CSS. Calcula el personaje de la serie que eres según el tipo de respuestas dadas por el usuario. Proyecto de la asignatura de Lenguaje de Marcas."
              link="https://github.com/MCPikon/TestBuzzfeed"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
