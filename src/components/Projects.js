import "animate.css";
import { Col, Container, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import projImg5 from "../assets/img/abx.png";
import projImg1 from "../assets/img/agro.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg4 from "../assets/img/credix.jpg";
import projImg3 from "../assets/img/extranet.png";
import projImg2 from "../assets/img/simplifica.png";
import projImg6 from "../assets/img/uc-raanking.jpg";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const projects = [
    {
      title: "Agromarket",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Simplifica",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Extranet",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Credix",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Abx",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "UC raanking",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I am proficient in building user interface components using
                    React and Angular, managing application state, and
                    implementing routing for seamless navigation within the
                    application. I have extensive experience in integrating with
                    backend APIs for data exchange, and I am skilled in styling
                    components and designing responsive interfaces using CSS,
                    SASS, and libraries like styled-components or Angular
                    Material. I am adept at creating and executing unit tests
                    and integration tests using Jest, Testing Library, and
                    Jasmine. I am well-versed in performance optimization to
                    improve speed and efficiency in React and Angular
                    applications, and I have in-depth knowledge of accessibility
                    best practices and standards.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
