import PropTypes from "prop-types";
import Admin_AllCalls from "./Admin_AllCalls";
import Admin_TodaysCalls from "./Admin_TodaysCalls";
import Admin_PendingCalls from "./Admin_PendingCalls";
import Admin_CompleteCall from "./Admin_CompleteCall";


const Admin_CallsTables = ({ selectedCallTab, saved_search, calls, refetch }) => {
  // console.log(calls)
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "All_Calls" ? (
        <Admin_AllCalls calls={calls} saved_search={saved_search} refetch={refetch} />
      ) : selectedCallTab === "Today_Calls" ? (
        <Admin_TodaysCalls saved_search={saved_search} calls={calls} refetch={refetch} />
      ) : selectedCallTab === "Pending_Calls" ? (
        <Admin_PendingCalls saved_search={saved_search} calls={calls} refetch={refetch} />
      ) : selectedCallTab === "Completed_Calls" ? (
        <Admin_CompleteCall saved_search={saved_search} />
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

Admin_CallsTables.propTypes = {
  selectedCallTab: PropTypes.any,
  saved_search: PropTypes.object,
  calls: PropTypes.array,
  refetch: PropTypes.func,
};

export default Admin_CallsTables;
