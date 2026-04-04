import React from "react";
import { MdWork } from "react-icons/md";
import { useTheme } from "../context/ThemeContext";

const Experience = () => {
  const { theme, brand } = useTheme();

  // Brand-specific labels for each experience entry
  const getExperienceLabel = (index) => {
    const labels = {
      netflix: [`Season ${4 - index}`, "Now Streaming", "6 Episodes", "7 Episodes", "6 Episodes", "6 Episodes"],
      spotify: [`Album ${4 - index}`, "Latest Release", `${6} Tracks`, `${6} Tracks`, `${6} Tracks`, `${7} Tracks`],
      amazon: [`#${index + 1} Best Seller`, "Currently Available", "Verified Purchase", "Verified Purchase", "Verified Purchase", "Verified Purchase"],
      facebook: [null, null, null, null],
      default: [null, null, null, null],
    };
    return labels[theme]?.[index] || null;
  };
  const experiences = [
    {
      id: 1,
      company: "Turing",
      role: "Full Stack Developer",
      duration: "October 2024 - Present",
      location: "New Delhi, INDIA",
      achievements: [
        "Architected and delivered a high-performance microservices ecosystem using Spring Boot, reducing system latency by 40% and improving scalability for international clients.",
        "Implemented comprehensive security infrastructure with JWT, OAuth2 mitigating potential vulnerabilities.",
        "Designed real-time data processing pipelines using Kafka Streams and RabbitMQ, enabling processing of events per minute with minimal latency.",
        "Established performance monitoring framework with Grafana creating centralized dashboards that decreased incident response time.",
        "Developed modern, responsive web interfaces using React.js, improving performance and user engagement through reusable components and optimized rendering.",
        "Built cross-platform mobile applications with React Native, sharing up to most of codebase between Android and iOS to speed up development and reduce maintenance overhead.",
      ],
      tech: ["Spring Boot", "React.js", "React Native", "Kafka", "RabbitMQ", "JWT", "OAuth2", "Grafana"],
    },
    {
      id: 2,
      company: "Xebia Technology",
      role: "Senior Engineer",
      duration: "June 2024 - October 2024",
      location: "Gurugram, INDIA",
      achievements: [
        "Led the migration from monolithic architecture to microservices, reducing deployment cycles and enabling targeted scaling of system components.",
        "Designed and implemented domain-driven microservice boundaries, improving system maintainability and team autonomy across business domains.",
        "Developed custom authentication middleware with role-based access control using JWT, enhancing security while simplifying cross-service authentication.",
        "Optimized database interactions through carefully designed JPA repositories and query strategies, reducing database load by 35%.",
        "Created a distributed tracing system using Jaeger that identified and resolved critical performance bottlenecks across service boundaries.",
        "Developed scalable and interactive front-end applications using React.js, improving client-side performance and reducing page load times by 40%.",
      ],
      tech: ["Microservices", "Spring Boot", "React.js", "React Native", "JPA", "JWT", "Jaeger", "GraphQL"],
    },
    {
      id: 3,
      company: "BluePi Consulting Private Limited",
      role: "Full-stack Senior Engineer",
      duration: "April 2023 - June 2024",
      location: "Gurugram, INDIA",
      achievements: [
        "Implemented event-sourcing architecture with Kafka, enabling accurate audit trails and resilient system recovery mechanisms.",
        "Developed a custom circuit breaker implementation with Resilience4j that prevented cascading failures and improved system stability during peak loads.",
        "Created a unified API gateway layer to streamline client interactions with backend microservices, reducing frontend complexity by 40%.",
        "Built automated test suites with JUnit and Testcontainers, achieving 85%+ code coverage and detecting regression issues before production deployment.",
        "Developed responsive and high-performance web applications using React.js, improving user engagement and reducing rendering latency.",
        "Built cross-platform mobile apps using React Native, ensuring a consistent and smooth user experience across Android and iOS devices.",
      ],
      tech: ["Kafka", "Resilience4j", "Spring Boot", "React.js", "React Native", "JUnit", "Testcontainers", "API Gateway"],
    },
    {
      id: 4,
      company: "Wipro Technology",
      role: "Project Engineer",
      duration: "August 2021 - April 2023",
      location: "Bengluru, INDIA",
      achievements: [
        "Developed client-focused solutions using Java technologies, aligning implementations with business requirements and design specifications.",
        "Implemented back-end business layers with Spring and developed web services for data processing and integration.",
        "Created robust Java EE components using Spring MVC, Spring Core, Spring Rest, and Spring AOP.",
        "Built Java applications using the Spring framework and JPA repositories, maintaining high code quality with JUnit testing.",
        "Designed scalable architectures and developed RESTful APIs using Spring Boot as part of microservices-based systems.",
        "Deployed and orchestrated microservices using Kubernetes and Docker in cloud environments.",
      ],
      tech: ["Java", "Spring Boot", "Spring MVC", "JPA", "Kubernetes", "Docker", "RabbitMQ"],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full text-t-text min-h-screen"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.experience}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.experience}</p>
        </div>

        <div className="relative border-l-2 border-t-border ml-8">
          {experiences.map(({ id, company, role, duration, location, achievements, tech }, index) => (
            <div key={id} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-t-primary rounded-full -left-4 ring-4 ring-t-ring">
                <MdWork className="text-white" />
              </span>

              <div className="bg-t-card rounded-lg shadow-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300">
                {getExperienceLabel(index) && (
                  <div className="mb-3">
                    <span className="text-xs font-bold tracking-wider text-t-primary bg-t-primary/10 px-3 py-1 rounded-full uppercase">
                      {getExperienceLabel(index)}
                    </span>
                  </div>
                )}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-t-text">{company}</h3>
                    <p className="text-xl text-t-accent mt-1">{role}</p>
                  </div>
                  <div className="mt-2 sm:mt-0 sm:text-right">
                    <p className="text-sm text-t-text-secondary">{duration}</p>
                    <p className="text-sm text-t-text-muted">{location}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="text-t-text-secondary text-sm flex">
                      <span className="text-t-accent mr-2">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {tech.map((technology, index) => (
                    <span key={index}
                      className="px-3 py-1 text-xs bg-t-base text-t-accent rounded-full border border-t-border-accent">
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
