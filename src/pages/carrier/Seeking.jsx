import React from "react";
import { FaArrowRight } from "react-icons/fa";

function Seeking() {
  return (
    <div className="w-screen text-center bg-blue-50 pt-24">
      {/* Heading */}
      <div className="text-7xl font-thin leading-tight mb-16">
        We're seeking teammates
        <br />
        who believe in our mission
      </div>
      {/* Paragraph */}
      <div className="text-xl font-normal leading-tight">
        <p>
          At Softkingo, you have the opportunity to empower businesses and
          individuals with
          <br />
          innovative technology solutions. We put people first in our mission to
          create impactful
          <br />
          and accessible technology. Our teams are built to meet and exceed the
          diverse needs
          <br />
          of our clients, driving success and innovation across the board.
        </p>
      </div>

      {/* Grid */}
      <div className="pt-10 flex flex-col gap-10">
        <div className="flex justify-center items-center space-x-20 p-4">
          {/* Image Container */}
          <div className="bg-black h-96 w-1/3 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="src/assets/pic.png"
              alt="Image1"
            />
          </div>

          {/* Text Container */}
          <div className="bg-white h-96 w-1/3 border shadow-lg border-gray-300 flex flex-col rounded-lg px-8 py-8 ">
            <h3 className="text-left text-black font-semibold text-3xl">
              You recognize the transformative power of Technology
            </h3>

            <p className="text-left text-black font-medium pt-5 text-lg">
              You believe in the potential of technology to drive change and the
              importance of making it accessible to everyone. You understand
              that innovative solutions can propel businesses forward, and
              you're eager to integrate cutting-edge technology into your daily
              work to enhance efficiency and spark creativity.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-20 p-4">
          {/* Text Container */}
          <div className="bg-white h-96 w-1/3 border shadow-lg border-gray-300 flex flex-col rounded-lg px-8 py-8 ">
            <h3 className="text-left text-black font-semibold text-3xl">
              You embrace innovation and continuous improvement
            </h3>
            <p className="text-left text-black font-medium pt-5 text-lg">
              You're passionate about refining processes, streamlining
              workflows, and welcoming change as a growth opportunity. You
              tackle challenges beyond your role, leveraging your diverse skill
              set to move our work forward. You actively seek solutions,
              collaborate with others, and draw on your problem-solving
              abilities to overcome complex situations.
            </p>
          </div>

          {/* Image Container */}
          <div className="bg-black h-96 w-1/3 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="src/assets/pic.png"
              alt="Image1"
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-20 p-4">
          {/* Image Container */}
          <div className="bg-black h-96 w-1/3 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="src/assets/pic.png"
              alt="Image1"
            />
          </div>

          {/* Text Container */}
          <div className="bg-white h-96 w-1/3 border shadow-lg border-gray-300 flex flex-col rounded-lg px-8 py-8 ">
            <h3 className="text-left text-black font-semibold text-3xl">
              You prioritize the client experience
            </h3>

            <p className="text-left text-black font-medium pt-5 text-lg">
              You're dedicated to helping clients achieve their business goals
              with our technology solutions. You value feedback and are focused
              on providing solution-oriented support. Striving for progress over
              perfection, you take proactive steps to deliver exceptional
              experiences to our clients and community.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center space-x-20 p-4">
          {/* Text Container */}
          <div className="bg-white h-96 w-1/3 border shadow-lg border-gray-300 flex flex-col rounded-lg px-8 py-8 ">
            <h3 className="text-left text-black font-semibold text-3xl">
              You value every voice
            </h3>
            <p className="text-left text-black font-medium pt-5 text-lg">
              You believe that every team member should feel included and heard.
              You contribute to a culture that prioritizes diversity, inclusion,
              and well-being. You work to create a space where diverse
              perspectives are embraced, ensuring a supportive and inclusive
              workplace for all.
            </p>
          </div>

          {/* Image Container */}
          <div className="bg-black h-96 w-1/3 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="src/assets/pic.png"
              alt="Image1"
            />
          </div>
        </div>
        <div className="flex justify-center items-center space-x-20 p-4">
          {/* Image Container */}
          <div className="bg-black h-96 w-1/3 flex items-center justify-center rounded-lg overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="src/assets/pic.png"
              alt="Image1"
            />
          </div>

          {/* Text Container */}
          <div className="bg-white h-96 w-1/3 border shadow-lg border-gray-300 flex flex-col rounded-lg px-8 py-8 ">
            <h3 className="text-left text-black font-semibold text-3xl">
              You communicate openly and build strong connections
            </h3>

            <p className="text-left text-black font-medium pt-5 text-lg">
              You thrive in a collaborative work environment, whether it's
              virtual or in-person. You value clear communication that fosters
              strong relationships within the team. You aim to keep information
              accessible and promote an open, supportive, and connected
              workplace.
            </p>
          </div>
        </div>
      </div>
      <div className="flex pt-32 pb-24 text-center justify-center items-center gap-2">
        <div className=" font-semibold text-lg">
          Learn more about our company values
        </div>
        <div>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
}

export default Seeking;