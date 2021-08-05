import React from "react";

const Jobs = ({ myJobs, handleApply, handleDel }) => {
  return (
    <div className="w-10/12 md:w-8/12 lg:w-6/12 mx-auto">
      {myJobs.map((jobs) => (
        <div
          className="flex flex-col my-6 p-6 transform hover:scale-110 justify-center rounded-lg shadow-2xl"
          key={jobs.title}
        >
          <h1 className="font-Poppins text-xl">{jobs.title}</h1>
          <p className="font-Poppins text-lg">{jobs.company}</p>
          <p className="font-Poppins text-lg">{jobs.city}</p>
          <p className="font-Poppins text-md">{jobs.desc}</p>
          <div className="flex justify-between mt-3">
            <button
              onClick={() => handleApply(jobs.desc)}
              className="px-4 py-3 font-Poppins  rounded-bl-2xl rounded hover:bg-green-400 bg-green-600 text-white"
            >
              Apply
            </button>

            <p className="font-Poppins text-gray-800">
              {jobs.apply ? "APPLIED📎" : ""}
            </p>

            <button
              onClick={() => handleDel(jobs.desc)}
              className="px-4 py-3 hover:bg-red-400 rounded-br-2xl rounded font-Poppins text-white bg-red-700"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Jobs;
