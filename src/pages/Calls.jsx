
import PropTypes from "prop-types";
import AdminCall from "../components/Admin/AdminCall";
import Engineer_Calls from "../components/Engineer_Calls";
const Calls = ({role}) => {
  console.log(role)
  return (
    <div className="flex">
    <div className="w-12 h-screen lg:w-20">
      {/* Empty space for navbar here */}
    </div>
    <div className="flex-1">
    {role === "Engineer" ? <Engineer_Calls /> : <AdminCall />}
    </div>
  </div>
  )
}
Calls.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Calls
