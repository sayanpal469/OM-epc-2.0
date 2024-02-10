import PropTypes from "prop-types";
import Admin_AllReport from "./Admin_AllReport";
import Admin_TodayReport from "./Admin_TodayReport";

const AdminReportTable = ({ selectedCallTab, data }) => {
  // console.log(data)
  
  return data ? (
    <div className="px-6">
      {selectedCallTab === "" || selectedCallTab === "All_Reports" ? (
        <Admin_AllReport data={data} />
      ) : selectedCallTab === "Today's_Reports" ? (
        <Admin_TodayReport data={data} />
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Report to Show
        </div>
      )}
    </div>
  ) : null;
};

AdminReportTable.propTypes = {
  selectedCallTab: PropTypes.any,
  data: PropTypes.any,
};

export default AdminReportTable;
