import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

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
    <div className="content py-10 md:py-25 flex flex-col items-center px-4" id="education">
      <div className="max-w-3xl text-center mx-auto pb-12">
        <div className="flex items-center justify-center gap-2 text-picto-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="w-8 h-[1px] bg-picto-primary"></span>
          EDUCATION
          <span className="w-8 h-[1px] bg-picto-primary"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Academic background
        </h2>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-500">
          Academic background from Sona College of Technology and Sri Gayathri
          Higher Secondary School, Salem.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6 mt-6 max-w-4xl w-full">
        {educationData.map((item) => (
          <div
            key={item.id}
            className="p-6 md:p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-xl shadow-sm shadow-gray-200/50 transition-all duration-300 flex flex-col items-start"
          >
            {/* Top-left Graduation Cap Icon Box */}
            <div className="w-12 h-12 bg-[#F6EBFE] rounded-xl flex items-center justify-center mb-5">
              <FontAwesomeIcon icon={faGraduationCap} className="text-picto-primary text-lg" />
            </div>
            
            <p className="text-picto-primary text-sm font-medium mb-2">{item.period}</p>
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
              {item.degree}
            </h3>
            <p className="text-sm sm:text-base text-gray-500 mb-4">
              {item.institution}
            </p>
            <p className="text-sm sm:text-base font-bold text-gray-900">
              {item.score}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
