import { useState } from "react";
import ExpenseVeiwModal from "./ExpenseVeiwModal";
import useFetchExpenseByStatus from "../../hooks/useFetchExpenseByStatus";

const Admin_AllExpenses = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const status = "ALL";
  const { expenses, data } = useFetchExpenseByStatus(status);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const open_Expense_Details_Modal = (expense) => {
    setSelectedExpense(expense);
    setIsViewModalOpen(true);
  };

  const close_Expense_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  // console.log(data?.expenseReportsByStatus);

  return (
    <div>
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Call_ID</th>
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
              {expenses.map((expense) => (
                <tr key={expense.call_id}>
                  <td data-label="Call_ID">{expense.call_id}</td>
                  <td data-label="Company Name">{expense.company_name}</td>
                  <td data-label="Location">{expense.company_location}</td>
                  <td data-label="Engineer Name">{expense.eng_name}</td>
                  <td data-label="Amount">{expense.expense_amount}</td>
                  <td data-label="Submit Date">{expense.date}</td>
                  <td data-label="Status">{expense.status}</td>
                  {/* <td data-label="Expense Status">{expense.expense_status}</td> */}
                  {expense.status === "APPROVE" && (
                    <td data-label="Status" className="text-blue-500 text-lg">
                      Approved
                    </td>
                  )}
                  {expense.status === "REJECT" && (
                    <td data-label="Status" className="text-red-500 text-lg">
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

export default Admin_AllExpenses;
