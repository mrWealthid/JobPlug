import React from "react";

const InputComp = ({ name, value, placeholder, OnChange }) => {
  return (
    <div>
      <input
        className=" border outline-none border-blue-200 rounded-lg my-3 p-2 w-full"
        type="text"
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={OnChange}
      />
    </div>
  );
};

export default InputComp;
