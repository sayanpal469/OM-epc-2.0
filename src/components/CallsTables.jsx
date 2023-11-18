import PropTypes from "prop-types";
import AllCalls from "./AllCalls";
import CompletedCalls from "./CompletedCalls";
import PendingCalls from "./PendingCalls";

const CallsTables = ({ selectedCallTab }) => {
  return (
    <div className="px-6">
      {selectedCallTab === "" || selectedCallTab === "All_Calls" ? (
        <AllCalls />
      ) : selectedCallTab === "Completed_Calls" ? (
        <CompletedCalls />
      ) : selectedCallTab === "Pending_Calls" ? (
        <PendingCalls />
      ) : (
        "No Calls to Show"
      )}
    </div>
  );
};

CallsTables.propTypes = {
  selectedCallTab: PropTypes.any,
};

export default CallsTables;
