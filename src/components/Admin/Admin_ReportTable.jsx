import PropTypes from "prop-types";
import Admin_AllReport from "./Admin_AllReport";
import Admin_TodayReport from "./Admin_TodayReport";
import Admin_SubmittedReport from "./Admin_SubmittedReport";



const AdminReportTable = ({ selectedCallTab }) => {
  return (
    <div className="px-6">
      {selectedCallTab === "" || selectedCallTab === "All_Reports" ? (
       <Admin_AllReport/>
      ) : selectedCallTab === "Today's_Reports" ? (
        <Admin_TodayReport/>
      ) : selectedCallTab === "Submitted_Reports" ? (
         <Admin_SubmittedReport/>
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

AdminReportTable.propTypes = {
  selectedCallTab: PropTypes.any,
};

export default AdminReportTable;
