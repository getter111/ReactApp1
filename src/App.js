import "./App.css";
import React, { useEffect, useState } from "react";
import General from "./components/general";
import Academic from "./components/academic";
import Experience from "./components/experience";
import DisplayBtn from "./components/displayBtn";
import DisplayForm from "./components/displayForm";

const App = () => {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [eduInfo, setEduInfo] = useState({
    education: "",
    degree: "",
  });
  const [workInfo, setWorkInfo] = useState({
    company: "",
    position: "",
    tasks: "",
    timeWorked: "",
  });
  // const [visibility, setVisibility] = useState({ visible: false });
  const [visibility, setVisibility] = useState(false);

  const handleGeneralInfo = (e) => {
    const { name, value } = e.target;
    setGeneralInfo({
      ...generalInfo,
      [name]: value,
    });
  };

  const handleEduInfo = (e) => {
    const { name, value } = e.target;
    setEduInfo({
      ...eduInfo,
      [name]: value,
    });
  };

  const handleWorkInfo = (e) => {
    const { name, value } = e.target;
    setWorkInfo({
      ...workInfo,
      [name]: value,
    });
  };

  // const handleClick = () => {
  //   setVisibility({
  //     ...visibility,
  //     visible: !visibility.visible,
  //   });
  // };

  const handleClick = () => {
    setVisibility((prev) => !prev);
  };

  useEffect(() => {
    console.log("visible is: ", visibility);
  }, [visibility]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setGeneralInfo({
      name: "",
      email: "",
      phone: "",
    });
    setEduInfo({
      education: "",
      degree: "",
    });
    setWorkInfo({
      company: "",
      position: "",
      tasks: "",
      timeWorked: "",
    });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <General generalInfo={generalInfo} handleChange={handleGeneralInfo} />
        <Academic eduInfo={eduInfo} handleChange={handleEduInfo} />
        <Experience workInfo={workInfo} handleChange={handleWorkInfo} />
        <button className="submit-btn" type="submit">
          Create
        </button>
        <DisplayBtn handleClick={handleClick} display={visibility} />
        {visibility ? (
          <DisplayForm
            workInfo={workInfo}
            eduInfo={eduInfo}
            generalInfo={generalInfo}
          />
        ) : (
          <div>hidden</div>
        )}
      </form>
    </div>
  );
};
export default App;
