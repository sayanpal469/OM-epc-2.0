import useFetchExpenseByStatus from "../../hooks/useFetchExpenseByStatus";

const Admin_ApproveExpenses = () => {
  const status = "APPROVE";
  const { expenses, data } = useFetchExpenseByStatus(status);

  return (
    <div>
      {data ? (
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
                <td data-label="Status" className="text-blue-500 text-lg">
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
export default Admin_ApproveExpenses;
