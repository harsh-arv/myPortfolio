import React from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaStar, FaThumbsUp, FaShare, FaShoppingCart, FaMusic } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Microservices E-Commerce Platform",
      description: "A scalable e-commerce platform built with microservices architecture using Spring Boot, handling real-time inventory management and payment processing.",
      tech: ["Spring Boot", "Kafka", "React.js", "PostgreSQL", "Docker", "Kubernetes"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/harsh-arv",
      features: ["Event-driven architecture with Kafka", "JWT authentication & authorization", "Real-time inventory tracking", "Payment gateway integration"]
    },
    {
      id: 2,
      title: "React Native Cross-Platform App",
      description: "A mobile application built with React Native, providing seamless experience across iOS and Android with real-time data synchronization.",
      tech: ["React Native", "Node.js", "WebSockets", "Redux", "Firebase"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/harsh-arv",
      features: ["Cross-platform compatibility", "Real-time push notifications", "Offline-first architecture", "Secure authentication"]
    },
    {
      id: 3,
      title: "API Gateway & Service Mesh",
      description: "Unified API gateway layer streamlining client interactions with backend microservices, reducing frontend complexity by 40%.",
      tech: ["Spring Cloud Gateway", "Resilience4j", "Jaeger", "Grafana", "Docker"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/harsh-arv",
      features: ["Circuit breaker implementation", "Distributed tracing", "Load balancing", "Rate limiting & security"]
    },
    {
      id: 4,
      title: "Real-time Data Processing Pipeline",
      description: "High-performance data processing pipeline using Kafka Streams and RabbitMQ for processing thousands of events per minute.",
      tech: ["Kafka", "RabbitMQ", "Spring Boot", "PostgreSQL", "Grafana"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/harsh-arv",
      features: ["Event sourcing patterns", "Real-time analytics", "Stream processing", "Performance monitoring"]
    },
    {
      id: 5,
      title: "Full Stack Web Application",
      description: "Modern, responsive web application with React.js frontend and Spring Boot backend, featuring real-time updates and secure authentication.",
      tech: ["React.js", "Spring Boot", "PostgreSQL", "JWT", "Tailwind CSS"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/harsh-arv",
      features: ["Responsive design", "Role-based access control", "RESTful APIs", "Optimized performance"]
    },
    {
      id: 6,
      title: "DevOps CI/CD Pipeline",
      description: "Automated deployment pipeline with Docker, Kubernetes, and Jenkins, enabling continuous integration and delivery.",
      tech: ["Docker", "Kubernetes", "Jenkins", "Helm", "ArgoCD"],
      demoLink: "https://demo-link.com",
      codeLink: "https://github.com/harsh-arv",
      features: ["Automated testing", "Blue-green deployment", "Container orchestration", "Infrastructure as Code"]
    },
  ];

  const { theme, brand } = useTheme();

  const NetflixCard = ({ project }) => (
    <div className="group relative overflow-hidden rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10">
      <div className="aspect-[2/3] bg-t-card border border-t-border relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--c-primary), var(--c-secondary), var(--c-bg-base))" }} />
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <span className="text-t-primary text-xs font-bold tracking-wider mb-2">N SERIES</span>
          <h3 className="text-white text-lg font-bold leading-tight mb-1">{project.title}</h3>
          <p className="text-gray-400 text-xs line-clamp-2 mb-2">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6">
        <div className="flex gap-3 mb-4">
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
            <FaPlay className="text-black ml-0.5" />
          </a>
          <a href={project.codeLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition text-white">
            <FaGithub size={20} />
          </a>
        </div>
        <ul className="text-gray-300 text-xs space-y-1">
          {project.features.map((f, i) => <li key={i}><span className="text-t-primary mr-1">&#9656;</span>{f}</li>)}
        </ul>
      </div>
    </div>
  );

  const FacebookCard = ({ project }) => (
    <div className="bg-t-card rounded-lg border border-t-border overflow-hidden">
      <div className="flex items-center gap-3 p-4">
        <div className="w-10 h-10 rounded-full bg-t-primary flex items-center justify-center text-white font-bold text-sm">HG</div>
        <div>
          <p className="text-t-text font-semibold text-sm">Harsh Gandharv</p>
          <p className="text-t-text-muted text-xs">Shared a project</p>
        </div>
      </div>
      <div className="px-4 pb-3">
        <h3 className="text-t-text font-bold text-lg mb-1">{project.title}</h3>
        <p className="text-t-text-secondary text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs text-t-primary bg-t-primary/10 px-2 py-1 rounded-full">#{t.replace(/[\s.]/g, "")}</span>
          ))}
        </div>
      </div>
      <div className="mx-4 mb-3 bg-t-alt border border-t-border rounded-lg p-3">
        <p className="text-t-text-muted text-xs uppercase tracking-wide mb-1">github.com</p>
        <p className="text-t-text font-semibold text-sm">{project.title}</p>
        <ul className="text-t-text-secondary text-xs mt-1">
          {project.features.slice(0, 2).map((f, i) => <li key={i}>- {f}</li>)}
        </ul>
      </div>
      <div className="border-t border-t-border px-4 py-2 flex items-center justify-between text-t-text-muted text-sm">
        <div className="flex items-center gap-1"><span className="text-blue-500">&#128077;</span> 42</div>
        <span>8 comments</span>
      </div>
      <div className="border-t border-t-border flex">
        <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-t-text-secondary hover:bg-t-alt transition text-sm">
          <FaThumbsUp /> Like
        </a>
        <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex-1 flex items-center justify-center gap-2 py-2.5 text-t-text-secondary hover:bg-t-alt transition text-sm">
          <FaGithub /> Code
        </a>
        <button className="flex-1 flex items-center justify-center gap-2 py-2.5 text-t-text-secondary hover:bg-t-alt transition text-sm">
          <FaShare /> Share
        </button>
      </div>
    </div>
  );

  const AmazonCard = ({ project }) => (
    <div className="bg-t-card border border-t-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="bg-white p-6 flex items-center justify-center h-40 border-b border-t-border">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-2" style={{ background: "linear-gradient(135deg, var(--c-primary), var(--c-secondary))" }}>
            <FaShoppingCart className="text-white text-2xl" />
          </div>
          <p className="text-gray-700 text-xs font-bold">{project.tech[0]}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-t-primary text-sm font-semibold mb-1 hover:underline cursor-pointer leading-snug">{project.title}</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400 text-xs">{[...Array(5)].map((_, i) => <FaStar key={i} size={12} />)}</div>
          <span className="text-t-primary text-xs">(42)</span>
        </div>
        <p className="text-t-text-secondary text-xs line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.map((t, i) => <span key={i} className="text-xs bg-t-alt text-t-text-secondary px-2 py-0.5 rounded">{t}</span>)}
        </div>
        <div className="mb-3">
          <span className="text-t-text text-xs">Hire From </span>
          <span className="text-t-text text-xl font-bold">FREE</span>
          <span className="text-t-text-muted text-xs"> (Open Source)</span>
        </div>
        <a href={project.demoLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2 bg-t-primary text-white rounded-full text-sm font-semibold hover:opacity-90 transition mb-2">View Demo</a>
        <a href={project.codeLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2 bg-t-alt text-t-text rounded-full text-sm font-semibold border border-t-border hover:bg-t-card transition">View Source Code</a>
      </div>
    </div>
  );

  const SpotifyCard = ({ project, index }) => (
    <div className="flex items-center gap-4 p-3 rounded-md hover:bg-t-card transition group">
      <span className="text-t-text-muted text-sm w-6 text-right group-hover:hidden">{index + 1}</span>
      <a href={project.demoLink} target="_blank" rel="noreferrer" className="hidden group-hover:block w-6 text-right text-white"><FaPlay size={12} /></a>
      <div className="w-10 h-10 rounded flex-shrink-0 flex items-center justify-center" style={{ background: "linear-gradient(135deg, var(--c-primary), var(--c-secondary))" }}>
        <FaMusic className="text-white text-sm" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-t-text font-semibold text-sm truncate group-hover:text-t-primary transition">{project.title}</p>
        <p className="text-t-text-muted text-xs truncate">{project.tech.join(", ")}</p>
      </div>
      <p className="text-t-text-muted text-xs hidden md:block max-w-xs truncate">{project.description}</p>
      <div className="flex items-center gap-3">
        <a href={project.codeLink} target="_blank" rel="noreferrer" className="text-t-text-muted hover:text-t-text transition opacity-0 group-hover:opacity-100"><FaGithub size={16} /></a>
        <span className="text-t-text-muted text-xs">3:45</span>
      </div>
    </div>
  );

  const DefaultCard = ({ project }) => (
    <div className="bg-t-card rounded-lg shadow-lg border border-t-border hover:border-t-primary transition-all duration-300 overflow-hidden group">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-t-text mb-3 group-hover:text-t-accent transition-colors">{project.title}</h3>
        <p className="text-t-text-secondary text-sm mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-t-accent text-sm font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((f, i) => <li key={i} className="text-t-text-muted text-xs flex items-start"><span className="text-t-accent mr-2">-</span><span>{f}</span></li>)}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => <span key={i} className="px-2 py-1 text-xs bg-t-base text-t-accent rounded border border-t-border-accent">{t}</span>)}
        </div>
        <div className="flex gap-4">
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-t-primary text-white rounded hover:scale-105 transition-transform duration-200 text-sm"><FaExternalLinkAlt size={14} /><span>Demo</span></a>
          <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-t-border text-t-text rounded hover:bg-t-alt transition-colors duration-200 text-sm"><FaGithub size={16} /><span>Code</span></a>
        </div>
      </div>
    </div>
  );

  const renderCard = (project, index) => {
    switch (theme) {
      case "netflix": return <NetflixCard key={project.id} project={project} />;
      case "facebook": return <FacebookCard key={project.id} project={project} />;
      case "amazon": return <AmazonCard key={project.id} project={project} />;
      case "spotify": return <SpotifyCard key={project.id} project={project} index={index} />;
      default: return <DefaultCard key={project.id} project={project} />;
    }
  };

  const gridClass = theme === "spotify" ? "" : theme === "netflix" ? "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-4" : "grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8";

  return (
    <div name="portfolio" className="w-full text-t-text" style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}>
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">{brand.sections.portfolio}</p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.portfolio}</p>
        </div>

        {theme === "spotify" && (
          <div className="flex items-center gap-4 mb-6 pb-4 border-b border-t-border text-t-text-muted text-xs uppercase tracking-wider">
            <span className="w-6 text-right">#</span>
            <span className="w-10" />
            <span className="flex-1">Title</span>
            <span className="hidden md:block max-w-xs">Description</span>
            <span className="w-20 text-right">Duration</span>
          </div>
        )}

        <div className={gridClass}>
          {projects.map((project, index) => renderCard(project, index))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-t-text-secondary mb-4">Want to see more of my work?</p>
          <a href="https://github.com/harsh-arv" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-t-primary text-white rounded-lg hover:scale-105 transition-transform duration-200">
            <FaGithub size={20} />
            <span>Visit My GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
