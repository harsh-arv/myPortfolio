import React from "react";
import { FaGithub, FaExternalLinkAlt, FaPlay, FaStar, FaThumbsUp, FaShare, FaShoppingCart, FaMusic } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Kaiser Permanente Component Library",
      description: "Enterprise-grade React component library for Kaiser Permanente's health portal, featuring custom reusable components (inputs, buttons, forms) used across multiple healthcare applications, ensuring consistency and reducing development time by 60%.",
      tech: ["React.js", "TypeScript", "Storybook", "Jest", "Material-UI", "Styled Components"],
      demoLink: "https://healthy.kaiserpermanente.org/",
      codeLink: "https://github.com/harsh-arv",
      company: "Kaiser Permanente",
      impact: "Used across 15+ internal projects",
      features: [
        "Built 50+ reusable React components (Custom Inputs, Buttons, Forms, Modals)",
        "Implemented comprehensive unit tests with 95% code coverage",
        "Created interactive Storybook documentation for easy component discovery",
        "Developed accessibility-compliant components (WCAG 2.1 Level AA)",
        "Reduced UI development time by 60% across teams",
        "Integrated with Kaiser's design system and branding guidelines"
      ]
    },
    {
      id: 2,
      title: "Times Now News - Emergency Alert System",
      description: "Real-time emergency alert feature for Times Now News using WebSocket technology. Enables reporters to broadcast critical alerts instantly to all connected users with live location tracking, interactive maps, and navigation assistance to emergency sites.",
      tech: ["React Native", "Node.js", "WebSocket", "Socket.io", "Google Maps API", "MongoDB", "Express.js"],
      demoLink: "https://www.timesnownews.com/",
      codeLink: "https://github.com/harsh-arv",
      company: "Times Now News",
      impact: "Real-time alerts for breaking news coverage",
      features: [
        "Implemented WebSocket-based real-time communication using Socket.io",
        "Built emergency alert broadcast system for instant reporter-to-user notifications",
        "Integrated Google Maps with live location markers showing emergency sites",
        "Real-time distance and ETA calculations from user location to emergency site",
        "Cross-platform mobile app (iOS & Android) with React Native",
        "Push notification system for offline users with background alert handling",
        "Interactive map navigation with turn-by-turn directions to incident location",
        "Admin dashboard for reporters to manage and track active alerts"
      ]
    },
    {
      id: 3,
      title: "A2Z BookShop - Global E-Commerce Platform",
      description: "Full-stack international bookstore with monorepo architecture, featuring real-time currency conversion, multi-country shipping, integrated payment gateway, and automated email notifications. Optimized for performance with advanced SEO achieving 95+ PageSpeed score.",
      tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Monorepo", "SEO", "Nodemailer"],
      demoLink: "https://a2zbookshop.com/",
      codeLink: "https://github.com/harsh-arv",
      company: "A2Z BookShop",
      impact: "Live production site serving global customers",
      features: [
        "Built complete monorepo architecture with separate frontend and backend",
        "Real-time currency conversion from USD to 150+ currencies using live exchange rates",
        "International shipping calculator with country-specific rates and tax computation",
        "Integrated Stripe payment gateway with secure checkout and order tracking",
        "Automated email system for order confirmations, shipping updates, and notifications",
        "Advanced SEO optimization achieving 95+ Google PageSpeed score and Core Web Vitals",
        "Responsive design with mobile-first approach for seamless cross-device experience",
        "Inventory management system with real-time stock updates and low-stock alerts"
      ]
    },
    {
      id: 3,
      title: "Microservices E-Commerce Platform",
      description: "Scalable e-commerce backend with microservices architecture handling 10,000+ concurrent users. Implemented order management, inventory tracking, payment processing, and notification services with event-driven architecture.",
      tech: ["Spring Boot", "Kafka", "PostgreSQL", "Redis", "Docker", "Kubernetes", "AWS"],
      demoLink: "https://github.com/harsh-arv",
      codeLink: "https://github.com/harsh-arv",
      features: [
        "Event-driven architecture with Apache Kafka for real-time data streaming",
        "JWT-based authentication & role-based authorization",
        "Real-time inventory management across multiple warehouses",
        "Payment gateway integration (Stripe, PayPal) with transaction handling",
        "Distributed caching using Redis for 40% performance improvement",
        "Circuit breaker pattern with Resilience4j for fault tolerance"
      ]
    },
    {
      id: 4,
      title: "Healthcare Patient Management System",
      description: "Full-stack patient management application for healthcare providers with appointment scheduling, medical records management, prescription tracking, and telemedicine integration. HIPAA compliant with end-to-end encryption.",
      tech: ["React.js", "Spring Boot", "MySQL", "WebRTC", "Docker", "AWS S3"],
      demoLink: "https://github.com/harsh-arv",
      codeLink: "https://github.com/harsh-arv",
      features: [
        "Real-time video consultation using WebRTC",
        "Secure document storage with AWS S3 and encryption",
        "Appointment scheduling with calendar integration",
        "Electronic Health Records (EHR) management",
        "Prescription management and e-prescription generation",
        "Role-based access control for doctors, nurses, and admin"
      ]
    },
    {
      id: 5,
      title: "Real-time Analytics Dashboard",
      description: "Interactive analytics dashboard processing streaming data from IoT devices and user interactions. Features real-time charts, custom metrics, and automated reporting with data visualization using D3.js and Chart.js.",
      tech: ["React.js", "Node.js", "Kafka", "MongoDB", "Redis", "D3.js", "Chart.js"],
      demoLink: "https://github.com/harsh-arv",
      codeLink: "https://github.com/harsh-arv",
      features: [
        "Real-time data streaming with Kafka processing 50K+ events/min",
        "Custom interactive visualizations with D3.js and Chart.js",
        "WebSocket integration for live dashboard updates",
        "Automated report generation and email scheduling",
        "Time-series data analysis with MongoDB and aggregation pipelines",
        "Responsive design with custom data filters and drill-down capabilities"
      ]
    },
    {
      id: 6,
      title: "API Gateway & Service Mesh",
      description: "Centralized API Gateway managing 20+ microservices with intelligent routing, rate limiting, authentication, and monitoring. Implemented circuit breaker patterns and distributed tracing for enhanced reliability.",
      tech: ["Spring Cloud Gateway", "Eureka", "Resilience4j", "Jaeger", "Prometheus", "Grafana"],
      demoLink: "https://github.com/harsh-arv",
      codeLink: "https://github.com/harsh-arv",
      features: [
        "Unified API gateway for 20+ downstream microservices",
        "Circuit breaker and retry logic with Resilience4j",
        "Distributed tracing with Jaeger for request flow visibility",
        "Rate limiting and throttling to prevent service overload",
        "JWT token validation and API key management",
        "Real-time monitoring with Prometheus and Grafana dashboards"
      ]
    },
  ];

  const { theme, brand } = useTheme();

  const NetflixCard = ({ project }) => (
    <div className="group relative overflow-hidden rounded-md cursor-pointer transition-transform duration-300 hover:scale-105 hover:z-10">
      <div className="aspect-[2/3] bg-t-card border border-t-border relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, var(--c-primary), var(--c-secondary), var(--c-bg-base))" }} />
        {project.company && (
          <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-xs text-white font-semibold">
            {project.company}
          </div>
        )}
        <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
          <span className="text-t-primary text-xs font-bold tracking-wider mb-2">
            {project.company ? "CLIENT PROJECT" : "N SERIES"}
          </span>
          <h3 className="text-white text-lg font-bold leading-tight mb-1">{project.title}</h3>
          {project.impact && (
            <p className="text-yellow-400 text-xs font-semibold mb-1">⭐ {project.impact}</p>
          )}
          <p className="text-gray-400 text-xs line-clamp-2 mb-2">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.tech.slice(0, 3).map((t, i) => (
              <span key={i} className="text-xs text-gray-300 bg-white/10 px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute inset-0 bg-black/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 overflow-auto">
        <div className="flex gap-3 mb-4">
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
            <FaPlay className="text-black ml-0.5" />
          </a>
          <a href={project.codeLink} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition text-white">
            <FaGithub size={20} />
          </a>
        </div>
        <ul className="text-gray-300 text-xs space-y-1 max-h-48 overflow-y-auto">
          {project.features.slice(0, 4).map((f, i) => <li key={i}><span className="text-t-primary mr-1">▸</span>{f}</li>)}
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
          <p className="text-t-text-muted text-xs">
            {project.company ? `Worked at ${project.company}` : "Shared a project"}
          </p>
        </div>
      </div>
      <div className="px-4 pb-3">
        <h3 className="text-t-text font-bold text-lg mb-1">{project.title}</h3>
        {project.impact && (
          <p className="text-t-primary text-xs font-semibold mb-2">⭐ {project.impact}</p>
        )}
        <p className="text-t-text-secondary text-sm mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {project.tech.map((t, i) => (
            <span key={i} className="text-xs text-t-primary bg-t-primary/10 px-2 py-1 rounded-full">#{t.replace(/[\s.]/g, "")}</span>
          ))}
        </div>
      </div>
      <div className="mx-4 mb-3 bg-t-alt border border-t-border rounded-lg p-3">
        <p className="text-t-text-muted text-xs uppercase tracking-wide mb-1">
          {project.company ? project.company.toLowerCase().replace(/\s/g, "") + ".com" : "github.com"}
        </p>
        <p className="text-t-text font-semibold text-sm">{project.title}</p>
        <ul className="text-t-text-secondary text-xs mt-1">
          {project.features.slice(0, 2).map((f, i) => <li key={i}>• {f}</li>)}
        </ul>
      </div>
      <div className="border-t border-t-border px-4 py-2 flex items-center justify-between text-t-text-muted text-sm">
        <div className="flex items-center gap-1"><span className="text-blue-500">👍</span> 124</div>
        <span>18 comments · 42 shares</span>
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
      <div className="bg-white p-6 flex items-center justify-center h-40 border-b border-t-border relative">
        {project.company && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded font-semibold">
            {project.company}
          </div>
        )}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto rounded-lg flex items-center justify-center mb-2" style={{ background: "linear-gradient(135deg, var(--c-primary), var(--c-secondary))" }}>
            <FaShoppingCart className="text-white text-2xl" />
          </div>
          <p className="text-gray-700 text-xs font-bold">{project.tech[0]}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-t-primary text-sm font-semibold mb-1 hover:underline cursor-pointer leading-snug">{project.title}</h3>
        {project.impact && (
          <p className="text-orange-500 text-xs font-semibold mb-2">⭐ {project.impact}</p>
        )}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex text-yellow-400 text-xs">{[...Array(5)].map((_, i) => <FaStar key={i} size={12} />)}</div>
          <span className="text-t-primary text-xs">(142 reviews)</span>
        </div>
        <p className="text-t-text-secondary text-xs line-clamp-3 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 4).map((t, i) => <span key={i} className="text-xs bg-t-alt text-t-text-secondary px-2 py-0.5 rounded">{t}</span>)}
        </div>
        <div className="mb-3">
          <span className="text-t-text text-xs">Available </span>
          <span className="text-t-text text-xl font-bold">FREE</span>
          <span className="text-t-text-muted text-xs"> (Open Source)</span>
        </div>
        <a href={project.demoLink} target="_blank" rel="noreferrer" className="block w-full text-center py-2 bg-t-primary text-white rounded-full text-sm font-semibold hover:opacity-90 transition mb-2">View Live Project</a>
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
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-2xl font-bold text-t-text group-hover:text-t-accent transition-colors flex-1">{project.title}</h3>
          {project.company && (
            <span className="text-xs bg-t-primary/10 text-t-primary px-2 py-1 rounded-full whitespace-nowrap ml-2">{project.company}</span>
          )}
        </div>
        {project.impact && (
          <div className="mb-3 text-t-accent text-sm font-semibold flex items-center gap-2">
            <span className="text-yellow-400">⭐</span>
            <span>{project.impact}</span>
          </div>
        )}
        <p className="text-t-text-secondary text-sm mb-4">{project.description}</p>
        <div className="mb-4">
          <h4 className="text-t-accent text-sm font-semibold mb-2">Key Features:</h4>
          <ul className="space-y-1">
            {project.features.map((f, i) => <li key={i} className="text-t-text-muted text-xs flex items-start"><span className="text-t-accent mr-2">•</span><span>{f}</span></li>)}
          </ul>
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((t, i) => <span key={i} className="px-2 py-1 text-xs bg-t-base text-t-accent rounded border border-t-border-accent">{t}</span>)}
        </div>
        <div className="flex gap-4">
          <a href={project.demoLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-t-primary text-white rounded hover:scale-105 transition-transform duration-200 text-sm"><FaExternalLinkAlt size={14} /><span>View Live</span></a>
          <a href={project.codeLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-t-border text-t-text rounded hover:bg-t-alt transition-colors duration-200 text-sm"><FaGithub size={16} /><span>Source Code</span></a>
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
