import Form from "./component/Form";
import Jobs from "./component/Jobs";
import Header from "./component/Header";
import { useState, useEffect } from "react";

function App() {
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
    <div className="">
      <Header />

      <Form
        input={input}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        setInput={setInput}
      />

      <Jobs myJobs={myJobs} handleApply={handleApply} handleDel={handleDel} />
    </div>
  );
}

export default App;
