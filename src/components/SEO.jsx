import React from "react";
import { Helmet } from "react-helmet-async";

const SEO = () => {
  // Structured Data for better SEO (JSON-LD)
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Harsh Gandharv",
    url: "https://harsh-arv.github.io/myPortfolio/",
    image: "https://harsh-arv.github.io/myPortfolio/preview.png",
    jobTitle: "Full Stack Developer",
    description: "Experienced Full Stack Developer with 4+ years of professional experience specializing in Java, Spring Boot, React.js, Microservices, and modern web technologies. Available for hire.",
    knowsAbout: [
      "Java Development",
      "Java 8",
      "Java 11",
      "Core Java",
      "Advanced Java",
      "Spring Boot",
      "Spring Framework",
      "Spring MVC",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "JPA",
      "React.js",
      "ReactJS",
      "React Hooks",
      "React Native",
      "JavaScript",
      "ES6",
      "TypeScript",
      "HTML5",
      "CSS3",
      "SASS",
      "Tailwind CSS",
      "Bootstrap",
      "Material-UI",
      "Full Stack Development",
      "MERN Stack",
      "Microservices Architecture",
      "RESTful APIs",
      "REST API",
      "GraphQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Amazon Web Services",
      "EC2",
      "S3",
      "Lambda",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Git",
      "GitHub",
      "GitLab",
      "Agile Development",
      "Scrum",
      "Software Engineering",
      "Web Development",
      "Frontend Development",
      "Backend Development",
      "Node.js",
      "Express.js",
      "Next.js",
      "Redux",
      "Maven",
      "Gradle",
      "JUnit",
      "Mockito",
      "Jest",
      "Webpack",
      "Babel",
      "API Development",
      "Database Design",
      "System Design",
      "Cloud Computing",
      "DevOps",
      "Azure",
      "GCP"
    ],
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Guru Gobind Singh Indraprastha University"
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "New Delhi",
      addressCountry: "India"
    },
    sameAs: [
      "https://github.com/harsh-arv",
      "https://www.linkedin.com/in/harsh-gandharv/"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>Harsh Gandharv - Full Stack Developer | Java & React Expert | Available for Hire</title>
      <meta
        name="title"
        content="Harsh Gandharv - Full Stack Developer | Java & React Expert | Available for Hire"
      />
      <meta
        name="description"
        content="Experienced Full Stack Developer with 4+ years specializing in Java, Spring Boot, React.js, Microservices. Expert in building scalable web applications. Available for hire. Based in New Delhi, India."
      />
      <meta
        name="keywords"
        content="Harsh Gandharv, Harsh, Full Stack Developer, Java Developer, React Developer, ReactJS Developer, Spring Boot Developer, Microservices Developer, Backend Developer, Frontend Developer, Software Engineer, Web Developer, JavaScript Developer, TypeScript Developer, React Native Developer, Senior Developer, Mid-level Developer, Java Spring Boot, Spring Framework Developer, Spring MVC Developer, Hibernate Developer, JPA Developer, REST API Developer, RESTful Web Services, GraphQL Developer, Node.js Developer, NodeJS Developer, Express.js Developer, MERN Stack Developer, Full Stack Java Developer, Full Stack React Developer, UI Developer, UX Developer, Front End Engineer, Back End Engineer, Java Backend Developer, React Frontend Developer, Hire Java Developer, Hire React Developer, Hire Full Stack Developer, Hire Spring Boot Developer, Hire Microservices Developer, Available for Hire, Open to Work, Looking for Job, New Delhi Developer, Delhi NCR Developer, India Developer, Indian Developer, Remote Developer, Remote Full Stack Developer, Remote Java Developer, Remote React Developer, Freelance Developer, Contract Developer, Full Time Developer, Part Time Developer, Software Development, Web Development, Application Development, Enterprise Application Development, Mobile App Development, React Native App Developer, Agile Developer, Scrum Developer, DevOps Engineer, DevOps Developer, Cloud Developer, AWS Developer, Amazon Web Services Developer, Azure Developer, GCP Developer, Docker Developer, Kubernetes Developer, Containerization Expert, CI/CD Developer, Jenkins Developer, MySQL Developer, PostgreSQL Developer, MongoDB Developer, NoSQL Developer, SQL Developer, Database Developer, API Developer, REST API Specialist, Web Services Developer, Microservices Architect, System Design Expert, Software Architecture, Scalable Applications, Enterprise Applications, E-commerce Developer, Fintech Developer, SaaS Developer, Startup Developer, Product Developer, Technical Lead, Team Lead Developer, Tech Lead, Java 8 Developer, Java 11 Developer, Core Java Developer, Advanced Java Developer, J2EE Developer, JavaScript Expert, ES6 Developer, TypeScript Expert, HTML5 Developer, CSS3 Developer, SASS Developer, SCSS Developer, Tailwind CSS Developer, Bootstrap Developer, Material-UI Developer, Material Design Developer, Redux Developer, State Management Expert, React Hooks Expert, Functional Components Expert, React Router Developer, Next.js Developer, Server Side Rendering Developer, SSR Developer, Static Site Generation, Git Expert, GitHub Developer, GitLab Developer, Version Control Expert, Maven Expert, Gradle Developer, JUnit Developer, Unit Testing Expert, Integration Testing, Test Driven Development, TDD Developer, Agile Methodology Expert, Scrum Master, Sprint Planning Expert, Code Review Expert, Clean Code Developer, SOLID Principles Expert, Design Patterns Expert, Object Oriented Programming, OOP Expert, Performance Optimization Expert, Web Performance Expert, SEO Expert, Responsive Design Expert, Mobile First Developer, Cross Browser Compatibility Expert, Accessibility Developer, WCAG Compliance, Security Best Practices, Authentication Expert, Authorization Expert, JWT Developer, OAuth Developer, Spring Security Expert, Payment Gateway Integration, Third Party API Integration, Webhook Developer, Real Time Applications, WebSocket Developer, Event Driven Architecture, Message Queue Expert, Kafka Developer, RabbitMQ Developer, Caching Expert, Redis Developer, Load Balancing Expert, High Availability Systems, Distributed Systems Expert, Cloud Native Applications, Serverless Architecture, Lambda Functions Developer, S3 Expert, EC2 Expert, RDS Developer, ElastiCache Developer, CloudWatch Expert, Terraform Developer, Infrastructure as Code, Monitoring and Logging Expert, Application Monitoring, Performance Monitoring, Error Tracking, Debugging Expert, Problem Solving Expert, Algorithm Expert, Data Structures Expert, Competitive Programming, LeetCode Expert, HackerRank Developer, Coding Interview Expert, Technical Interview Expert, Portfolio Website, GitHub Portfolio, Open Source Contributor, Tech Blogger, Stack Overflow Contributor, Community Leader, Mentor, Code Reviewer, Pair Programming Expert, Remote Work Expert, Communication Skills, Team Player, Independent Worker, Self Motivated Developer, Quick Learner, Adaptable Developer, Multi-tasking Expert, Time Management Expert, Project Management, Deadline Oriented Developer, Quality Focused Developer, Detail Oriented Developer, Best Practices Advocate, Code Quality Expert, Documentation Expert, API Documentation, Technical Writing, Software Consultant, Technology Consultant, IT Consultant, Solution Architect, Enterprise Architect, Application Architect, 4 Years Experience, 4+ Years Experience, Experienced Developer, Professional Developer, Production Ready Code, Industry Experience, Commercial Experience, B2B Developer, B2C Developer, Customer Facing Applications, Internal Tools Developer, Dashboard Developer, Admin Panel Developer, CRM Developer, ERP Developer, CMS Developer, Content Management System, Headless CMS, JAMstack Developer, Modern Web Technologies, Latest Technologies, Cutting Edge Technologies, Emerging Technologies, Tech Stack Expert, Polyglot Programmer, Multi Language Developer, Cross Platform Developer, Hybrid App Developer, Progressive Web Apps, PWA Developer, Single Page Applications, SPA Developer, Multi Page Applications, Server Rendered Applications, Isomorphic Applications, Universal JavaScript, Component Based Architecture, Reusable Components, Design System Developer, UI Library Developer, Component Library, Storybook Developer, Styled Components, CSS in JS, Emotion Developer, Framer Motion, Animation Expert, Interactive UI Developer, User Experience Developer, User Interface Developer, Pixel Perfect Developer, Design Implementation Expert, Figma to Code, Sketch to Code, Adobe XD to Code, Wireframe to Code, Mockup to Code, Prototype Developer"
      />
      <meta name="author" content="Harsh Gandharv" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      
      {/* Geographic Tags */}
      <meta name="geo.region" content="IN-DL" />
      <meta name="geo.placename" content="New Delhi" />
      <meta name="geo.position" content="28.6139;77.2090" />
      <meta name="ICBM" content="28.6139, 77.2090" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://harsh-arv.github.io/myPortfolio/" />
      <meta
        property="og:title"
        content="Harsh Gandharv - Full Stack Developer | Java & React Expert | Available for Hire"
      />
      <meta
        property="og:description"
        content="Experienced Full Stack Developer with 4+ years specializing in Java, Spring Boot, React.js, Microservices. Available for hire worldwide."
      />
      <meta
        property="og:image"
        content="https://harsh-arv.github.io/myPortfolio/preview.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Harsh Gandharv - Portfolio" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta
        property="twitter:url"
        content="https://harsh-arv.github.io/myPortfolio/"
      />
      <meta
        property="twitter:title"
        content="Harsh Gandharv - Full Stack Developer | Java & React Expert"
      />
      <meta
        property="twitter:description"
        content="Experienced Full Stack Developer with 4+ years specializing in Java, Spring Boot, React.js, Microservices. Available for hire."
      />
      <meta
        property="twitter:image"
        content="https://harsh-arv.github.io/myPortfolio/preview.png"
      />
      <meta name="twitter:creator" content="@harshgandharv" />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#06b6d4" />
      <link rel="canonical" href="https://harsh-arv.github.io/myPortfolio/" />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;
