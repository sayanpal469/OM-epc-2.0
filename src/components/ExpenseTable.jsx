import AddExpense from "./AddExpense";

const ExpenseTable = () => {
  return (
    <div className="mx-5">
      <AddExpense />
      <div className="">
        <table>
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col"> Assigned Date</th>
              <th scope="col">Status</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Assigned Date">04/01/2016</td>
              <td data-label="status">Yes</td>
              <td data-label="Submit Date">04/01/2016</td>
              <td data-label="Actions">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  View
                </button>
              </td>
            </tr>
            <tr>
              <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Assigned Date">04/01/2016</td>
              <td data-label="status">No</td>
              <td data-label="Submit Date">NIL</td>
              <td data-label="Actions">
                <button
                  className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded cursor-not-allowed opacity-50"
                  disabled
                >
                  Not Available
                </button>
              </td>
            </tr>
            <tr>
              <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Assigned Date">04/01/2016</td>
              <td data-label="status">Yes</td>
              <td data-label="Submit Date">04/01/2016</td>
              <td data-label="Actions">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  View
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Modal */}
    </div>
  );
};

export default ExpenseTable;
