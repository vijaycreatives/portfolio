import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Address = ({ item }) => {
  return (
    <div className="flex items-center gap-4 py-2 w-full">
      {/* Icon Container */}
      <div className="w-12 h-12 bg-[#F6EBFE] text-picto-primary flex items-center justify-center rounded-xl shrink-0">
        <FontAwesomeIcon
          icon={item?.icon}
          className="text-lg md:text-xl"
        />
      </div>
      {/* Labels and Values */}
      <div className="flex flex-col">
        <span className="text-xs sm:text-sm text-gray-500 font-medium">
          {item?.title}
        </span>
        <span className="text-sm sm:text-base text-gray-950 font-bold mt-0.5">
          {item?.description}
        </span>
      </div>
    </div>
  );
};

export default Address;
