import React from "react";
import { HiOutlineMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

const Contact = () => {
  const { brand } = useTheme();
  const contactInfo = [
    {
      id: 1,
      icon: <HiOutlineMail size={30} />,
      title: "Email",
      value: "harshgandharav680@gmail.com",
      link: "mailto:harshgandharav680@gmail.com",
    },
    {
      id: 2,
      icon: <HiPhone size={30} />,
      title: "Phone",
      value: "+91-9911556706",
      link: "tel:+919911556706",
    },
    {
      id: 3,
      icon: <HiLocationMarker size={30} />,
      title: "Location",
      value: "New Delhi, India",
      link: null,
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaLinkedin size={30} />,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/harsh-gandharv/",
    },
    {
      id: 2,
      icon: <FaGithub size={30} />,
      title: "GitHub",
      link: "https://github.com/harsh-arv",
    },
  ];

  return (
    <div
      name="contact"
      className="w-full text-t-text min-h-screen"
      style={{ background: "linear-gradient(to bottom, var(--c-bg-alt), var(--c-bg-base))" }}
    >
      <div className="w-full px-8 md:px-16 lg:px-24 xl:px-32 py-20 flex flex-col justify-center">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-t-primary">
            {brand.sections.contact}
          </p>
          <p className="py-6 text-t-text-secondary">{brand.sectionSubtitles.contact}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-t-accent mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map(({ id, icon, title, value, link }) => (
                  <div key={id}
                    className="bg-t-card rounded-lg p-4 border border-t-border hover:border-t-primary transition-all duration-300">
                    <div className="flex items-center">
                      <div className="text-t-accent mr-4">{icon}</div>
                      <div>
                        <p className="text-t-text-muted text-sm">{title}</p>
                        {link ? (
                          <a href={link}
                            className="text-t-text hover:text-t-accent transition-colors">
                            {value}
                          </a>
                        ) : (
                          <p className="text-t-text">{value}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-t-accent mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map(({ id, icon, title, link }) => (
                  <a key={id} href={link} target="_blank" rel="noreferrer"
                    className="bg-t-primary rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 flex-1 text-white">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">{icon}</div>
                      <p className="text-sm font-semibold">{title}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="bg-t-primary rounded-lg p-6 text-center">
              <p className="text-2xl font-bold text-white mb-2">Available for Work</p>
              <p className="text-sm text-white">Open to new opportunities and collaborations</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-t-accent mb-4">Send Me a Message</h3>
            <form
              action="https://getform.io/f/c60697a1-b65a-495e-899a-401d9e6fd46c"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <div>
                <label htmlFor="name" className="text-t-text-muted text-sm mb-2 block">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  placeholder="John Doe"
                  className="w-full p-3 bg-t-card border-2 border-t-border rounded-md text-t-text focus:outline-none focus:border-t-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-t-text-muted text-sm mb-2 block">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="john@example.com"
                  className="w-full p-3 bg-t-card border-2 border-t-border rounded-md text-t-text focus:outline-none focus:border-t-primary transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-t-text-muted text-sm mb-2 block">
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  placeholder="Tell me about your project or opportunity..."
                  rows="6"
                  className="w-full p-3 bg-t-card border-2 border-t-border rounded-md text-t-text focus:outline-none focus:border-t-primary transition-colors resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full text-white bg-t-primary px-6 py-3 rounded-md hover:scale-105 transition-transform duration-300 font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
