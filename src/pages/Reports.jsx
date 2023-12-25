
import PropTypes from "prop-types";
import Engineer_Report from "../components/Engineer_Report";
import Admin_Report from "../components/Admin/Admin_Report";

const Reports = ({role}) => {
  console.log(role)
  return (
    <div className="flex">
    <div className="w-12 h-screen lg:w-20">
      {/* Empty space for navbar here */}
    </div>
    <div className="flex-1">
    {role === "Engineer" ? <Engineer_Report/> : <Admin_Report/>}
    </div>
  </div>
  )
}
Reports.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Reports
