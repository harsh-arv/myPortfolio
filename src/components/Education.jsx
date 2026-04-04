import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Education = () => {
  const { brand } = useTheme();
  const education = {
    university: "Guru Gobind Singh Indraprastha University",
    degree: "Bachelor of Technology",
    field: "Electrical and Communication Engineering",
    gpa: "8+/10",
    duration: "August 2017 - August 2021",
    location: "Delhi, INDIA",
  };

  const professionalAttributes = [
    { id: 1, title: "Innovative Problem Solver" },
    { id: 2, title: "Collaborative Team Player" },
    { id: 3, title: "Continuous Learner" },
    { id: 4, title: "Detail-Oriented" },
    { id: 5, title: "Client-Focused" },
    { id: 6, title: "Adaptable" },
  ];

  return (
    <div
      name="education"
      className="w-full text-t-text min-h-screen"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-alt), var(--c-bg-base))" }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.education}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.education}</p>
        </div>

        <div className="bg-t-card rounded-lg shadow-lg p-8 border border-t-border hover:border-t-primary transition-all duration-300 mb-16">
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-t-primary rounded-full flex items-center justify-center">
                <FaGraduationCap className="text-3xl text-white" />
              </div>
            </div>
            <div className="ml-6 flex-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <div>
                  <h3 className="text-2xl font-bold text-t-text">{education.university}</h3>
                  <p className="text-xl text-t-accent mt-2">{education.degree}</p>
                  <p className="text-lg text-t-text-secondary mt-1">{education.field}</p>
                  <div className="mt-3">
                    <span className="px-4 py-2 bg-t-primary text-white rounded-full text-sm font-semibold">
                      GPA: {education.gpa}
                    </span>
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 sm:text-right">
                  <p className="text-sm text-t-text-secondary">{education.duration}</p>
                  <p className="text-sm text-t-text-muted mt-1">{education.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            Professional Attributes
          </p>
          <p className="py-6 text-t-text-secondary">What makes me a valuable team member</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {professionalAttributes.map(({ id, title }) => (
            <div key={id}
              className="bg-t-card rounded-lg shadow-lg p-6 border border-t-border hover:border-t-primary hover:scale-105 transition-all duration-300 flex items-center justify-center">
              <h3 className="text-lg font-semibold text-t-text">{title}</h3>
            </div>
          ))}
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-lg shadow-lg p-6 text-center" style={{ background: "linear-gradient(to bottom right, var(--c-stat-1-from), var(--c-stat-1-to))" }}>
            <div className="text-4xl font-bold text-white">4+</div>
            <p className="text-white mt-2">Years Experience</p>
          </div>
          <div className="rounded-lg shadow-lg p-6 text-center" style={{ background: "linear-gradient(to bottom right, var(--c-stat-2-from), var(--c-stat-2-to))" }}>
            <div className="text-4xl font-bold text-white">4</div>
            <p className="text-white mt-2">Companies Worked</p>
          </div>
          <div className="rounded-lg shadow-lg p-6 text-center" style={{ background: "linear-gradient(to bottom right, var(--c-stat-3-from), var(--c-stat-3-to))" }}>
            <div className="text-4xl font-bold text-white">15+</div>
            <p className="text-white mt-2">Technologies Mastered</p>
          </div>
          <div className="rounded-lg shadow-lg p-6 text-center" style={{ background: "linear-gradient(to bottom right, var(--c-stat-4-from), var(--c-stat-4-to))" }}>
            <div className="text-4xl font-bold text-white">85%+</div>
            <p className="text-white mt-2">Code Coverage Achieved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
