import React from "react";
import { useTheme } from "../context/ThemeContext";

const Skill = () => {
  const { brand } = useTheme();

  const categories = [
    {
      title: "Languages",
      skills: ["Core Java", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Frameworks",
      skills: ["Spring Boot", "React.js", "React Native", "Next.js", "Node.js", "Express.js", "Angular", "Vue.js"],
    },
    {
      title: "API & Data",
      skills: ["GraphQL", "Apollo Server", "REST APIs", "WebSockets", "Hasura"],
    },
    {
      title: "Databases",
      skills: ["PostgreSQL", "SQL", "JPA", "Hibernate", "Redis", "Elasticsearch"],
    },
    {
      title: "Messaging & Streaming",
      skills: ["Kafka", "RabbitMQ", "Event Sourcing"],
    },
    {
      title: "DevOps & CI/CD",
      skills: ["Docker", "Kubernetes", "Helm", "Jenkins", "GitHub Actions", "ArgoCD", "Docker Compose", "Nginx"],
    },
    {
      title: "Cloud",
      skills: ["GCP", "Azure", "AWS", "Firebase"],
    },
    {
      title: "Testing",
      skills: ["JUnit", "Mockito", "Testcontainers", "Selenium", "Cypress", "Playwright", "REST Assured", "Pact", "Cucumber", "TestNG", "Postman"],
    },
    {
      title: "Architecture & Patterns",
      skills: ["Microservices", "Domain-Driven Design", "API Gateway", "Blue/Green Deployment", "Event Sourcing"],
    },
    {
      title: "Security",
      skills: ["JWT", "OAuth2", "Keycloak", "Spring Security"],
    },
    {
      title: "Monitoring & Observability",
      skills: ["Grafana", "Prometheus", "ELK Stack", "Jaeger", "Resilience4j"],
    },
    {
      title: "Tools",
      skills: ["Git", "Maven", "Bitbucket", "IntelliJ IDEA", "Redux", "Tailwind CSS", "Bootstrap"],
    },
  ];

  return (
    <div
      name="experience"
      className="w-full text-t-text min-h-screen"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-alt), var(--c-bg-base))" }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold border-b-4 border-t-primary inline">
            {brand.sections.skills}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.skills}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {categories.map((cat, index) => (
            <div
              key={index}
              className="bg-t-card rounded-lg p-5 border border-t-border hover:border-t-primary transition-all duration-300"
            >
              <h3 className="text-sm font-bold text-t-accent uppercase tracking-wider mb-3">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs font-medium bg-t-alt text-t-text rounded-md border border-t-border hover:bg-t-primary hover:text-white transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
