import { useState } from "react";
import PropTypes from "prop-types";
import ExpenseVeiwModal from "./ExpenseVeiwModal";
import useFetchExpenseByStatus from "../../hooks/useFetchExpenseByStatus";

const Admin_RecentExpenses = ({ savedSearch }) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const status = "RECENT";
  const { expenses, data } = useFetchExpenseByStatus(status);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const open_Expense_Details_Modal = (expense) => {
    setSelectedExpense(expense);
    setIsViewModalOpen(true);
  };

  const close_Expense_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  console.log({ expenses });
  const newExpenses = expenses
    .filter((expense) => {
      const submitDate = new Date(expense.date);
      const currentDate = new Date();
      const tenDaysAgo = new Date(currentDate);
      tenDaysAgo.setDate(currentDate.getDate() - 10);
      return submitDate >= tenDaysAgo;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA; // Sort in descending order by submit date
    });

  const filteredExpenses = () => {
    if (!savedSearch || !savedSearch.option || !savedSearch.value) {
      // No saved search, return all expenses
      return newExpenses;
    }

    // Filter based on savedSearch
    if (savedSearch.option === "date") {
      const [year, month, day] = savedSearch.value.split("-");
      const newDate = `${day}-${month}-${year}`;
      return expenses.filter((expense) => expense.date === newDate);
    } else if (savedSearch.option === "name") {
      // Filter by engineer name
      return newExpenses.filter((expense) =>
        expense.eng_name.toLowerCase().includes(savedSearch.value.toLowerCase())
      );
    }

    // Default: return all expenses
    return newExpenses;
  };
  return (
    <div>
      {data ? (
        <div>
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
              {filteredExpenses().map((expense, index) => (
                <tr key={index}>
                  <td data-label="Call ID">{expense.call_id}</td>
                  <td data-label="Company Name">{expense.company_name}</td>
                  <td data-label="Location">{expense.company_location}</td>
                  <td data-label="Engineer Name">{expense.eng_name}</td>
                  <td data-label="Amount">{expense.expense_amount}</td>
                  <td data-label="Submit Date">{expense.date}</td>
                  <td data-label="Status">{expense.status}</td>
                  {/* <td data-label="Expense Status">{expense.expense_status}</td> */}
                  {expense.status === "APPROVE" && (
                    <td data-label="Status" className="text-blue-500 text-sm">
                      Approved
                    </td>
                  )}
                  {expense.status === "REJECT" && (
                    <td data-label="Status" className="text-red-500 text-sm">
                      Rejected
                    </td>
                  )}
                  {expense.status === "PENDING" && (
                    <td data-label="Status">
                      <button
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        onClick={() => open_Expense_Details_Modal(expense)}
                      >
                        {" "}
                        View{" "}
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
          {isViewModalOpen ? (
            <ExpenseVeiwModal
              id={selectedExpense._id}
              companyName={selectedExpense.company_name}
              CallID={selectedExpense.call_id}
              location={selectedExpense.company_location}
              engineerName={selectedExpense.eng_name}
              amount={selectedExpense.expense_amount}
              submitDate={selectedExpense.date}
              Kilometer={selectedExpense.total_kilometer}
              closeModal={close_Expense_Details_Modal}
            />
          ) : null}
        </div>
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Expense to Show
        </div>
      )}
    </div>
  );
};
Admin_RecentExpenses.propTypes = {
  savedSearch: PropTypes.object,
};
export default Admin_RecentExpenses;
