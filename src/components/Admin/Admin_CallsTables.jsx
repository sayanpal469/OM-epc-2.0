import PropTypes from "prop-types";
import Admin_AllCalls from "./Admin_AllCalls";
import Admin_TodaysCalls from "./Admin_TodaysCalls";
import Admin_PendingCalls from "./Admin_PendingCalls";
import Admin_CompleteCall from "./Admin_CompleteCall";

const Admin_CallsTables = ({ selectedCallTab }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "All_Calls" ? (
       <Admin_AllCalls/>
      ) : selectedCallTab === "Today_Calls" ? (
      <Admin_TodaysCalls/>
      ) : selectedCallTab === "Pending_Calls" ? (
      <Admin_PendingCalls/>
      ) : selectedCallTab === "Completed_Calls" ? (
      <Admin_CompleteCall/>
      ): (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

Admin_CallsTables.propTypes = {
  selectedCallTab: PropTypes.any,
};

export default Admin_CallsTables;
