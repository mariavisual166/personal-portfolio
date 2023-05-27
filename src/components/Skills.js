import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../Constants";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter2} alt="Image2" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image3" />
                  <h5>Angular</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image4" />
                  <h5>HTML and CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image4" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image4" />
                  <h5>Javascript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image4" />
                  <h5>NodeJS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image4" />
                  <h5>Python</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image5" />
    </section>
  );
};
