import { Link } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>About Us Page</h1>
      <Link to="/">Home</Link>
      <br />
      <Link to="/contact">Contact</Link>
    </>
  );
};

export default About;
