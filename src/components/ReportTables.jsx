import PropTypes from "prop-types";
import AllReports from "./AllReports";
import SubmittedReports from "./SubmittedReports";
import TodaysReports from "./TodaysReports";
import CreateReportModal from "./EngineerReportModal/CreateReportModal";


const ReportTables = ({ selectedCallTab , tableData,eng_name }) => {
  return (
    <div className="px-6">
      {selectedCallTab === "" || selectedCallTab === "All_Reports" ? (
        <AllReports   tableData = {tableData} eng_name={eng_name}/>
      ) : selectedCallTab === "Today's_Reports" ? (
        <TodaysReports tableData = {tableData} eng_name={eng_name} />
      ) : selectedCallTab === "Submitted_Reports" ? (
        <SubmittedReports />
      ) : selectedCallTab === "Create_Report" ? (
        <CreateReportModal/>
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
  tableData:PropTypes.array.isRequired,
  eng_name:PropTypes.string.isRequired
};

export default ReportTables;
