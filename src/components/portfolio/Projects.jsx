import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link as RouterLink } from "react-router-dom";

const Projects = ({ data }) => {
  const isInternal = data?.link && !data.link.startsWith("http") && data.link !== "#!";

  return (
    <div className="max-w-106 rounded-3xl hover:shadow-xl shadow-sm shadow-gray-250/20 duration-300 transition-all border border-gray-100 bg-white flex flex-col justify-between h-full overflow-hidden">
      <div>
        <img className="w-full h-auto object-contain max-h-[400px] bg-[#fbfbfe]" src={data?.image} alt={`${data?.title} image`} loading="lazy" />
        <div className="p-6 xs:p-8">
          <p className="text-picto-primary text-xs font-semibold uppercase tracking-wider mb-2">
            {data?.category}
          </p>
          <h4 className="text-gray-900 text-lg sm:text-xl font-bold mb-3 leading-snug">
            {data?.title}
          </h4>
          <p className="text-gray-500 text-sm leading-relaxed">
            {data?.description}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 xs:px-8 xs:pb-8">
        {isInternal ? (
          <RouterLink
            to={data.link}
            className="btn border border-gray-200 hover:border-picto-primary hover:text-picto-primary bg-white text-sm font-semibold hover:gap-3 transition-all duration-300 w-full rounded-xl flex items-center justify-center gap-2 py-3 cursor-pointer"
          >
            View Project
            <FontAwesomeIcon icon={faArrowRight} />
          </RouterLink>
        ) : (
          <a
            href={data?.link}
            className="btn border border-gray-200 hover:border-picto-primary hover:text-picto-primary bg-white text-sm font-semibold hover:gap-3 transition-all duration-300 w-full rounded-xl flex items-center justify-center gap-2 py-3 cursor-pointer"
          >
            View Project
            <FontAwesomeIcon icon={faArrowRight} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Projects;
