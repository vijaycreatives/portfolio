import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "Building scalable backend systems with PHP 8+, CodeIgniter 3/4, RESTful APIs, and MVC architecture. Experienced in OOP, design patterns, and custom module development.",
  },
  {
    id: 2,
    title: "E-Commerce Solutions",
    description:
      "Developing and extending OpenCart 2.x/4.x stores with custom modules, payment gateway integration, and theme customization for production-grade e-commerce platforms.",
  },
  {
    id: 3,
    title: "Full Stack Delivery",
    description:
      "End-to-end feature delivery from database design and MySQL optimization to responsive UI development using HTML5, CSS3, JavaScript, jQuery, Bootstrap, and React.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I specialize in PHP-based web development, e-commerce solutions, and
            full-stack application delivery — from backend APIs to responsive
            frontends.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My work spans custom OpenCart modules, CodeIgniter applications,
            MySQL optimization, and modern JavaScript frameworks to deliver
            production-ready solutions.
          </p>
        </div>
        <a
          href="mailto:prasathbabu2001@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
