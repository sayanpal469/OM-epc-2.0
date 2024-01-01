import useFetchExpenseByStatus from "../../hooks/useFetchExpenseByStatus";
import PropTypes from "prop-types";
const Admin_ApproveExpenses = ({ savedSearch }) => {
  const status = "APPROVE";
  const { expenses, data } = useFetchExpenseByStatus(status);
  const filteredExpenses = () => {
    if (!savedSearch || !savedSearch.option || !savedSearch.value) {
      // No saved search, return all expenses
      return expenses;
    }

    // Filter based on savedSearch
    if (savedSearch.option === "date") {
      // Filter by expense submit date
      return expenses.filter((expense) => expense.date === savedSearch.value);
    } else if (savedSearch.option === "name") {
      // Filter by engineer name
      return expenses.filter((expense) =>
        expense.eng_name.toLowerCase().includes(savedSearch.value.toLowerCase())
      );
    }

    // Default: return all expenses
    return expenses;
  };
  return (
    <div>
      {data ? (
        <table>
          <thead>
            <tr>
              <th scope="col">Call ID</th>
              <th scope="col">Company Name</th>
              <th scope="col">Location</th>
              <th scope="col">Engineer Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Status</th>
              {/* <th scope="col">Expense Status</th> */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredExpenses().map((expense,index) => (
              <tr key={index}>
                <td data-label="Call ID">{expense.call_id}</td>
                <td data-label="Company Name">{expense.company_name}</td>
                <td data-label="Location">{expense.company_location}</td>
                <td data-label="Engineer Name">{expense.eng_name}</td>
                <td data-label="Amount">{expense.expense_amount}</td>
                <td data-label="Submit Date">
                  {expense.date.split("-").reverse().join("-")}
                </td>
                <td data-label="Status">{expense.status}</td>
                {/* <td data-label="Expense Status">{expense.expense_status}</td> */}
                <td data-label="Status" className="text-blue-500 text-sm">
                  Approved
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Expense to Show
        </div>
      )}
    </div>
  );
};
Admin_ApproveExpenses.propTypes = {
  savedSearch: PropTypes.object,
};
export default Admin_ApproveExpenses;
