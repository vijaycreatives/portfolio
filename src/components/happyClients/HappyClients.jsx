const educationData = [
  {
    id: 1,
    degree: "B.E. Mechanical Engineering",
    institution: "Sona College of Technology, Salem",
    period: "2018 – 2022",
    score: "CGPA: 8.07",
  },
  {
    id: 2,
    degree: "HSC & SSLC",
    institution: "Sri Gayathri Higher Secondary School, Salem",
    period: "2014 – 2018",
    score: "HSC: 84.3% · SSLC: 93.8%",
  },
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2" id="education">
      <div className="max-w-144.25 text-center">
        <p className="section-title mb-6">Education</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          Academic background from Sona College of Technology and Sri Gayathri
          Higher Secondary School, Salem.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-6 mt-10 max-w-4xl w-full">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="p-6 md:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-xl shadow-gray-200 transition-all duration-300"
          >
            <p className="text-picto-primary text-sm font-medium">{item.period}</p>
            <p className="text-xl sm:text-2xl font-semibold text-gray-900 mt-2">
              {item.degree}
            </p>
            <p className="text-[14px] sm:text-[16px] text-gray-600 mt-2">
              {item.institution}
            </p>
            <p className="text-[14px] sm:text-[16px] font-medium text-gray-800 mt-3">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
