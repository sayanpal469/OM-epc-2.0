import { useState } from "react";
import AddExpense from "./AddExpense";
const ExpenseTable = () => {
  const [searchOption, setSearchOption] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchText, setSearchText] = useState("");
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

  return (
    <div className="mx-5">
      <AddExpense />
      <div className="w-full flex flex-col items-center my-5 lg:flex-row lg:justify-evenly">
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
              <option value="between_dates">Search Between Dates</option>
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
      </div>
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
              <th scope="col"> Assigned Date</th>
              <th scope="col">Status</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <td data-label="Call ID">call_08/12/2023_01</td>
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
            <td data-label="Call ID">call_08/12/2023_01</td>
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
            <td data-label="Call ID">call_08/12/2023_01</td>
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
