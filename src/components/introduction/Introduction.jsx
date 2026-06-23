import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import person from "../../assets/images/person.png";
import "./introduction.css";

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse justify-between pt-10 lg:pt-31.5 lg:mb-27.5 gap-10 p-2 max-xxl:px-4 items-center"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center max-w-2xl">
        <div className="pt-4 lg:pt-8 w-full transition-all duration-500">
          {/* Top Divider line and Label */}
          <div className="flex items-center gap-2 text-picto-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-4 max-lg:justify-center">
            <span className="w-8 h-[1px] bg-picto-primary"></span>
            FULL STACK DEVELOPER
          </div>

          <h1 className="text-4xl xxs:text-5xl sm:text-6xl lg:text-[72px] font-bold text-gray-900 leading-tight">
            Hello, I'm <span className="text-picto-primary block lg:inline-block xl:block">Vijay Prasath B</span>
          </h1>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-3 text-gray-500 font-medium">
            Full Stack Developer | PHP | CodeIgniter | OpenCart
          </p>

          <p className="text-xs xxs:text-lg lg:text-[18px] my-6 text-gray-600 leading-relaxed">
            I'm a{" "}
            <span className="px-3 py-1 bg-[#F6EBFE] text-picto-primary rounded-md font-medium text-sm inline-block">
              Full Stack Developer
            </span>{" "}
            specializing in{" "}
            <span className="px-3 py-1 bg-[#F6EBFE] text-picto-primary rounded-md font-medium text-sm inline-block">
              PHP &amp; CodeIgniter
            </span>{" "}
            based in Salem, Tamil Nadu. I build production-grade web applications and
            dynamic e-commerce sites with hands-on expertise in MVC architecture and RESTful APIs.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              className="btn-primary btn btn-xs xxs:btn-lg text-white flex items-center gap-2"
              href="mailto:prasathbabu2001@gmail.com"
            >
              <FontAwesomeIcon icon={faEnvelope} /> Say Hello!
            </a>
            <a
              className="btn btn-xs xxs:btn-lg border border-picto-primary text-picto-primary bg-white hover:bg-picto-primary hover:text-white transition-all duration-500 rounded-lg flex items-center gap-2"
              href="https://github.com/vijaycreatives"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Projects <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </div>
        </div>

        {/* Stats Row Container */}
        <div className="mx-auto lg:mx-0 relative w-full mt-10">
          <div className="flex border border-gray-200 rounded-2xl p-6 w-full max-w-lg bg-white shadow-sm shadow-gray-100">
            <div className="flex-1 pr-6 border-r border-gray-200 max-xxs:pr-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">2+ Y.</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Experience</p>
            </div>
            <div className="flex-1 px-6 border-r border-gray-200 max-xxs:px-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">10+</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Projects Completed</p>
            </div>
            <div className="flex-1 pl-6 max-xxs:pl-3">
              <p className="text-2xl sm:text-3xl font-bold text-gray-900">15+</p>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">Technologies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Image with Underlay Backing Sheet */}
      <div className="max-w-[536px] w-full aspect-[536/636] relative max-lg:mx-auto">
        <div className="absolute inset-0 bg-[#F0E6FF] rounded-[32px] translate-x-4 translate-y-4" />
        <img
          className="shadow-md w-full h-full relative z-10 object-cover bg-white rounded-[32px] border border-gray-100"
          src={person}
          alt="Vijay Prasath B"
        />
      </div>
    </div>
  );
};

export default Introduction;
