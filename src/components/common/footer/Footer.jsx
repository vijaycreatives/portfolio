import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../../../assets/Frame 12.jpg";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Services", url: "services" },
  { id: 4, name: "Skills", url: "work-process" },
  { id: 5, name: "Projects", url: "portfolio" },
  { id: 6, name: "Experience", url: "blog" },
  { id: 7, name: "Education", url: "education" },
  { id: 8, name: "Contact", url: "contact" },
];

const copyrightYear = 2026; // Static 2026 to match mockup, or dynamic: new Date().getFullYear();

const codeIcon = (
  <svg
    className="w-5 h-5 text-white"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="8 6 2 12 8 18"></polyline>
    <polyline points="16 6 22 12 16 18"></polyline>
  </svg>
);

const Footer = () => {
  return (
    <div className="pt-10 md:pt-16 content px-4">
      {/* Top Row: Logo, Links, and Social icons */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full pb-8">

        {/* Left Side: Code Logo + Name */}
        <div className="flex items-center gap-3">
          <img src={logo} className="h-8 sm:h-14 rounded-2xl" alt="logo" />
          <span className="text-xl font-bold text-gray-950 text-nowrap">
            Vijay Prasath
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 justify-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url}
              smooth={true}
              duration={900}
              className="text-gray-500 hover:text-picto-primary text-sm sm:text-base font-medium transition-colors duration-300 cursor-pointer"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Social Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="mailto:prasathbabu2001@gmail.com"
            className="w-10 h-10 border border-gray-200 hover:border-picto-primary text-picto-primary flex items-center justify-center rounded-xl bg-white transition-all duration-300 hover:shadow-sm"
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a
            href="tel:+917339090614"
            className="w-10 h-10 border border-gray-200 hover:border-picto-primary text-picto-primary flex items-center justify-center rounded-xl bg-white transition-all duration-300 hover:shadow-sm"
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            href="https://www.linkedin.com/in/vijay-prasath-863002254/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 border border-gray-200 hover:border-picto-primary text-picto-primary flex items-center justify-center rounded-xl bg-white transition-all duration-300 hover:shadow-sm"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>

      {/* Horizontal Divider Line */}
      <hr className="border-gray-100 w-full mb-8" />

      {/* Copyright text */}
      <p className="text-sm sm:text-base text-gray-500 text-center pb-8 font-medium">
        &copy; {copyrightYear} Vijay Prasath B. Full Stack Developer - Salem, Tamil Nadu.
      </p>
    </div>
  );
};

export default Footer;
