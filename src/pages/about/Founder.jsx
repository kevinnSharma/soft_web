import React from "react";

function Founder() {
  return (
    <div className="min-h-screen flex flex-col">
      <div
        id="TITLE"
        className="flex flex-col md:flex-row text-center md:text-left justify-center items-center gap-6 md:gap-12 mb-10"
      >
        <h2 className="bg-blue-800 text-2xl md:text-3xl font-semibold py-4 px-5 text-white rounded-full">
          About Founder
        </h2>
        <h2 className="font-bold text-4xl md:text-7xl">Meet the Founder</h2>
      </div>

      <div className="w-full px-4 md:px-28 pt-10 md:pt-20 text-zinc-500 text-lg md:text-xl">
        <p className="text-2xl md:text-4xl tracking-wide font-semibold leading-snug mb-8">
          <span className="text-blue-800">Paramhans Singh,</span> the driving
          force behind{" "}
          <span className="text-blue-800">Softkingo Technologies Pvt. Ltd.,</span>
          brings years of{" "}
          <span className="text-blue-800">software development expertise.</span> His{" "}
          <span className="text-blue-800">innovative mindset, dedication to client</span>
          success, and <span className="text-blue-800">strategic vision</span> have
          shaped Softkingo’s commitment to excellence.
        </p>

        <div className="flex flex-col md:flex-row">
          <div className="relative mb-6 md:mb-0 w-full md:w-2/5">
            <img
              className="w-full h-[38rem] object-cover"
              src="src/assets/frame.png"
              alt="Paramhans Singh"
            />
            <h1 className="font-medium text-4xl md:text-6xl text-white z-30 absolute bottom-0 left-0 p-4">
              Paramhans
              <br />
              Singh
            </h1>
          </div>
          <div className="flex flex-col w-full md:w-3/5 md:ml-10">
            <div className="mt-4 md:mt-10">
              <p className="text-lg md:text-2xl font-[500]">
                <span className="text-blue-800">Paramhans Singh</span> is the
                driving force behind{" "}
                <span className="text-blue-800">Softkingo Technologies Pvt. Ltd.</span>{" "}
                With extensive experience in{" "}
                <span className="text-blue-800">software engineering</span> and
                a commitment to innovation, Paramhans has led the company to new
                heights since its inception in 2020. His{" "}
                <span className="text-blue-800">strategic vision</span> and
                hands-on approach have been pivotal in Softkingo's growth,
                guiding the development of over{" "}
                <span className="text-blue-800">100 successful products</span>.
                As a respected{" "}
                <span className="text-blue-800">leader and mentor,</span>{" "}
                Paramhans is dedicated to fostering a culture of{" "}
                <span className="text-blue-800">excellence and collaboration,</span>{" "}
                setting the standard for the company's ongoing success.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-6">
              <div className="flex flex-wrap justify-center md:justify-start font-medium text-white gap-4">
                <h3 className="bg-blue-800 py-2 px-4 rounded-full">
                  Visionary Thinker
                </h3>
                <h3 className="bg-blue-800 py-2 px-4 rounded-full">
                  Empathetic Leader
                </h3>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start font-medium text-white gap-4">
                <h3 className="bg-blue-800 py-2 px-4 rounded-full">
                  Creative Problem-Solver
                </h3>
                <h3 className="bg-blue-800 py-2 px-4 rounded-full">
                  Passionate Mentor
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Founder;
