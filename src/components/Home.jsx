import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { calculateYearsAndMonths } from "../constants/constantFunction";
import Skill from "./Skill";
import Contact from "./Contact";
import { NavLink } from "react-router-dom";

const Home = () => {
  const experience = calculateYearsAndMonths(new Date('2021-08-23'));

  return (
    <div
      name="home"
    // className="h-screen w-full"
    >
      <div className="flex flex-col items-center justify-center p-4 md:flex-row">
        <div className="home-container flex flex-col justify-center">
          <div className="about-img-container">
            <div className="stack-containter">
              <h2 className="pt-10 text-4xl sm:text-7xl font-bold text-white  py-4 ">
              <span className="fade-in-normal"> I'm a  </span>
                Full Stack Developer
              </h2>
              <p  className="fade-in-normal text-gray-500">
                I am Software Engineer with industry experience of
                <span className="text-white  no-animation" > <b >{experience.years} years </b> and <b>{experience.months} month{experience.months > 1 ? 's' : ''} </b>  </span>
                building websites and web applications.
              </p>
              <p className="text-gray-500">
                I specialize <span className="text-white"><b>Core Java, Spring Boot, JPA repositories, Microservices, Hibernate, SQL, JavaScript, Docker, ReactJs, HTML, CSS, Maven, Git.</b></span>
              </p>
              <p className="fade-in-normal  text-gray-500">
                Experience in working on object-oriented design and analysis, development, testing, and delivery in a rapid development environment to achieve timelines. Working on <span className="text-white  no-animation" ><b>Agile Methodology</b></span>, I have been developing and testing large and complex enterprise and web applications.
              </p>

            </div>

            <div className="image-container">
              <img
                src={HeroImage}
                alt="my profile"
                className="rounded-2xl w-2/3 "
              />
            </div>
          </div>
          <div className="portfolio-button">
            <NavLink
              to={"/contact"}
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Contact Me
            </NavLink>
          </div>
        </div>


      </div>
      <Skill />
    </div>
  );
};

export default Home;
