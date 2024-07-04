import { MdOutlineArrowOutward } from "react-icons/md";

const Service = () => {
  return (
    <section className="p-4 lg:p-8 bg-[#FFFFF5]">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col overflow-hidden rounded-md lg:flex-row-reverse gap-5">
          <div className="lg:w-1/2 relative">
            <img
              src="https://i.ibb.co/mRs69Km/Rectangle-27-3.png"
              alt="Healthcare professionals"
              className="rounded-3xl w-full h-auto object-cover"
            />
            <div className="bg-[#343268] opacity-[0.6] text-white p-6 rounded-3xl shadow-xl absolute -bottom-1 max-w-xs m-4">
              <h4 className="font-semibold text-lg mb-2">
                Advanced Technology
              </h4>
              <div className="flex items-center justify-between">
                <p className="text-sm pr-4">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <div className="p-2 flex-shrink-0">
                  <button className="btn rounded-full bg-yellow-400">
                    <MdOutlineArrowOutward size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-6">
            <span className="text-sm font-semibold text-blue-600 tracking-wider badge p-4">
              Service
            </span>
            <h2 className="text-4xl font-bold text-gray-800 leading-tight">
              Empowering Health, <br /> Enriching Lives
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We are committed to providing high-quality, compassionate care to
              every patient we serve. Whatever your healthcare needs may be, you
              can trust us to be your partner in health and wellness.
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
        <div className="flex flex-col overflow-hidden rounded-md lg:flex-row gap-5">
          <div className="lg:w-1/2 relative">
            <img
              src="https://i.ibb.co/bvfxF0b/Rectangle-27-2.png"
              alt="Healthcare professionals"
              className="rounded-3xl w-full h-auto object-cover"
            />
            <div className="bg-[#343268] opacity-[0.6] text-white p-6 rounded-3xl shadow-xl absolute -bottom-1 max-w-xs m-4">
              <h4 className="font-semibold text-lg mb-2">Online Doctor Meet</h4>
              <div className="flex items-center justify-between">
                <p className="text-sm pr-4">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <div className="p-2 flex-shrink-0">
                  <button className="btn rounded-full bg-yellow-400">
                    <MdOutlineArrowOutward size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <img
              src="https://i.ibb.co/q5fK75P/Rectangle-27-1.png"
              alt="Healthcare professionals"
              className="rounded-3xl w-full h-auto object-cover"
            />
            <div className="bg-[#343268] bg-opacity-60 text-white p-6 rounded-3xl shadow-xl absolute -bottom-1 max-w-xs m-4">
              <h4 className="font-semibold text-lg mb-2">
                Consultancy your health
              </h4>
              <div className="flex items-center justify-between">
                <p className="text-sm pr-4">
                  Our surgeons are trained in the latest robotic surgical
                  techniques, which allow for greater precision
                </p>
                <div className="p-2 flex-shrink-0">
                  <button className="btn rounded-full bg-yellow-400">
                    <MdOutlineArrowOutward size={16} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
