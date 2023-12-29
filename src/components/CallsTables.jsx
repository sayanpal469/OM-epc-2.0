import PropTypes from "prop-types";
import AllCalls from "./AllCalls";
import NewCalls from "./NewCalls";
import PendingCalls from "./PendingCalls";
import TodaysCalls from "./TodaysCalls";

const CallsTables = ({ selectedCallTab, tablesData }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "All_Calls" ? (
        <AllCalls tablesData={tablesData} />
      ) : selectedCallTab === "Today_Calls" ? (
        <TodaysCalls tablesData={tablesData} />
      ) : selectedCallTab === "Pending_Calls" ? (
        <PendingCalls tablesData={tablesData} />
      ) : selectedCallTab === "New_Calls" ? (
        <NewCalls tablesData={tablesData} />
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

CallsTables.propTypes = {
  selectedCallTab: PropTypes.any,
  tablesData: PropTypes.any.isRequired,
};

export default CallsTables;
