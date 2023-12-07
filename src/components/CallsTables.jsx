import PropTypes from "prop-types";
import AllCalls from "./AllCalls";
import PendingCalls from "./PendingCalls";
import TodaysCalls from "./TodaysCalls";

const CallsTables = ({ selectedCallTab }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "All_Calls" ? (
        <AllCalls />
      ) : selectedCallTab === "Today_Calls" ? (
        <TodaysCalls />
      ) : selectedCallTab === "Pending_Calls" ? (
        <PendingCalls />
      ) : selectedCallTab === "New_Calls" ? (
        <PendingCalls />
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
};

export default CallsTables;
