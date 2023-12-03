// import Navbar from "../features/navbar/Navbar";
import Dashboard from "./Dashboard";
import PropTypes from "prop-types";
import Admin_Dashboard from "./Admin_Dashboard";
const Home = ({ role }) => {
  console.log({ role });
  return (
    <div>
      {/* Content here */}
      {/* <Navbar/> */}
      {role === "Engineer" ? <Dashboard /> : <Admin_Dashboard role={role} />}
    </div>
  );
};

Home.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Home;
