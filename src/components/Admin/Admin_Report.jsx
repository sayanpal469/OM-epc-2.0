import { useState, useEffect } from "react";
import Loading from "../Loading";
import ReportTables from "../ReportTables";
const Admin_Report = () => {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);
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
  const button_All_Reports =
    selectedCallTab === "" || selectedCallTab === "All_Reports"
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";

  return (
    <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1">
        <section className="w-full h-full">
          <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
            <div className="flex lg:flex-row sm:space-y-0 lg:w-[50%] w-[100%] space-y-5  flex-col justify-center items-end space-x-4">
              <button
                onClick={() => handleCallTab("Submitted_Reports")}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Submitted_Reports"
                )}`}
              >
                Submitted Reports
              </button>
              <button
                onClick={() => handleCallTab("Today's_Reports")}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Today's_Reports"
                )}`}
              >
                {`Today's Reports`}
              </button>
              <button
                onClick={() => handleCallTab("All_Reports")}
                className={`border  py-2 w-full rounded ${button_All_Reports}`}
              >
                All Reports
              </button>
            </div>

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
              <div className="   lg:w-[60%] w-full ">
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
              <div className="w-full  flex justify-center items-center">
                <button
                  onClick={handleSave}
                  className="border-2 rounded-md border-blue-500 px-2 py-2"
                >
                  Save
                </button>
              </div>
            ) : null}
          </div>

          {isLoading && <Loading />}
          <ReportTables selectedCallTab={selectedCallTab} />
        </section>
      </div>
    </div>
  );
};

export default Admin_Report;
