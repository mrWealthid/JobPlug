import React from "react";

import InputComp from "./InputComp";

const Form = ({ input, setInput, handleChange, handleSubmit }) => {
  //   const HandleTitle = (e) => {
  //     setInput(e.target.value);
  //   };

  return (
    <div>
      <form
        className="w-8/12 lg:w-6/12 flex flex-col mx-auto"
        onSubmit={handleSubmit}
      >
        <p className=" my-3 text-xl font-Poppins font-bold">
          Apply For Job Openings Today
        </p>
        <p className=" my-3 text-md font-Poppins">
          All Vacancies Are Verified✔
        </p>
        <InputComp
          name={"title"}
          value={input.title}
          placeholder={"Job Title"}
          OnChange={handleChange}
        />

        <InputComp
          name={"company"}
          value={input.company}
          placeholder={"Organization"}
          OnChange={handleChange}
        />

        <InputComp
          name={"city"}
          value={input.city}
          placeholder={"Enter City"}
          OnChange={handleChange}
        />
        <InputComp
          name={"desc"}
          value={input.desc}
          placeholder={"Job Description"}
          OnChange={handleChange}
        />

        <label className="font-Poppins">
          <input
            className="my-3 mr-2"
            type="checkbox"
            name={"apply"}
            value={input.apply.checked}
            onChange={handleChange}
          />
          Available{" "}
        </label>

        <button className=" animate-float bg-blue-700 mt-10 hover:bg-blue-500 shadow rounded-br-3xl px-4 py-3 min-w-max  w-1/6 text-white font-Poppins rounded-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default Form;
