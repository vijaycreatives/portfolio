import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

const Form = () => {
  return (
    <form className="flex flex-col gap-5 w-full">
      {/* Name and Email side-by-side */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-picto-primary focus:ring-1 focus:ring-picto-primary"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-picto-primary focus:ring-1 focus:ring-picto-primary"
            required
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-semibold text-gray-700">Subject</label>
        <input
          type="text"
          placeholder="What's this about?"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-picto-primary focus:ring-1 focus:ring-picto-primary"
          required
        />
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2 w-full">
        <label className="text-sm font-semibold text-gray-700">Message</label>
        <textarea
          placeholder="Tell me about your project..."
          rows="4"
          className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-picto-primary focus:ring-1 focus:ring-picto-primary resize-none"
          required
        />
      </div>

      {/* Send Message Button */}
      <button
        type="submit"
        className="btn btn-primary rounded-xl mt-3 text-sm sm:text-base font-semibold px-6 py-3 w-fit flex items-center gap-2 text-white bg-picto-primary hover:bg-picto-primary-dark transition-all duration-300 cursor-pointer"
      >
        <FontAwesomeIcon icon={faPaperPlane} />
        Send Message
      </button>
    </form>
  );
};

export default Form;
