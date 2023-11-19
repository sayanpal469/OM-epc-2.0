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
