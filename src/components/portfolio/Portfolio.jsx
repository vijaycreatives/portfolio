import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/s2_media.png";
import card2 from "../../assets/images/portfolio-images/senthur_africa.png";
import card3 from "../../assets/images/portfolio-images/aarc_management.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "PHP · CodeIgniter 4 · MySQL · jQuery · Bootstrap",
    title: "S2Media — Advertising Management System",
    description:
      "Enterprise ad booking and billing platform for multi-channel media placements — newspapers, radio (FM), TV, theatre, outdoor, and digital (YouTube). Features Release Order (RO) with shift/cancel/revision, automated invoice generation, accounts receivable, lead/client management, sub-agent management, press meet tracking, email/SMS notifications, role-based user permissions, and real-time booking dashboards with advt reminders. Includes REST API for mobile app integration.",
    link: "/project/s2media",
  },
  {
    id: 2,
    image: card2,
    category: "PHP · CodeIgniter 3 · MySQL · JavaScript",
    title: "Borewell Management System",
    description:
      "Field service management system to track borewell operations, machine usage, and technician assignments. Features fuel consumption tracking, machine performance analytics, and automated invoice and service report workflows.",
    link: "/project/senthur",
  },
  {
    id: 3,
    image: card3,
    category: "React Js · Node Js · MySQL",
    title: "AARC — Budget Planning & Audit System",
    description:
      "Annual budget planning system enabling organizations to project, allocate, and monitor budgets across departments. Implements audit workflows comparing previous year actual spend against current-month budgets with real-time variance insights.",
    link: "/project/aarc",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25"
      id="portfolio"
    >
      <div className="xl:mb-12 mb-6">
        <div className="max-sm:px-2 text-center mx-auto max-w-2xl">
          {/* Top Divider Badge */}
          <div className="flex items-center justify-center gap-2 text-picto-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
            <span className="w-8 h-[1px] bg-picto-primary"></span>
            PORTFOLIO
            <span className="w-8 h-[1px] bg-picto-primary"></span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-xs xs:text-[16px] md:text-lg text-gray-500">
            Key projects showcasing end-to-end web application development —
            from ad booking platforms to field service management and budget
            planning systems.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6 w-full justify-items-center">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      {/* View More Projects Button */}
      <div className="flex justify-center mt-10 md:mt-16">
        <a
          href="https://github.com/vijaycreatives"
          target="_blank"
          rel="noopener noreferrer"
          className="btn border border-picto-primary text-picto-primary bg-white hover:bg-picto-primary hover:text-white transition-all duration-500 rounded-xl flex items-center gap-2 px-8 py-3 text-sm sm:text-base font-semibold cursor-pointer"
        >
          More Projects
          <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
