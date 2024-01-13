import { useEffect, useState } from "react";
import AddExpense from "./AddExpense";
import PropTypes from "prop-types";
import { useLazyQuery } from "@apollo/client";
import { GET_EXPENSE_BY_ENG } from "../graphql/queries/graphql_queries";
import Engineer_ExpenseVeiwModal from "./Engineer_ExpenseVeiwModal";
const ExpenseTable = ({ engineer_info }) => {
  const [searchOption, setSearchOption] = useState("");
  const [selectedExpense, setSelectedExpense] = useState();
  const [expenseTable, setExpenseTable] = useState([]);
  const [this_month_expense_amount, setThis_month_expense_amount] =
    useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [getExpenseByEng, { data: expenseData, refetch }] = useLazyQuery(
    GET_EXPENSE_BY_ENG,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );

  useEffect(() => {
    if (engineer_info) {
      const timerId = setTimeout(() => {
        getExpenseByEng({
          variables: {
            engEmp: engineer_info.engineerByObject.eng_emp,
          },
        });
      }, 2000);
      return () => clearTimeout(timerId);
    }
  }, [engineer_info]);

  useEffect(() => {
    if (
      expenseData?.expenseReportByEng?.expense_list?.length > 0 &&
      expenseData
    ) {
      setExpenseTable(expenseData.expenseReportByEng.expense_list);
    }
  }, [expenseData]);

  useEffect(() => {
    // Function to check if a date falls within the current month
    const isDateInCurrentMonth = (dateString) => {
      const currentDate = new Date();
      const [day, month, year] = dateString.split("-");
      const dateToCheck = new Date(year, month - 1, day); // month is 0-indexed
      return (
        dateToCheck.getMonth() === currentDate.getMonth() &&
        dateToCheck.getFullYear() === currentDate.getFullYear()
      );
    };

    // Filter the expenseTable array
    const filteredExpenses = expenseTable.filter((expense) => {
      return (
        expense.isApprove === "APPROVE" && isDateInCurrentMonth(expense.date)
      );
    });

    // Calculate the sum of all expense_amount values
    const totalExpenseAmount = filteredExpenses.reduce((sum, expense) => {
      return sum + parseInt(expense.expense_amount, 10);
    }, 0);

    console.log(filteredExpenses);

    // Set the totalExpenseAmount state or use it as needed
    setThis_month_expense_amount(totalExpenseAmount);
  }, [expenseTable]);

  const handleSave = () => {
    console.log("Selected Search Option:", searchOption);
    if (searchOption === "between_dates") {
      console.log("From Date:", fromDate);
      console.log("To Date:", toDate);
    } else if (searchOption === "name") {
      console.log("Search Text:", searchText);
    } else if (searchOption === "date") {
      console.log("Selected Date:", fromDate);
    }
  };

  const handleSearchOption = (option) => {
    setSearchOption(option);
    // Reset date inputs when switching between search options
    setSearchText("");
    setFromDate("");
    setToDate("");
  };

  const openModal = (data) => {
    setSelectedExpense(data);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setSelectedExpense({});
    setIsModalOpen(false);
  };
  return (
    <div className="mx-5">
      {engineer_info && (
        <AddExpense
          this_month_expense_amount={this_month_expense_amount}
          engineer_id={engineer_info.engineerByObject.eng_emp}
          refetch={refetch}
        />
      )}
      {/* <div className="w-full flex flex-col items-center my-5 lg:flex-row lg:justify-evenly">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-[30%] w-full  space-y-4 lg:space-y-0">
          <div className="w-full lg:mb-0 mb-5">
            <select
              onChange={(e) => handleSearchOption(e.target.value)}
              value={searchOption}
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
            >
              <option value="defaule">Select Search Option</option>
              <option value="name">Search by Name/Company</option>
              <option value="date">Search by Date</option>
            </select>
          </div>
        </div>
        <div className="lg:w-[60%] w-full ">
          {searchOption === "between_dates" && (
            <div className="w-full flex lg:flex-row flex-col lg:space-y-0 space-y-2 items-center lg:space-x-4">
              <input
                type="date"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="w-full px-3 py-2 rounded-md border-blue-500 border-2"
                placeholder="From Date"
              />
              <h4>To</h4>
              <input
                type="date"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="w-full px-3 py-2 rounded-md  border-blue-500 border-2"
                placeholder="To Date"
              />
            </div>
          )}
          {searchOption === "name" && (
            <input
              type="text"
              className="w-full px-3 py-2 border-2 rounded-md border-blue-500"
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="Enter Name or Company"
            />
          )}
          {searchOption === "date" && (
            <input
              type="date"
              className="w-full px-3 py-2 border-2 rounded-md border-blue-500"
              placeholder="Select Date"
              onChange={(e) => setFromDate(e.target.value)}
            />
          )}
        </div>
      </div> */}
      {searchText !== "" || toDate !== "" || fromDate !== "" ? (
        <div className="w-full my-5 flex justify-center items-center">
          <button
            onClick={handleSave}
            className="border-2 rounded-md border-blue-500 px-2 py-2"
          >
            Save
          </button>
        </div>
      ) : null}
      <div className="">
        <table>
          <thead>
            <tr>
              <th scope="col">Call ID</th>
              <th scope="col">Company Name</th>
              <th scope="col"> Company Location</th>
              <th scope="col">Expense Amount</th>
              <th scope="col">Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {expenseTable?.map((expenseTable, index) => (
              <tr key={index}>
                <td data-label="Call ID">{expenseTable.call_id}</td>
                <td data-label="Company Name">{expenseTable.company_name}</td>
                <td data-label="Location">{expenseTable.company_location}</td>
                <td data-label="Expense Amount">
                  {expenseTable.expense_amount}
                </td>
                <td data-label="Status">{expenseTable.isApprove}</td>
                <td data-label="Actions">
                  {expenseTable.isApprove === "PENDING" ? (
                    <button
                      disabled={true}
                      className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                    >
                      Pending
                    </button>
                  ) : expenseTable.isApprove === "APPROVE" ? (
                    <button
                      onClick={() => {
                        // open_Call_Details_Modal(index);

                        openModal(expenseTable);
                      }}
                      className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                  ) : expenseTable.isApprove === "REJECT" ? (
                    <button
                      onClick={() => {
                        // open_Call_Details_Modal(index);
                        openModal(expenseTable);
                      }}
                      className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                  ) : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <Engineer_ExpenseVeiwModal
            selectedExpense={selectedExpense}
            closeModal={closeModal}
          />
        )}
      </div>
      {/* Modal */}
    </div>
  );
};
ExpenseTable.propTypes = {
  engineer_info: PropTypes.string.isRequired,
};
export default ExpenseTable;
