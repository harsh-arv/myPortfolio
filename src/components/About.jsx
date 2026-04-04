import React from "react";
import { FaDownload } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const About = () => {
  const { brand } = useTheme();
  return (
    <div
      name="about"
      className="text-t-text min-h-screen"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-alt), var(--c-bg-base))" }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.about}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <p className="text-xl leading-relaxed text-t-text-secondary">
              I'm a passionate software developer who loves crafting elegant solutions to complex problems. 
              Although I graduated in <span className="text-t-accent font-semibold">Electrical and Communication Engineering</span>, 
              my heart has always belonged to computers and programming.
            </p>
            
            <p className="text-lg leading-relaxed text-t-text-secondary mt-4">
              Learning <span className="text-t-text font-semibold">Java and C++</span> during my academic career 
              sparked my deep interest in programming. I started exploring web development and fell in love with 
              creating applications that make a real impact.
            </p>

            <p className="text-lg leading-relaxed text-t-text-secondary mt-4">
              My professional journey began at <span className="text-t-accent font-semibold">WIPRO</span> as a 
              <span className="text-t-text font-semibold"> Product Engineer</span>, where I primarily worked on 
              Java web application development. Since then, I've had the privilege of working with leading tech 
              companies, mastering modern technologies, and delivering high-impact solutions.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-t-card rounded-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300">
              <h3 className="text-xl font-bold text-t-accent mb-3">My Philosophy</h3>
              <p className="text-t-text-secondary italic">
                "Wherever you go, go with all your heart. Never give up, and always be positive. 
                Enthusiasm to try new things is crucial for any developer to advance in their career."
              </p>
            </div>

            <div className="bg-t-card rounded-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300">
              <h3 className="text-xl font-bold text-t-accent mb-3">What I Bring</h3>
              <ul className="space-y-2 text-t-text-secondary">
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>4+ years of hands-on experience in full-stack development</span></li>
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Expertise in microservices architecture and scalable systems</span></li>
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Strong problem-solving and collaborative team skills</span></li>
                <li className="flex items-start"><span className="text-t-accent mr-2">▹</span><span>Continuous learner, always exploring new technologies</span></li>
              </ul>
            </div>

            <div className="flex justify-center">
              <a href="/resume.pdf" download
                className="flex items-center gap-2 px-6 py-3 bg-t-primary text-white rounded-lg hover:scale-105 transition-transform duration-200 font-semibold">
                <FaDownload size={20} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
