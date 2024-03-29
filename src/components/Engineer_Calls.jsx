import { useLazyQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { GET_CALLS_BY_ENGINEER } from "../graphql/queries/graphql_queries";
import CallsTables from "./CallsTables";

const Engineer_Calls = ({ engineer_data }) => {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchOption, setSearchOption] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchCall_id, setSearchCall_id] = useState("");
  const [searchText, setSearchText] = useState("");
  const [tablesData, setTablesData] = useState([]);

  const [getCallsByEng, { data }] = useLazyQuery(GET_CALLS_BY_ENGINEER, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });
  console.log({ engineer_data });

  useEffect(() => {
    if (engineer_data) {
      const eng_emp_id = engineer_data?.engineerByObject?.eng_emp;
      const engineerDataString = JSON.stringify(engineer_data.engineerByObject);
      localStorage.setItem("engineer_data", engineerDataString);
      // localStorage.setItem(
      //   "engineer_data",
      //   JSON.parse(engineer_data?.engineerByObject)
      // );
      if (eng_emp_id) {
        // console.log({ eng_emp_id });
        setTimeout(() => {
          getCallsByEng({
            variables: {
              engEmp: eng_emp_id,
              status:
                selectedCallTab === ""
                  ? "ALL"
                  : selectedCallTab === "Today_Calls"
                  ? "ALL"
                  : selectedCallTab === "Pending_Calls"
                  ? "PENDING"
                  : selectedCallTab === "All_Calls"
                  ? "ALL"
                  : "",
            },
          });
        }, 1000);
      }
    }
  }, [engineer_data, getCallsByEng, selectedCallTab]);

  const handleSave = () => {
    console.log("Selected Search Option:", searchOption);

    // Assuming `data` is the object you provided
    const filteredData = tablesData?.filter((call) => {
      if (searchOption === "between_dates") {
        // Filter based on fromDate and toDate
        const assignedDate = new Date(call.assigned_date);
        return (
          assignedDate >= new Date(fromDate) && assignedDate <= new Date(toDate)
        );
      } else if (searchOption === "name") {
        // Filter based on searchText and company name
        console.log(searchText.toLowerCase());
        return call.company_name
          .toLowerCase()
          .includes(searchText.toLowerCase());
      } else if (searchOption === "call_id") {
        // Filter based on selected date
        return call.call_id.toLowerCase().includes(searchCall_id.toLowerCase());
      } else if (searchOption === "date") {
        // Filter based on selected date
        const assignedDate = new Date(call.assigned_date);
        return (
          assignedDate.toDateString() === new Date(fromDate).toDateString()
        );
      }
      // If searchOption is not recognized, include the data by default
      // return true;
    });

    // Log the filtered data
    console.log("Filtered Data:", filteredData);
    setTablesData(filteredData);
  };

  const handleCallTab = (callTab) => {
    setIsLoading(true);
    setSelectedCallTab(callTab);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const handleSearchOption = (option) => {
    setSearchOption(option);
    // Reset date inputs when switching between search options
    setSearchText("");
    setFromDate("");
    setToDate("");
    setSearchCall_id("");
  };

  useEffect(() => {
    if (data) {
      var delay = setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }

    return () => clearTimeout(delay);
  }, [selectedCallTab, data]);

  useEffect(() => {
    if (!data) {
      setIsLoading(true);
    }
    if (data?.callsByEng?.call_list?.length > 0) {
      console.log("123@@@@@21321", data);
      setTablesData(data?.callsByEng?.call_list);
    }
  }, [data]);

  const buttonClasses = (tabName) =>
    selectedCallTab === tabName
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";
  const button_All_Classes =
    selectedCallTab === "" || selectedCallTab === "All_Calls"
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";

  return (
    <div>
      <div>{/* Empty space for navbar here */}</div>
      <div>
        <section className="w-full h-full mb-12">
          <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
            <div className="flex lg:flex-row sm:space-y-0 lg:w-[50%] w-[100%] space-y-5  flex-col justify-center items-end space-x-4">
              <button
                onClick={() => handleCallTab("Pending_Calls")}
                disabled={selectedCallTab === "Pending_Calls"}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Pending_Calls"
                )}`}
              >
                Pending Calls
              </button>
              <button
                onClick={() => handleCallTab("Today_Calls")}
                disabled={
                  selectedCallTab === "Today_Calls" || selectedCallTab === ""
                }
                className={`border  py-2 w-full rounded ${button_All_Classes}`}
              >
                Today Calls
              </button>
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
                    placeholder="Enter Name or Company"
                  />
                )}
                {searchOption === "call_id" && (
                  <input
                    type="text"
                    className="w-full px-3 py-2 border-2 rounded-md border-blue-500"
                    onChange={(e) => setSearchCall_id(e.target.value)}
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
            {searchText !== "" ||
            toDate !== "" ||
            fromDate !== "" ||
            searchCall_id != "" ? (
              <div className="w-full flex justify-center items-center ">
                <button
                  onClick={() => handleSave()}
                  className="border-2 rounded-md border-blue-500 px-2 py-2"
                >
                  Save
                </button>

                <button
                  onClick={() => {
                    setSearchOption("default");
                    handleSave();
                  }}
                  className="border-2 rounded-md border-blue-500 px-2 py-2"
                >
                  Clear
                </button>
              </div>
            ) : null}
          </div>

          {/* {isLoading && <Loading />} */}
          <CallsTables
            tablesData={tablesData}
            refetch={getCallsByEng}
            selectedCallTab={selectedCallTab}
            engineer_data={engineer_data?.engineerByObject}
            eng_emp={engineer_data?.engineerByObject?.eng_emp}
          />
        </section>
      </div>
    </div>
  );
};

Engineer_Calls.propTypes = {
  engineer_data: PropTypes.object.isRequired,
};

export default Engineer_Calls;
