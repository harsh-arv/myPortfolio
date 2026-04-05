import React from "react";
import { TypeAnimation } from 'react-type-animation';
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaDownload, FaPlay, FaPlus, FaStar, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";

/* ---------- Netflix-style hero ---------- */
const NetflixHero = ({ brand }) => (
  <div name="home" className="min-h-screen w-full relative overflow-hidden"
    style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-base), var(--c-bg-alt))" }}>
    {/* Background image with overlay */}
    <div className="absolute inset-0 flex items-center justify-end opacity-20">
      <img src={HeroImage} alt="" className="h-full w-auto object-cover" />
    </div>
    <div className="absolute inset-0" style={{ background: "linear-gradient(to right, var(--c-bg-base) 50%, transparent)" }} />

    <div className="relative w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col justify-center min-h-screen py-20 max-w-3xl">
      <span className="inline-flex items-center gap-2 bg-t-primary/20 text-t-primary px-3 py-1 rounded text-xs sm:text-sm font-bold tracking-widest mb-4 w-fit">
        N &nbsp; {brand.heroGreeting}
      </span>
      <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-t-text mb-2 leading-tight">
        Harsh Gandharv
      </h1>
      <div className="text-lg sm:text-2xl md:text-3xl font-bold text-t-primary mb-4 h-8 sm:h-10">
        <TypeAnimation
          sequence={['Full Stack Developer', 2000, 'Java Expert', 2000, 'React Developer', 2000, 'Microservices Architect', 2000]}
          wrapper="span" speed={50} repeat={Infinity}
        />
      </div>
      <p className="text-t-text-secondary text-lg max-w-xl mb-6 leading-relaxed">
        {brand.heroSubtitle}
      </p>

      {/* Netflix-style buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
        <Link to="portfolio" smooth duration={500}
          className="flex items-center gap-2 bg-white text-black px-5 sm:px-8 py-2.5 sm:py-3 rounded font-bold text-base sm:text-lg hover:bg-gray-200 transition cursor-pointer">
          <FaPlay /> Play
        </Link>
        <Link to="about" smooth duration={500}
          className="flex items-center gap-2 bg-gray-500/50 text-white px-5 sm:px-8 py-2.5 sm:py-3 rounded font-bold text-base sm:text-lg hover:bg-gray-500/70 transition cursor-pointer">
          <FaPlus /> My List
        </Link>
      </div>

      {/* Netflix-style tags */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm text-t-text-secondary">
        <span className="border border-t-text-muted px-2 py-0.5 tracking-wide">4+ Seasons</span>
        <span className="border border-t-text-muted px-2 py-0.5 tracking-wide">4 Studios</span>
        <span className="border border-t-text-muted px-2 py-0.5 tracking-wide">15+ Technologies</span>
        <span className="text-t-accent font-bold">HD</span>
      </div>
    </div>
  </div>
);

/* ---------- Facebook-style hero ---------- */
const FacebookHero = ({ brand }) => (
  <div name="home" className="min-h-screen w-full"
    style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}>
    <div className="w-full pt-20">
      {/* Cover photo area */}
      <div className="w-full h-64 md:h-80 relative" style={{ background: "linear-gradient(135deg, var(--c-primary), var(--c-secondary))" }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.4\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }} />
      </div>

      {/* Profile section */}
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 -mt-20 relative">
        <div className="flex flex-col md:flex-row items-center md:items-end gap-4 sm:gap-6">
          <div className="relative">
            <div className="w-28 h-28 sm:w-40 sm:h-40 rounded-full border-4 border-t-card overflow-hidden bg-t-card shadow-xl">
              <img src={HeroImage} alt="Harsh Gandharv" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-4 border-t-card" />
          </div>
          <div className="flex-1 pb-4 text-center md:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-t-text">Harsh Gandharv</h1>
            <div className="text-xl text-t-primary font-semibold h-8 mt-1">
              <TypeAnimation
                sequence={['Full Stack Developer', 2000, 'Java Expert', 2000, 'React Developer', 2000, 'Microservices Architect', 2000]}
                wrapper="span" speed={50} repeat={Infinity}
              />
            </div>
            <p className="text-t-text-secondary mt-2">{brand.heroSubtitle}</p>
          </div>
        </div>

        {/* Facebook-style action bar */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mt-6 border-t border-t-border pt-4">
          <Link to="portfolio" smooth duration={500}
            className="bg-t-primary text-white px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition cursor-pointer">
            View Projects
          </Link>
          <Link to="contact" smooth duration={500}
            className="bg-t-card text-t-text px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base border border-t-border hover:bg-t-alt transition cursor-pointer">
            Send Message
          </Link>
          <a href="/resume.pdf" download
            className="bg-t-card text-t-text px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base border border-t-border hover:bg-t-alt transition flex items-center gap-2">
            <FaDownload size={14} /> Resume
          </a>
        </div>

        {/* Stats as fb-style counters */}
        <div className="grid grid-cols-4 gap-2 sm:flex sm:gap-8 mt-6 pb-8 border-b border-t-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-t-text">4+</p>
            <p className="text-t-text-muted text-sm">Years</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-t-text">4</p>
            <p className="text-t-text-muted text-sm">Companies</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-t-text">15+</p>
            <p className="text-t-text-muted text-sm">Technologies</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-t-text">500+</p>
            <p className="text-t-text-muted text-sm">Connections</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Amazon-style hero ---------- */
const AmazonHero = ({ brand }) => (
  <div name="home" className="min-h-screen w-full"
    style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-alt))" }}>
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center justify-center min-h-screen py-20 gap-8 sm:gap-12">
      {/* Product info */}
      <div className="flex-1 max-w-2xl">
        <p className="text-t-primary text-sm font-bold tracking-wider mb-1">{brand.heroGreeting}</p>
        <p className="text-t-text-muted text-xs mb-3">in Full Stack Development</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-t-text mb-2">
          Harsh Gandharv
        </h1>
        <div className="text-xl text-t-primary font-semibold h-8 mb-3">
          <TypeAnimation
            sequence={['Full Stack Developer', 2000, 'Java Expert', 2000, 'React Developer', 2000, 'Microservices Architect', 2000]}
            wrapper="span" speed={50} repeat={Infinity}
          />
        </div>

        {/* Star rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
          <span className="text-t-primary text-sm">4.9 out of 5</span>
          <span className="text-t-text-muted text-sm">| 12 reviews</span>
        </div>

        <div className="border-t border-t-border pt-4 mb-4">
          <p className="text-t-text-secondary leading-relaxed">{brand.heroSubtitle}</p>
        </div>

        {/* Amazon-style details */}
        <div className="space-y-2 text-sm mb-6">
          <div className="flex"><span className="text-t-text-muted w-32">Experience:</span><span className="text-t-text font-semibold">4+ Years</span></div>
          <div className="flex"><span className="text-t-text-muted w-32">Specialties:</span><span className="text-t-text font-semibold">Spring Boot, React.js, Kafka</span></div>
          <div className="flex"><span className="text-t-text-muted w-32">Location:</span><span className="text-t-text font-semibold">New Delhi, India</span></div>
          <div className="flex items-center"><span className="text-t-text-muted w-32">Availability:</span><span className="text-green-500 font-bold">In Stock</span></div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link to="contact" smooth duration={500}
            className="bg-t-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold hover:opacity-90 transition cursor-pointer flex items-center gap-2 text-sm">
            <FaShoppingCart /> Hire Now
          </Link>
          <Link to="portfolio" smooth duration={500}
            className="bg-t-card text-t-text px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-bold border border-t-border hover:bg-t-alt transition cursor-pointer text-sm">
            View Projects
          </Link>
        </div>
      </div>

      {/* Product image */}
      <div className="flex-shrink-0 flex items-center justify-center">
        <div className="bg-t-card border border-t-border rounded-lg p-4 sm:p-6 shadow-xl">
          <img src={HeroImage} alt="Harsh Gandharv" className="w-48 sm:w-64 md:w-80 rounded-lg" />
        </div>
      </div>
    </div>
  </div>
);

/* ---------- Spotify-style hero ---------- */
const SpotifyHero = ({ brand }) => (
  <div name="home" className="min-h-screen w-full"
    style={{ background: "linear-gradient(to bottom, var(--c-primary), var(--c-bg-base), var(--c-bg-alt))" }}>
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col md:flex-row items-center md:items-end justify-start pt-24 sm:pt-32 pb-12 gap-6 sm:gap-8">
      {/* Album art */}
      <div className="flex-shrink-0">
        <img src={HeroImage} alt="Harsh Gandharv"
          className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 rounded shadow-2xl object-cover" />
      </div>

      {/* Track details */}
      <div className="flex-1 pb-2 text-center md:text-left">
        <p className="text-white text-xs font-bold tracking-widest uppercase mb-2">{brand.heroGreeting}</p>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black text-white mb-4 leading-tight">
          Harsh Gandharv
        </h1>
        <div className="text-xl text-white/80 h-7 mb-4">
          <TypeAnimation
            sequence={['Full Stack Developer', 2000, 'Java Expert', 2000, 'React Developer', 2000, 'Microservices Architect', 2000]}
            wrapper="span" speed={50} repeat={Infinity}
          />
        </div>
        <p className="text-white/60 text-sm">{brand.heroSubtitle}</p>
        <div className="flex items-center gap-2 text-white/50 text-sm mt-4">
          <span className="text-white font-semibold">4+ years</span> &bull;
          <span>4 companies</span> &bull;
          <span>15+ tracks (technologies)</span>
        </div>
      </div>
    </div>

    {/* Spotify play controls */}
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex items-center gap-4 sm:gap-6 py-6">
      <Link to="portfolio" smooth duration={500}
        className="w-14 h-14 rounded-full bg-t-primary flex items-center justify-center hover:scale-105 transition cursor-pointer shadow-lg">
        <FaPlay className="text-black text-xl ml-1" />
      </Link>
      <Link to="about" smooth duration={500}
        className="text-t-text-secondary border-2 border-t-text-secondary rounded-full px-6 py-2 text-sm font-bold hover:border-white hover:text-white transition cursor-pointer">
        Follow
      </Link>
      <a href="/resume.pdf" download className="text-t-text-muted hover:text-t-text transition text-sm font-semibold">
        <FaDownload size={20} />
      </a>
    </div>
  </div>
);

/* ---------- Default hero ---------- */
const DefaultHero = ({ brand }) => (
  <div name="home" className="min-h-screen w-full"
    style={{ background: "linear-gradient(to bottom, var(--c-bg-base), var(--c-bg-base), var(--c-bg-alt))" }}>
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 flex flex-col items-center justify-center min-h-screen py-20 md:flex-row gap-8 md:gap-16">
      <div className="flex flex-col justify-center md:w-1/2 md:flex-shrink-0">
        <p className="text-t-accent text-lg sm:text-xl mb-2 animate-fade-in-down">{brand.heroGreeting}</p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-t-text mb-4 animate-fade-in-up">Harsh Gandharv</h1>
        <div className="text-xl sm:text-3xl md:text-5xl font-bold text-t-primary mb-6 h-[2rem] sm:h-[3.5rem] md:h-[4rem] overflow-hidden">
          <TypeAnimation
            sequence={['Full Stack Developer', 2000, 'Java Expert', 2000, 'React Developer', 2000, 'Microservices Architect', 2000]}
            wrapper="span" speed={50} repeat={Infinity}
          />
        </div>
        <p className="text-t-text-secondary py-4 max-w-md leading-relaxed animate-fade-in-left" style={{ animationDelay: '0.2s' }}>
          Software Engineer with <span className="text-t-accent font-semibold">4+ years</span> of industry experience building scalable web applications and microservices.
          <br/><br/>
          Specializing in <span className="text-t-text font-semibold">Spring Boot, React.js, Microservices, Kafka</span>, and modern full-stack development.
          <br/><br/>
          Experienced in <span className="text-t-text font-semibold">Agile methodology</span>, developing and testing complex enterprise applications from concept to deployment.
        </p>
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link to="portfolio" smooth duration={500}
            className="group text-white w-fit px-5 sm:px-6 py-2.5 sm:py-3 flex items-center rounded-md bg-t-primary cursor-pointer hover:scale-105 transition-transform duration-300 text-sm sm:text-base">
            View Projects
            <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={22} className="ml-1" /></span>
          </Link>
          <a href="/resume.pdf" download
            className="group text-t-text w-fit px-5 sm:px-6 py-2.5 sm:py-3 flex items-center rounded-md border-2 border-t-primary hover:bg-t-primary hover:text-white cursor-pointer transition-all duration-300 text-sm sm:text-base">
            <FaDownload size={18} className="mr-2" /> Resume
          </a>
        </div>
        <div className="flex gap-4 sm:gap-8 mt-8 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div><p className="text-2xl sm:text-3xl font-bold text-t-accent">4+</p><p className="text-t-text-muted text-xs sm:text-sm">Years Exp</p></div>
          <div><p className="text-2xl sm:text-3xl font-bold text-t-accent">4</p><p className="text-t-text-muted text-xs sm:text-sm">Companies</p></div>
          <div><p className="text-2xl sm:text-3xl font-bold text-t-accent">15+</p><p className="text-t-text-muted text-xs sm:text-sm">Technologies</p></div>
        </div>
      </div>
      <div className="hidden sm:flex items-center justify-center md:w-1/2 md:flex-shrink-0 animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80">
          {/* Rotating gradient ring */}
          <div className="absolute inset-[-12px] rounded-full animate-spin-slow"
            style={{ background: "conic-gradient(from 0deg, var(--c-primary), var(--c-accent), var(--c-secondary), var(--c-primary))", animationDuration: "6s" }} />
          {/* Glow effect */}
          <div className="absolute inset-[-8px] rounded-full bg-t-primary blur-2xl opacity-20 animate-pulse" />
          {/* Inner mask */}
          <div className="absolute inset-[4px] rounded-full" style={{ background: "var(--c-bg-base)" }} />
          {/* Actual image */}
          <img src={HeroImage} alt="Harsh Gandharv"
            className="absolute inset-[8px] rounded-full object-cover w-[calc(100%-16px)] h-[calc(100%-16px)] shadow-2xl" />
          {/* Floating accent dots */}
          <div className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-t-accent animate-bounce shadow-lg" style={{ animationDelay: "0s" }} />
          <div className="absolute -bottom-1 -left-3 w-4 h-4 rounded-full bg-t-primary animate-bounce shadow-lg" style={{ animationDelay: "0.5s" }} />
          <div className="absolute top-1/2 -right-4 w-3 h-3 rounded-full bg-t-secondary animate-bounce shadow-lg" style={{ animationDelay: "1s" }} />
        </div>
      </div>
    </div>
  </div>
);

const Home = () => {
  const { theme, brand } = useTheme();

  switch (theme) {
    case "netflix": return <NetflixHero brand={brand} />;
    case "facebook": return <FacebookHero brand={brand} />;
    case "amazon": return <AmazonHero brand={brand} />;
    case "spotify": return <SpotifyHero brand={brand} />;
    default: return <DefaultHero brand={brand} />;
  }
};

export default Home;
