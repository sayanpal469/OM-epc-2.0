import { useEffect, useState } from "react";
import Loading from "../Loading";
import Admin_ExpenseTables from "./Admin_ExpenseTables";

function AdminExpenses() {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchOption, setSearchOption] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [savedSearch, setSavedSearch] = useState({ option: "", text: "" });
  
  
  const handleSave = () => {
    // Update the saved search state
    setSavedSearch({ option: searchOption, value: searchText });
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

  const handleCallTab = (callTab) => {
    setIsLoading(true);
    setSelectedCallTab(callTab);
  };

  const handleSearchOption = (option) => {
    setSearchOption(option);
    // Reset date inputs when switching between search options
    setSearchText("");
    setFromDate("");
    setToDate("");
  };

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(delay);
  }, [selectedCallTab]);

  const buttonClasses = (tabName) =>
    selectedCallTab === tabName
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";
  const button_All_Expenses =
    selectedCallTab === "" || selectedCallTab === "All_Calls"
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";

  return (
    <div>
      <div>{/* Empty space for navbar here */}</div>
      <div>
        <section className="w-full h-full">
          <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
            <div className="flex lg:flex-row sm:space-y-0 lg:w-[80%] w-[100%] space-y-5  flex-col justify-center items-end space-x-4">
              <button
                onClick={() => handleCallTab("Recent_Expenses")}
                className={`border py-2  w-full rounded  ${buttonClasses(
                  "Recent_Expenses"
                )}`}
              >
                Recent Expenses
              </button>
              <button
                onClick={() => handleCallTab("Approved_Expenses")}
                className={`border py-2  w-full rounded  ${buttonClasses(
                  "Approved_Expenses"
                )}`}
              >
                Approved Expenses
              </button>
              <button
                onClick={() => handleCallTab("Rejected_Expenses")}
                className={`border py-2  w-full rounded  ${buttonClasses(
                  "Rejected_Expenses"
                )}`}
              >
                Rejected Expenses
              </button>
              <button
                onClick={() => handleCallTab("All_Expenses")}
                className={`border  py-2 w-full rounded ${button_All_Expenses}`}
              >
                All Expenses
              </button>
            </div>

            <div className="w-full flex flex-col items-center my-5 lg:flex-row lg:justify-evenly">
              <div className="lg:flex lg:items-center lg:justify-between lg:w-[30%] w-full  space-y-4 lg:space-y-0">
                <div className="w-full lg:mb-0 mb-5">
                  <select
                    onChange={(e) => handleSearchOption(e.target.value)}
                    value={searchOption}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500 text-sm"
                  >
                    <option value="default">Select Search Option</option>
                    <option value="name">Search by Engineer name</option>
                    <option value="date">Search by Date</option>
                  </select>
                </div>
              </div>
              <div className="   lg:w-[60%] w-full ">
                {searchOption === "name" && (
                  <input
                    type="text"
                    id="engineerName"
                    value={searchText}
                    required
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
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                )}
              </div>
            </div>
            {searchText !== "" ? (
              <div className="w-full  flex justify-center items-center">
                <button
                  onClick={() => {
                    handleSave();
                  }}
                  className="border-2 rounded-md border-blue-500 px-2 py-2 mr-5"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    handleSearchOption("default");
                    setSavedSearch("");
                  }}
                  className="border-2 rounded-md border-red-500 px-2 py-2"
                >
                  Clear
                </button>
              </div>
            ) : null}
          </div>

          {isLoading && <Loading />}
          {
            <Admin_ExpenseTables
              selectedCallTab={selectedCallTab}
              savedSearch={savedSearch}
            />
          }
        </section>
      </div>
    </div>
  );
}

export default AdminExpenses;
