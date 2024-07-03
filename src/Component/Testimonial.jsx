/* eslint-disable react/no-unescaped-entities */
import { FaStar } from "react-icons/fa";

const Testimonial = () => {
  return (
    <section className="rounded-md md:mb-5 lg:mb-14">
      <div className="container flex flex-col justify-center">
        <p className="badge p-4 px-4">Testimonial</p>
        <h2 className="mb-5 text-4xl font-bold leading-none sm:text-3xl">
          What they say about us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 w-full">
          <div className="p-6 rounded shadow-md w-80 bg-[#FFFFF5]">
            <p>
            I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold">Sarah D, </p>
                  <p className="text-sm font-light">IT Professional</p>
                </div>
                <p className="text-sm dark:text-yellow-200 flex gap-1">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded shadow-md w-80 bg-[#FFFFF5]">
            <p>
            I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold">Jenny</p>
                  <p className="text-sm font-light">Teacher</p>
                </div>
                <p className="text-sm dark:text-yellow-200 flex gap-1">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded shadow-md w-80 bg-[#FFFFF5]">
            <p>
            I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.
            </p>
            <div className="flex items-center mt-4 space-x-4">
              <img
                src="https://source.unsplash.com/50x50/?portrait?3"
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full dark:bg-gray-500"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-lg font-semibold">Jonas Tom</p>
                  <p className="text-sm font-light">CEO</p>
                </div>
                <p className="text-sm dark:text-yellow-200 flex gap-1">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
