import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "PHP · CodeIgniter 4 · MySQL · jQuery · Bootstrap",
    title: "S2Media — Advertising Management System",
    description:
      "Enterprise ad booking and billing platform for multi-channel media placements — newspapers, radio (FM), TV, theatre, outdoor, and digital (YouTube). Features Release Order (RO) with shift/cancel/revision, automated invoice generation, accounts receivable, lead/client management, sub-agent management, press meet tracking, email/SMS notifications, role-based user permissions, and real-time booking dashboards with advt reminders. Includes REST API for mobile app integration.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "PHP · CodeIgniter 3 · MySQL · JavaScript",
    title: "Borewell Management System",
    description:
      "Field service management system to track borewell operations, machine usage, and technician assignments. Features fuel consumption tracking, machine performance analytics, and automated invoice and service report workflows.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "PHP · CodeIgniter 4 · MySQL",
    title: "AARC — Budget Planning & Audit System",
    description:
      "Annual budget planning system enabling organizations to project, allocate, and monitor budgets across departments. Implements audit workflows comparing previous year actual spend against current-month budgets with real-time variance insights.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            Key projects showcasing end-to-end web application development —
            from ad booking platforms to field service management and budget
            planning systems.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
