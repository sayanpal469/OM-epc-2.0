import PropTypes from "prop-types";
import { useState, useEffect } from "react";
// import Loading from "../components/Loading";
import ReportTables from "../components/ReportTables";
import CreateReportModal from "../components/EngineerReportModal/CreateReportModal";
import { useQuery } from "@apollo/client";
import { GET_REPORT_BY_ENG } from "../graphql/queries/graphql_queries";

const Engineer_Report = ({ engineer_data }) => {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchOption, setSearchOption] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchCall_id, setSearchCall_id] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  console.log(isLoading);

  const eng_emp = engineer_data?.engineerByObject?.eng_emp;
  const eng_name = `${engineer_data?.engineerByObject?.Fname} ${engineer_data?.engineerByObject?.Lname}`;
  const { data } = useQuery(GET_REPORT_BY_ENG, {
    variables: {
      engEmp: eng_emp,
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data) {
      setTableData(data.reportByEngineer);
    }
  }, [data]);

  const handleSave = () => {
    console.log("Selected Search Option:", searchOption);

    // Assuming `data` is the object you provided
    const filteredData = tableData?.filter((call) => {
      console.log(call.company_name);

      // If searchOption is not recognized, include the data by default
      // return true;
    });

    // Log the filtered data
    // console.log("Filtered Data:", filteredData);
    // setTableData(filteredData);
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

  // const open_Create_Report_Modal = () => {
  //   setIsReportModalOpen(true);
  // };

  const close_Create_Report_Modal = () => {
    setIsReportModalOpen(false);
  };

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

      <div>
        <section className="w-full h-full">
          <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
            <div className="flex lg:flex-row sm:space-y-0 lg:w-[50%] w-[100%] space-y-5  flex-col justify-center items-end space-x-4">
              {/* <button
                onClick={() => handleCallTab("Submitted_Reports")}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Submitted_Reports"
                )}`}
              >
                Submitted Reports
              </button> */}
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
              {/* <button
                onClick={open_Create_Report_Modal}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Create_Report"
                )}`}
              >
                Create Report
              </button> */}
            </div>

            {/* <div className="w-full flex flex-col items-center my-5 lg:flex-row lg:justify-evenly">
              <div className="lg:flex lg:items-center lg:justify-between lg:w-[30%] w-full  space-y-4 lg:space-y-0">
                <div className="w-full lg:mb-0 mb-5">
                  <select
                    onChange={(e) => handleSearchOption(e.target.value)}
                    value={searchOption}
                    className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-md shadow leading-tight focus:outline-none focus:shadow-outline-blue focus:border-blue-500"
                  >
                    <option value="default">Select Search Option</option>
                    <option value="name">Search by Company</option>
                    <option value="call_id">Search By Call Id</option>
                    <option value="date">Search by Date</option>
                  </select>
                </div>
              </div>
              <div className="   lg:w-[60%] w-full ">
                {searchOption === "name" && (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 rounded-md border-blue-500"
                    onChange={(e) => setSearchText(e.target.value)}
                    placeholder="Enter  Company"
                  />
                )}
                {searchOption === "call_id" && (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 rounded-md border-blue-500"
                    onChange={(e) => setSearchCall_id(e.target.value)}
                    placeholder="Enter call id"
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
            {searchText !== "" ||
            toDate !== "" ||
            fromDate !== "" ||
            searchCall_id != "" ? (
              <div className="w-full  flex justify-center items-center">
                <button
                  onClick={() => handleSave()}
                  className="border-2 rounded-md border-blue-500 px-2 py-2"
                >
                  Save
                </button>
              </div>
            ) : null}
          </div>

          {/* {isLoading && <Loading />} */}
          <ReportTables
            selectedCallTab={selectedCallTab}
            tableData={tableData}
            eng_name={eng_name}
          />

          {isReportModalOpen ? (
            <CreateReportModal closeModal={close_Create_Report_Modal} />
          ) : null}
        </section>
      </div>
    </div>
  );
};

Engineer_Report.propTypes = {
  engineer_data: PropTypes.object.isRequired,
};
export default Engineer_Report;
