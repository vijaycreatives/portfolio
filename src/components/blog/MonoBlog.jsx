const MonoBlog = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300 max-w-3xl mx-auto">
      <div className="m-6 md:m-10">
        <p className="text-[10px] xs:text-[14px] font-normal text-gray-400">
          {data?.date} · {data?.location}
        </p>
        <p className="text-[18px] xs:text-2xl font-semibold text-[#333333] mt-2 mb-4">
          {data?.title}
        </p>
        {data?.highlights && (
          <ul className="space-y-3">
            {data.highlights.map((point, index) => (
              <li
                key={index}
                className="text-[13px] xs:text-[15px] font-normal text-gray-600 flex gap-2"
              >
                <span className="text-picto-primary shrink-0 mt-1">•</span>
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
