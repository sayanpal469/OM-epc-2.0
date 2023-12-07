import PropTypes from "prop-types";
import Admin_AllExpenses from "./Admin_AllExpenses";
import Admin_RejectedExpenses from "./Admin_RejectedExpenses";


const Admin_ExpenseTables = ({ selectedCallTab }) => {
  return (
    <div className="px-4">
      {selectedCallTab === "" || selectedCallTab === "All_Expenses" ? (
       <Admin_AllExpenses/>
      ) : selectedCallTab === "Rejected_Expenses" ? (
      <Admin_RejectedExpenses/>
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
};

export default Admin_ExpenseTables;
