import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const phone = "89898098";

  const gotoContact = () => {
    navigate("/contact", { state: { phone: phone } });
  };

  return <button onClick={gotoContact}>Contact</button>;
};

export default Home;
