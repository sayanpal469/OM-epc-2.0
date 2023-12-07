import PropTypes from "prop-types";
import AdminExpenses from "../components/Admin/AdminExpenses";
import ExpenseTable from "../components/ExpenseTable";

const Expenses = ({role}) => {
  console.log(role)
  return (
    <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1">
      {role === "Engineer" ? <ExpenseTable /> : <AdminExpenses/>}
      </div>
    </div>
  );
};
Expenses.propTypes = {
  role: PropTypes.string.isRequired,
};
export default Expenses;
