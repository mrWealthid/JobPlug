import React, { createContext, useEffect, useState } from "react";

const FirstContext = createContext({});

export const DataProvider = ({ children }) => {
  const [myJobs, setJobs] = useState([]);

  const [input, setInput] = useState({
    title: "",
    company: "",
    city: "",
    desc: "",
    apply: false,
  });

  //Using Local Storage
  useEffect(() => {
    let store = JSON.parse(localStorage.getItem("jobs"));
    if (store) setJobs(store);
  }, []);

  useEffect(() => {
    localStorage.setItem("jobs", JSON.stringify(myJobs));
  }, [myJobs]);

  const handleChange = ({ target }) => {
    setInput({ ...input, [target.name]: target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJobs([...myJobs, input]);

    setInput({
      title: "",
      company: "",
      city: "",
      desc: "",
      apply: false,
    });
  };

  const handleDel = (desc) => {
    const latest = myJobs.filter((jobs) => jobs.desc !== desc);

    setJobs(latest);
  };

  const handleApply = (desc) => {
    console.log(desc);
    setJobs(
      myJobs.map((card) =>
        card.desc === desc ? { ...card, apply: !card.apply } : card
      )
    );
  };

  return (
    <div>
      <FirstContext.Provider
        value={{
          input,
          setInput,
          handleChange,
          handleSubmit,
          myJobs,
          handleApply,
          handleDel,
        }}
      >
        {children}
      </FirstContext.Provider>
    </div>
  );
};

export default FirstContext;
