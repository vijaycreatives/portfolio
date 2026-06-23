import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoBlog from "./MonoBlog";
import "swiper/css";
import "swiper/css/pagination";
import "./blog.css";

const custom_breakpoints = {
  640: {
    slidesPerView: 1,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  1220: {
    slidesPerView: 1,
    spaceBetween: 24,
  },
};

const experienceData = [
  {
    id: 1,
    date: "2024 – Present",
    location: "Salem, Tamil Nadu",
    title: "Full Stack Developer",
    company: "Sigma Computers",
    highlights: [
      "Built and maintained custom OpenCart 2.x/4.x modules to extend e-commerce functionality including payment gateways and theme customization.",
      "Developed scalable backend systems using PHP 8+ and CodeIgniter 4 following MVC architecture and RESTful API best practices.",
      "Optimized complex MySQL queries, indexing strategies, and database schemas — improving page load and query execution time significantly.",
      "Integrated third-party APIs, automated report generation, and delivered responsive UI components using Bootstrap and jQuery.",
    ],
    link: "#!",
  },
];

const Blog = () => {
  return (
    <div className="content py-25 px-4 relative" id="blog">
      <div className="max-w-3xl text-center mx-auto pb-12">
        <div className="flex items-center justify-center gap-2 text-picto-primary text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3">
          <span className="w-8 h-[1px] bg-picto-primary"></span>
          WORK EXPERIENCE
          <span className="w-8 h-[1px] bg-picto-primary"></span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Where I've worked
        </h2>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-500">
          Professional experience building scalable web applications and
          e-commerce solutions for real-world business needs.
        </p>
      </div>
      <Swiper
        grabCursor={true}
        breakpoints={custom_breakpoints}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {experienceData?.map((data, index) => (
          <SwiperSlide
            key={index}
            className="mb-10"
            style={{ backgroundColor: "rgba(0,0,0,0)" }}
          >
            <MonoBlog data={data} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Blog;
