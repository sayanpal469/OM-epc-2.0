import PropTypes from "prop-types";
import Admin_AllExpenses from "./Admin_AllExpenses";
import Admin_RejectedExpenses from "./Admin_RejectedExpenses";
import Admin_RecentExpenses from "./Admin_RecentExpense";
import Admin_ApproveExpenses from "./Admin_ApproveExpense";

const Admin_ExpenseTables = ({ selectedCallTab, savedSearch }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "All_Expenses" ? (
        <Admin_AllExpenses savedSearch={savedSearch} />
      ) : selectedCallTab === "Rejected_Expenses" ? (
        <Admin_RejectedExpenses savedSearch={savedSearch} />
      ) : selectedCallTab === "Recent_Expenses" ? (
        <Admin_RecentExpenses savedSearch={savedSearch} />
      ) : selectedCallTab === "Approved_Expenses" ? (
        <Admin_ApproveExpenses savedSearch={savedSearch} />
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

Admin_ExpenseTables.propTypes = {
  selectedCallTab: PropTypes.any,
  savedSearch: PropTypes.object,
};

export default Admin_ExpenseTables;
