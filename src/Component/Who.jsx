import { MdOutlineArrowOutward } from "react-icons/md";

const Who = () => {
  return (
    <section className="py-10">
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col justify-between w-full overflow-hidden rounded-md lg:flex-row-reverse gap-5">
          <div>
            <img
              src="https://i.ibb.co/nwwN1nX/Rectangle-24.png"
              alt=""
              className="rounded-2xl min-w-[468px] h-[370px]"
            />
            <div className="p-4 bg-[#343268] text-white w-[300px] z-10 absolute -mt-20 right-1/3 rounded-3xl">
              <p>Our mission is simple</p>
              <p className="">
                To provide high-quality healthcare services that are accessible,
                personalized, and patient-centered.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center flex-1 py-6">
            <span className="text-xs uppercase badge">Who we are</span>
            <h3 className="text-3xl font-bold">
              We Help To <br /> Get Solutions
            </h3>
            <p className="my-6 w-[450px] py-5">
              We are proud to be a trusted healthcare provider in our community,
              and we look forward to serving you and your family with
              excellence, integrity, and compassion. Your health is our
              priority, and we are here for you every step of the way. We
              believe in treating each patient with dignity, respect, and
              empathy, ensuring that they receive the attention and care they
              deserve.
            </p>

            <button type="button" className="self-start btn bg-yellow-400">
              Learn more <MdOutlineArrowOutward size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
