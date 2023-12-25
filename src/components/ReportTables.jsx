import PropTypes from "prop-types";
import AllReports from "./AllReports";
import SubmittedReports from "./SubmittedReports";
import TodaysReports from "./TodaysReports";


const ReportTables = ({ selectedCallTab }) => {
  return (
    <div className="px-6">
      {selectedCallTab === "" || selectedCallTab === "All_Reports" ? (
        <AllReports />
      ) : selectedCallTab === "Today's_Reports" ? (
        <TodaysReports />
      ) : selectedCallTab === "Submitted_Reports" ? (
        <SubmittedReports />
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

ReportTables.propTypes = {
  selectedCallTab: PropTypes.any,
};

export default ReportTables;
