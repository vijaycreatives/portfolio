import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const checkCircleIcon = (
  <svg
    className="w-5 h-5 text-picto-primary shrink-0 mt-0.5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-3xl border border-gray-100 hover:shadow-xl bg-white shadow-sm shadow-gray-200/50 transition-all duration-300 max-w-4xl mx-auto">
      <div className="m-6 md:m-10">
        {/* Row 1: Title and Date Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
            {data?.title}
          </h3>
          <span className="px-4 py-1 bg-[#F6EBFE] text-picto-primary rounded-full text-sm font-medium w-fit">
            {data?.date}
          </span>
        </div>

        {/* Row 2: Company and Location */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mt-2 mb-6">
          <span className="text-lg font-semibold text-picto-primary">
            {data?.company}
          </span>
          <span className="flex items-center gap-1.5 text-sm sm:text-base text-gray-500 font-normal">
            <FontAwesomeIcon icon={faLocationDot} className="text-gray-400" />
            {data?.location}
          </span>
        </div>

        {/* Bullet Points */}
        {data?.highlights && (
          <ul className="space-y-4">
            {data.highlights.map((point, index) => (
              <li
                key={index}
                className="text-[14px] sm:text-[16px] font-normal text-gray-600 flex gap-3 items-start"
              >
                {checkCircleIcon}
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MonoBlog;
