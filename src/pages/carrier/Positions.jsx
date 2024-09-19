import React from "react";
import { FaChevronRight } from "react-icons/fa";

const jobPositions = [
  {
    title: "Junior Full Stack Developer",
    experience: "0-2 Years",
    location: "Noida",
    team: "Developer",
    timeType: "Full Time",
    deadline: "05-09-2024",
  },
  {
    title: "Junior Full Stack Developer",
    experience: "0-2 Years",
    location: "Noida",
    team: "Developer",
    timeType: "Full Time",
    deadline: "05-09-2024",
  },
  {
    title: "Junior Full Stack Developer",
    experience: "0-2 Years",
    location: "Noida",
    team: "Developer",
    timeType: "Full Time",
    deadline: "05-09-2024",
  },
  {
    title: "Junior Full Stack Developer",
    experience: "0-2 Years",
    location: "Noida",
    team: "Developer",
    timeType: "Full Time",
    deadline: "05-09-2024",
  },
  {
    title: "Junior Full Stack Developer",
    experience: "0-2 Years",
    location: "Noida",
    team: "Developer",
    timeType: "Full Time",
    deadline: "05-09-2024",
  },
  {
    title: "Junior Full Stack Developer",
    experience: "0-2 Years",
    location: "Noida",
    team: "Developer",
    timeType: "Full Time",
    deadline: "05-09-2024",
  },
  // Repeat the same job object as necessary
  // ...
];

function Positions() {
  return (
    <div className="bg-blue-50 text-center items-center justify-center px-20 pb-32">
      <div className="pt-20 pb-20 text-blue-950 text-6xl font-semibold">
        Open Positions
      </div>
      <div className="flex flex-col gap-14 px-4">
        {/* Split the job positions into rows */}
        {[0, 1].map((row) => (
          <div
            key={row}
            id={`row${row + 1}`}
            className="flex flex-col md:flex-row gap-10 justify-center"
          >
            {jobPositions.slice(row * 3, row * 3 + 3).map((position, index) => (
              <div
                key={index}
                className="bg-white w-full md:w-1/4 flex flex-col rounded-2xl shadow-lg"
              >
                <h3 className="text-left text-blue-950 font-semibold text-3xl pt-3 pl-3 pb-1">
                  {position.title}
                </h3>
                <pre className="pl-3 pt-2 text-2xl font-medium text-left text-gray-500">
                  Experience:{" "}
                  <span className="text-blue-950 font-semibold">
                    {position.experience}
                  </span>
                </pre>
                <pre className="pl-3 pt-2 text-2xl font-medium text-left text-gray-500">
                  Location:{" "}
                  <span className="text-blue-950 font-semibold">
                    {position.location}
                  </span>
                </pre>
                <pre className="pl-3 pt-2 text-2xl font-medium text-left text-gray-500">
                  Team:{" "}
                  <span className="text-blue-950 font-semibold">
                    {position.team}
                  </span>
                </pre>
                <pre className="pl-3 pt-2 text-2xl font-medium text-left text-gray-500">
                  Time Type:{" "}
                  <span className="text-blue-950 font-semibold">
                    {position.timeType}
                  </span>
                </pre>
                <pre className="pl-3 py-2 text-lg text-red-600 text-left">
                  Deadline: {position.deadline}
                </pre>
                <div>
                  <button className="h-16 w-full flex justify-between items-center px-3 bg-blue-800 text-white rounded-b-2xl">
                    <h4 className="font-normal text-2xl">View Job</h4>
                    <div>
                      <FaChevronRight />
                    </div>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Positions;
