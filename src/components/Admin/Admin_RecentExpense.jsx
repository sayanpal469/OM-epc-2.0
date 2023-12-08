import { useState } from "react";
import ExpenseVeiwModal from "./ExpenseVeiwModal";


const Admin_RecentExpenses = () => {
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    
    const open_Expense_Details_Modal = () => {
      setIsViewModalOpen(true);
    };
  
    const close_Expense_Details_Modal = () => {
      setIsViewModalOpen(false);
    };
  return (
    <div>
     <table>
          <thead>
            <tr>
              <th scope="col">Company Name</th>
              <th scope="col">Location</th>
              <th scope="col">Engineer Name</th>
              <th scope="col">Amount</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Status</th>
              <th scope="col">Expense Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Location">Kolkata</td>
              <td data-label="Enginner Name">Engineer 1</td>
              <td data-label="Amount">9999</td>
              <td data-label="Submit Date">09/11/2016</td>
              <td data-label="status">Completed</td>
              <td data-label="Expense Status">No</td>
              <td data-label="Actions">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={open_Expense_Details_Modal}
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
            <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Location">Kolkata</td>
              <td data-label="Enginner Name">Engineer 2</td>
              <td data-label="Amount">9999</td>
              <td data-label="Submit Date">04/02/2016</td>
              <td data-label="status">Pending</td>
              <td data-label="Expense Status">No</td>
              <td data-label="Actions">
                <span
                  className="Font-semiBold"
                  disabled
                >
                NA
                </span>
              </td>
            </tr>
            <tr>
            <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Location">Kolkata</td>
              <td data-label="Enginner Name">Engineer 3</td>
              <td data-label="Amount">9999</td>
              <td data-label="Submit Date">14/01/2018</td>
              <td data-label="status">Completed</td>
              <td data-label="Expense Status">No</td>
              <td data-label="Actions">
                <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={open_Expense_Details_Modal}
                >
                  View
                </button>
              </td>
            </tr>
            <tr>
            <td data-label="Company Name">Visa - 3412</td>
              <td data-label="Location">Kolkata</td>
              <td data-label="Enginner Name">Engineer 4</td>
              <td data-label="Amount">9999</td>
              <td data-label="Submit Date">22/01/2016</td>
              <td data-label="status">completed</td>
              <td data-label="Expense Status">Yes</td>
              <td data-label="Actions">
                <button
                  className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded cursor-not-allowed opacity-50"
                  disabled
                >
                 Rejected
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        {isViewModalOpen ? (
        <ExpenseVeiwModal
          companyName="Visa - 3412"
          location="Kolkata"
          engineerName="Engineer 1"
          amount="77777"
          submitDate="15/01/2018"
          Kilometer="15 Km"
          closeModal={close_Expense_Details_Modal}
        />
      )  : null}
    </div>
  )
}

export default Admin_RecentExpenses
