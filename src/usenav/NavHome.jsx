import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";

const NavHome = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default NavHome;
