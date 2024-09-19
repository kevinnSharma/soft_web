import React from "react";
import { FaDollarSign } from "react-icons/fa6";


function Support() {
  return (
    <div className="text-center pt-20 pb-36">
      <div className="text-7xl font-thin">Supporting our Team</div>
      
      <div className="mt-10 flex flex-col ">
         <div id="row1" className="flex justify-center items-center space-x-14 p-4">
          <div className="bg-white h-80 w-2/5 flex flex-col gap-4 rounded-lg px-8 py-8 ">
          <div className="h-12 w-12 "><img src="src/assets/dollar.png" alt="" /></div>
          <h3 className="text-left text-black font-semibold text-2xl">
              Competitive Pay
            </h3>

            <p className="text-left text-black font-medium text-lg">
            We believe in rewarding our team for their impact and contributions to Softkingo's success. Our compensation strategy is performance-driven, ensuring that every team member is recognized for their achievements. We also offer bonuses, equity options, and performance-based rewards to celebrate collective and individual successes.
            </p>
          </div>
          <div className="bg-white h-80 w-2/5 flex flex-col gap-4 rounded-lg px-8 py-8 ">
            <div className="h-12 w-12"><img src="src/assets/heart.png" alt="" /></div>
            <h3 className="text-left text-black font-semibold text-2xl">Wellness</h3>
            <p className="text-left text-black font-medium text-lg">
            We deeply care about the well-being of every Softkingo team member. Our holistic approach to wellness includes flexible resources tailored to support your physical, mental, and emotional health. From wellness coaching to tailored wellness programs, we invest in your overall well-being to help you thrive both at work and in life.
            </p>
          </div>
         </div>
         <div id="row2" className="flex justify-center items-center space-x-14 p-4">
          <div className="bg-white h-80 w-2/5 flex flex-col gap-4 rounded-lg px-8 py-8 ">
          <div className="h-12 w-12 "><img src="src/assets/stairs.png" alt="" /></div>
          <h3 className="text-left text-black font-semibold text-2xl">
              Personal Growth
            </h3>

            <p className="text-left text-black font-medium text-lg">
            At Softkingo, continuous learning and personal growth are top priorities. We provide coaching, workshops, and resources to help you develop professionally. With biannual goal-setting, feedback cycles, and access to learning budgets, we support your growth journey and empower you to reach your full potential.
            </p>
          </div>
          <div className="bg-white h-80 w-2/5 flex flex-col gap-4 rounded-lg px-8 py-8 ">
            <div className="h-12 w-12"><img src="src/assets/growth.png" alt="" /></div>
            <h3 className="text-left text-black font-semibold text-2xl">Carrier Development Program</h3>
            <p className="text-left text-black font-medium text-lg">
            We are committed to your long-term success at Softkingo. Through our Career Development Program, we help you navigate your career path, offering growth plans, an internal job board, and personalized support. Whether you're looking to advance within Softkingo or explore new opportunities, we're here to support your journey every step of the way.
            </p>
          </div>
         </div>
      </div>
    </div>
  );
}

export default Support;
