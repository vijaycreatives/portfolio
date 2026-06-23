import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Address from "./Address";
import Form from "./Form";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Salem, Tamil Nadu",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "prasathbabu2001@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+91 7339090614",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-4">
      <div
        className="content p-6 md:p-12 lg:p-16 bg-white rounded-3xl border border-gray-200 shadow-xl shadow-gray-250/30"
        id="contact"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column: Contact details */}
          <div className="flex flex-col lg:border-r lg:border-gray-200 lg:pr-16 justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-950">
                Let's discuss your project
              </h2>
              <p className="text-sm sm:text-base font-normal text-gray-500 mt-4 leading-relaxed max-w-md">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>
            
            {/* Address Items (Vertical stack) */}
            <div className="flex flex-col gap-4 my-8">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
            
            {/* Connect on LinkedIn Button */}
            <div className="w-full">
              <a
                href="https://www.linkedin.com/in/vijay-prasath-863002254/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-gray-200 hover:border-picto-primary hover:text-picto-primary rounded-xl px-5 py-3 text-sm sm:text-base font-semibold text-gray-700 bg-white transition-all duration-300 w-fit cursor-pointer"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-[#0a66c2] text-lg" />
                Connect on LinkedIn
              </a>
            </div>
          </div>

          {/* Right Column: Contact form */}
          <div className="w-full flex items-center">
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
