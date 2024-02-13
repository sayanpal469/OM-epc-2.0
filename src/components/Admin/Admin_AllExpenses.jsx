import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ExpenseVeiwModal from "./ExpenseVeiwModal";
import useFetchExpenseByStatus from "../../hooks/useFetchExpenseByStatus";
import { JsonToExcel } from "react-json-to-excel";

const Admin_AllExpenses = ({ savedSearch }) => {
  const status = "ALL";
  const { data } = useFetchExpenseByStatus(status);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);
  const [expenses, setExpenses] = useState([]);
  const [value, setValue] = useState("");

  const open_Expense_Details_Modal = (expense) => {
    setSelectedExpense(expense);
    setIsViewModalOpen(true);
  };

  const close_Expense_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const filteredExpenses = () => {
    if (!savedSearch || !savedSearch.option || !savedSearch.value) {
      // No saved search, return all expenses
      return expenses;
    }

    // Filter based on savedSearch
    if (savedSearch.option === "date") {
      // Filter by expense submit date
      const [year, month, day] = savedSearch.value.split("-");
      const newDate = `${day}-${month}-${year}`;
      return expenses.filter((expense) => expense.date === newDate);
    } else if (savedSearch.option === "name") {
      // Filter by engineer name
      console.log(savedSearch.value);
      return expenses.filter((expense) =>
        expense.eng_name.toLowerCase().includes(savedSearch.value.toLowerCase())
      );
    }

    // Default: return all expenses
    return expenses;
  };

  console.log(value);

  useEffect(() => {
    if (data) {
      const reversedExpenses = [...data.expenseReportsByStatus].reverse();
      setExpenses(reversedExpenses);
    }
  }, [data]);

  const jsonData = expenses.map((expense) => ({
    date: expense.date,
    time: expense.time,
    emp_id: expense.eng_emp,
    eng_name: expense.eng_name,
    company_name: expense.company_name,
    company_location: expense.company_location,
    call_id: expense.call_id,
    total_kilometer: expense.total_kilometer,
    expense_amount: expense.expense_amount,
    isApprove: expense.isApprove,
    status: expense.status,
    eng_desc: expense.eng_desc,
    admin_desc: expense.admin_desc,
  }));

  const currentMonth = new Date().getMonth() + 1;

  // Filter expenses for the current month
  const currentMonthExpenses = expenses.filter((report) => {
    const reportMonth = new Date(report.date).getMonth() + 1;
    return reportMonth === currentMonth;
  });

  // Calculate the sum of expense_amount for the current month
  const totalExpenseAmount = currentMonthExpenses.reduce(
    (sum, report) => sum + parseFloat(report.expense_amount),
    0
  );
  const calculateTotalAmount = (status) => {
    return currentMonthExpenses
      .filter((report) => report.status === status)
      .reduce((sum, report) => sum + parseFloat(report.expense_amount), 0);
  };

  const approvedAmount = calculateTotalAmount("APPROVE");
  const pendingAmount = calculateTotalAmount("PENDING");

  return (
    <div>
      {data ? (
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <JsonToExcel
              title="Download as Excel"
              data={jsonData}
              fileName="all-expense-report"
              btnClassName=""
              btnColor="#7CB9E8"
            />
            <div
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "flex-start",
                flexDirection: "column",

              }}
            >
              <p className="text-lg font-bold text-blue-500">
                Total Expense: ₹ {totalExpenseAmount}
              </p>
              <p className="text-lg font-bold text-green-500">
                Approved Expense: ₹ {approvedAmount}
              </p>
              <p className="text-lg font-bold text-yellow-600">
                Pending Expense: ₹ {pendingAmount}
              </p>
            </div>
          </div>

          <table className="mt-2">
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

Admin_AllExpenses.propTypes = {
  savedSearch: PropTypes.object,
};

export default Admin_AllExpenses;
