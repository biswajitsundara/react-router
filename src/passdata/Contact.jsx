import { useLocation } from "react-router-dom";

const Contact = () => {
  const location = useLocation();
  console.log(location.state);
  const phone = location.state.phone;

  return (
    <>
      <h1>Contact me at {phone}</h1>
    </>
  );
};

export default Contact;
