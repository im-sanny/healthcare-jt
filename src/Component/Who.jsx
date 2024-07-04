import { MdOutlineArrowOutward } from "react-icons/md";

const Who = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2 relative">
            <img
              src="https://i.ibb.co/nwwN1nX/Rectangle-24.png"
              alt="Healthcare professionals"
              className="rounded-3xl w-full h-auto object-cover shadow-lg"
            />
            <div className="bg-[#343268] text-white p-6 rounded-3xl shadow-xl absolute -bottom-8 -left-10 max-w-xs">
              <h4 className="font-semibold text-lg mb-2">
                Our mission is simple
              </h4>
              <p className="text-sm">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <span className="text-sm font-semibold text-blue-600 tracking-wider badge p-4">
              Who we are
            </span>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              We Help To Get <br /> Solutions
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>
            <button
              type="button"
              className="inline-flex items-center px-6 py-3 bg-yellow-400 text-gray-900 rounded-full font-semibold hover:bg-yellow-500 transition duration-300"
            >
              Learn more
              <MdOutlineArrowOutward size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
