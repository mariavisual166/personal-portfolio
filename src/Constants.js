import projImg5 from "./assets/img/abx.png";
import projImg1 from "./assets/img/agro.jpg";
import projImg4 from "./assets/img/credix.jpg";
import projImg3 from "./assets/img/extranet.png";
import projImg2 from "./assets/img/simplifica.png";
import projImg6 from "./assets/img/uc-raanking.jpg";

export const linkedin =
  "https://www.linkedin.com/in/mariangelagoncalvesmacedo/";

export const toRotate = [
  "Web Developer",
  "Frontend Developer",
  "Full stack Developer",
];

export const period = 2000;

export const projects = [
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

export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
