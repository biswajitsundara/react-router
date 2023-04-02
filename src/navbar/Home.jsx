import { Link } from "react-router-dom";
import "./HomeStyle.css";

const Home = () => {
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="link">
          Home
        </Link>
      </div>

      <div>
        <Link to="/about" className="link">
          About
        </Link>
      </div>

      <div>
        <Link to="/contact" className="link">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Home;
