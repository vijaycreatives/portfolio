import toolsImages from "../../assets/tools_images.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import SocialMedia from "../common/socialMedia/SocialMedia";
import resumePdf from "../../assets/Vijay_Prasath_Resume.pdf";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-3xl bg-white border border-gray-100 shadow-xl max-xl:mb-5 xl:p-20 lg:p-16 md:p-12 p-6`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-8 lg:gap-16">
        {/* Profile image (Web Development Tools collage) */}
        <div className="w-full max-w-[424px] flex flex-col items-center">
          <div className="w-full rounded-2xl border border-gray-200 overflow-hidden bg-white shadow-sm flex items-center justify-center">
            <img
              className="w-full h-auto object-contain bg-[#fbfbfe]"
              src={toolsImages}
              alt="toolsImages"
            />
          </div>
          {/* Social media section */}
          <div className="relative -mt-6 z-20">
            <div className="px-6 py-2.5 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-100/80">
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="flex-1 max-w-2xl">
          {/* Top Label */}
          <div className="flex items-center gap-2 text-picto-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 max-md:justify-center">
            <span className="w-8 h-[1px] bg-picto-primary"></span>
            ABOUT ME
          </div>

          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] max-md:text-center font-bold text-gray-950 mb-6`}
          >
            Results-driven Full Stack Developer
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-500 leading-relaxed`}
          >
            <p>
              Results-driven Full Stack Developer with 2+ years of experience
              building and maintaining dynamic web applications. Proficient in PHP
              8+, CodeIgniter 3/4, and OpenCart 2.x/4.x with hands-on expertise in
              custom module development and MVC architecture.
            </p>
            <p className="mt-4">
              Delivered 10+ production-grade web applications and dynamic sites
              across e-commerce. Adept at MySQL optimization, responsive UI
              development, and end-to-end feature delivery.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <Link
              to="portfolio"
              smooth={true}
              duration={900}
              className="btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 btn-primary text-xs xxs:text-[14px] sm:text-[16px] cursor-pointer rounded-xl"
            >
              My Projects
            </Link>
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 border border-gray-200 bg-white hover:border-picto-primary duration-300 transition-all hover:text-picto-primary ms-4 text-xs xxs:text-[14px] sm:text-[16px] rounded-xl`}
              href={resumePdf}
              download="Vijay_Prasath_Resume.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
