import PropTypes from "prop-types";
import PendingCalls from "./PendingCalls";
import TodaysCalls from "./TodaysCalls";

const CallsTables = ({
  selectedCallTab,
  tablesData,
  refetch,
  eng_emp,
}) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "Today_Calls" ? (
    
        <TodaysCalls
          refetch={refetch}
          tablesData={tablesData}
          selectedCallTab={selectedCallTab}
          eng_emp={eng_emp}
        />
      ) : selectedCallTab === "Pending_Calls" ? (
        <PendingCalls
          refetch={refetch}
          tablesData={tablesData}
          selectedCallTab={selectedCallTab}
          eng_emp={eng_emp}
        />
      ) :(
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
  refetch: PropTypes.func.isRequired,
  engineer_data: PropTypes.object.isRequired,
  eng_emp: PropTypes.string.isRequired,
};

export default CallsTables;
