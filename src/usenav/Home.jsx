import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const gotoAbout = () => {
    navigate("/about");
  };

  return <button onClick={gotoAbout}>About</button>;
};

export default Home;
