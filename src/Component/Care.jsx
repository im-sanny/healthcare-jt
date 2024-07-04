import { FaStar } from "react-icons/fa";

const Care = () => {
  return (
    <div className="container mx-auto pt-14">
      <div className="flex flex-col lg:flex-row justify-between items-stretch w-full">
        <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between lg:w-1/5">
          <p className="text-4xl font-bold text-start text-blue-600">90%</p>
          <p className="text-sm mt-2 text-gray-600 text-start">
            Patient satisfaction rate, reflecting our commitment.
          </p>
          <img
            src="https://i.ibb.co/mGQp2sV/Group-12.png"
            alt="Satisfaction icon"
            className="mt-4 h-28 w-28 mx-auto"
          />
        </div>

        <div className="lg:w-3/5 space-y-8 px-6">
          <h2 className="text-4xl font-semibold text-center text-gray-800">
            Comprehensive Care <br /> for Every Patient
          </h2>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="bg-[#FFFFF5] w-full p-6 rounded-xl shadow-lg text-start flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm mt-2 text-gray-600">
                  Board-certified doctors
                </p>
              </div>
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co/6mLvNHz/contract-1-1.png"
                  alt="Contract icon"
                  className="h-16 mt-4 "
                />
              </div>
            </div>

            <div className="bg-white w-full p-6 rounded-xl shadow-lg text-start flex flex-col justify-between mt-14 h-40">
              <div>
                <p className="text-3xl text-start font-bold text-blue-600 flex items-center gap-2">
                  4.8 <FaStar className="text-yellow-400" />
                </p>
                <p className="text-sm mt-2 text-gray-600">
                  Over 20,000 Patients
                </p>
              </div>
              <div className="flex mt-4 -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src="https://i.ibb.co/SX8Df01/Ellipse-3.png"
                    alt={`Patient ${i}`}
                    className="w-8 h-8 rounded-full border-2 border-white"
                  />
                ))}
              </div>
            </div>

            <div className="bg-[#FFFFF5] w-full p-6 rounded-xl shadow-lg text-start flex flex-col justify-between">
              <div>
                <p className="text-3xl font-bold text-blue-600">$5000</p>
                <p className="text-sm mt-2 text-gray-600">
                  Money spend for poor patient
                </p>
              </div>
              <div className="flex justify-end">
                <img
                  src="https://i.ibb.co/NmY5Y3z/Group-1.png"
                  alt="Savings graph"
                  className="h-16 mt-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl shadow-lg flex flex-col justify-between lg:w-1/5">
          <p className="text-4xl font-bold text-start text-blue-600">50+</p>
          <p className="text-sm mt-2 text-gray-600 text-start">
            Years of experience in providing exceptional healthcare.
          </p>
          <img
            src="https://i.ibb.co/Jdhwd44/Group.png"
            alt="Experience icon"
            className="mt-4 h-28 w-28 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Care;
