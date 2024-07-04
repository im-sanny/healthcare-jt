const Faq = () => {
  return (
    <section className="rounded-3xl bg-[#FFFFF5] mb-14">
      <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
        <p className="badge p-4 px-4">Faq</p>
        <h2 className="mb-5 text-4xl font-bold leading-none sm:text-3xl">
          Frequently Asked Question
        </h2>
        <div className="flex flex-col divide-y dark:divide-gray-300">
          <details>
            <summary className="py-2 outline-none cursor-pointer">
              What are your office hours?
            </summary>
            <div className="px-4 bg-base-100 rounded-t-md pb-4">
              <p>
                Our office hours vary by location, but typically we are open
                Monday through Friday from 8:00 AM to 5:00 PM. Some locations
                may offer extended hours or weekend appointments. Please contact
                your nearest clinic for specific hours.
              </p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
              How can I schedule an appointment?
            </summary>
            <div className="px-4 bg-base-100 rounded-t-md pb-4">
              <p></p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
              Do you accept insurance?
            </summary>
            <div className="px-4 bg-base-100 rounded-t-md pb-4">
              <p></p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
              What should I bring to my appointment?
            </summary>
            <div className="px-4 bg-base-100 rounded-t-md pb-4">
              <p></p>
            </div>
          </details>
          <details>
            <summary className="py-2 outline-none cursor-pointer">
              Do you offer telemedicine appointments?
            </summary>
            <div className="px-4 bg-base-100 rounded-t-md pb-4">
              <p></p>
            </div>
          </details>
        </div>
      </div>
    </section>
  );
};

export default Faq;
