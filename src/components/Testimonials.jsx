import React from "react";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Testimonials = () => {
  const { brand } = useTheme();
  const testimonials = [
    {
      id: 1,
      name: "Senior Tech Lead",
      role: "Technical Manager at Turing",
      image: "https://ui-avatars.com/api/?name=Tech+Lead&background=06b6d4&color=fff&size=200",
      rating: 5,
      text: "Harsh is an exceptional developer who consistently delivers high-quality code. His expertise in Spring Boot and microservices architecture has been instrumental in our project success. He's always willing to mentor junior developers and share his knowledge.",
    },
    {
      id: 2,
      name: "Product Owner",
      role: "Product Manager at Xebia",
      image: "https://ui-avatars.com/api/?name=Product+Owner&background=3b82f6&color=fff&size=200",
      rating: 5,
      text: "Working with Harsh was a pleasure. He has a deep understanding of both frontend and backend technologies. His ability to translate business requirements into technical solutions while maintaining code quality is remarkable. Highly recommended!",
    },
    {
      id: 3,
      name: "Team Colleague",
      role: "Senior Engineer at BluePi",
      image: "https://ui-avatars.com/api/?name=Team+Member&background=8b5cf6&color=fff&size=200",
      rating: 5,
      text: "Harsh's problem-solving skills and attention to detail are outstanding. He led our migration to microservices architecture and reduced our deployment time significantly. A true professional who takes ownership of his work.",
    },
    {
      id: 4,
      name: "Project Manager",
      role: "PM at Wipro Technology",
      image: "https://ui-avatars.com/api/?name=Project+Manager&background=10b981&color=fff&size=200",
      rating: 5,
      text: "Harsh was one of our most reliable developers. He consistently met deadlines and produced clean, maintainable code. His collaborative approach and communication skills made him a valuable team member. Would love to work with him again!",
    },
  ];

  return (
    <div
      name="testimonials"
      className="w-full text-t-text min-h-screen"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.testimonials}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.testimonials}</p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {testimonials.map(({ id, name, role, image, rating, text }) => (
            <div key={id}
              className="bg-t-card rounded-lg p-6 border border-t-border hover:border-t-primary transition-all duration-300 relative">
              <div className="absolute top-4 right-4 text-t-border">
                <FaQuoteLeft size={40} />
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(rating)].map((_, index) => (
                  <FaStar key={index} className="text-yellow-400" size={20} />
                ))}
              </div>

              <p className="text-t-text-secondary italic mb-6 relative z-10">"{text}"</p>

              <div className="flex items-center">
                <img src={image} alt={name}
                  className="w-14 h-14 rounded-full mr-4 border-2 border-t-primary" />
                <div>
                  <p className="text-t-text font-semibold">{name}</p>
                  <p className="text-t-text-muted text-sm">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-t-text-secondary mb-4">Want to see more recommendations?</p>
          <a href="https://www.linkedin.com/in/harsh-gandharv/" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-t-primary text-white rounded-lg hover:scale-105 transition-transform duration-200">
            View LinkedIn Recommendations
          </a>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
