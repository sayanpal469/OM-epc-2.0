import { useEffect, useState } from "react";
import Admin_CallsTables from "./Admin_CallsTables";
import CreateCallModal from "./CreateCallModal";
import { MdAddIcCall } from "react-icons/md";
import {
  GET_CALLS_BY_STATUS,
  GET_ENGINEERS,
} from "../../graphql/queries/graphql_queries";
import { useQuery } from "@apollo/client";

function AdminCall() {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [searchOption, setSearchOption] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [searchText, setSearchText] = useState("");
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  // const [engineerName , setEngineerName] = useState("")
  const [saved_search_name, setSaved_search_name] = useState("");
  const [saved_search_date, setSaved_search_date] = useState("");
  const [saved_search, setSaved_search] = useState({ option: "", value: "" });
  const [engineers, setEngineers] = useState([]);
  const [calls, setCalls] = useState([]);
  const { data, refetch } = useQuery(GET_CALLS_BY_STATUS, {
    variables: {
      status: "ALL",
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    // pollInterval: 2000,
  });
  useEffect(() => {
    if (data) {
      setCalls(data.calls);
    }
  }, [data]);

  const { data: EngineersData } = useQuery(GET_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`, // Include the token from local storage
      },
    },
  });

  const handleSearch_by_fieldName = (e) => {
    const { name, value } = e.target;
    if (name === "eng_name") {
      setSaved_search_name(value);
    }
    if (name === "date") {
      // console.log({ name });

      setSaved_search_date(value);
    }
  };

  const handleSave = () => {
    setSaved_search((prevSavedSearch) => {
      if (saved_search_date.length > 0) {
        // Update only the "date" property
        return { option: "date", value: saved_search_date };
      } else if (saved_search_name.length > 0) {
        // Update only the "name" property
        return { option: "name", value: saved_search_name };
      }

      // If neither condition is met, return the previous state
      return prevSavedSearch;
    });
  };

  console.log({ saved_search });

  useEffect(() => {
    if (EngineersData?.engineers?.length > 0) {
      setEngineers(EngineersData.engineers);
    }
  }, [EngineersData]);

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

  const open_Create_Call_Modal = () => {
    setIsCallModalOpen(true);
  };

  const close_Create_Call_Modal = () => {
    setIsCallModalOpen(false);
  };

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
        <section className="w-full h-full">
          <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
            <div className="flex lg:flex-row sm:space-y-0 lg:w-[50%] w-[100%] space-y-5  flex-col justify-center items-end space-x-4">
              <button
                onClick={() => handleCallTab("Today_Calls")}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Today_Calls"
                )}`}
              >
                Today Calls
              </button>
              <button
                onClick={() => handleCallTab("Pending_Calls")}
                className={`border py-2 w-full rounded ${buttonClasses(
                  "Pending_Calls"
                )}`}
              >
                Pending Calls
              </button>
              <button
                onClick={() => handleCallTab("Completed_Calls")}
                className={`border py-2  w-full rounded  ${buttonClasses(
                  "Completed_Calls"
                )}`}
              >
                Complete Call
              </button>
              <button
                onClick={() => handleCallTab("All_Calls")}
                className={`border  py-2 w-full rounded ${button_All_Classes}`}
              >
                All Calls
              </button>

              <button
                onClick={open_Create_Call_Modal}
                className={`border inline-flex items-center p-2 w-full rounded justify-center ${buttonClasses(
                  "Create_Call"
                )}`}
              >
                <MdAddIcCall className="mx-1" />
                <span>Create Call</span>
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
                    <option value="defaule">Select Search Option</option>
                    <option value="name">Search by Engineer name</option>
                    <option value="date">Search by Date</option>
                  </select>
                </div>
              </div>
              <div className="   lg:w-[60%] w-full ">
                {searchOption === "name" && (
                  <select
                    id="engineerName"
                    name="eng_name"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                    value={saved_search_name}
                    onChange={(e) => handleSearch_by_fieldName(e)}
                    required
                  >
                    <option value="" disabled>
                      Select an engineer
                    </option>
                    {engineers.map((engineer, index) => (
                      <option
                        key={index}
                        value={`${engineer.Fname} ${engineer.Lname}`}
                        className="text-sm"
                      >
                        {engineer.Fname} {engineer.Lname}
                      </option>
                    ))}
                  </select>
                )}
                {searchOption === "date" && (
                  <input
                    type="date"
                    name="date"
                    className="w-full px-3 py-2 border-2 rounded-md border-blue-500"
                    placeholder="Select Date"
                    onChange={(e) => handleSearch_by_fieldName(e)}
                  />
                )}
              </div>
            </div>
            {saved_search_date !== "" || saved_search_name !== "" ? (
              <div className="w-full  flex justify-center items-center">
                <button
                  onClick={() => handleSave()}
                  className="border-2 rounded-md border-blue-500 px-2 py-2 mr-2"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    handleSearchOption("default");
                    setSaved_search({ option: "", value: "" });
                    setSaved_search_date("");
                    setSaved_search_name("");
                  }}
                  className="border-2 rounded-md border-red-500 px-2 py-2"
                >
                  Clear
                </button>
              </div>
            ) : null}
          </div>

          {/* {isLoading && <Loading />} */}
          {
            <Admin_CallsTables
              saved_search={saved_search}
              selectedCallTab={selectedCallTab}
              calls={calls}
            />
          }

          {isCallModalOpen ? (
            <CreateCallModal
              refetch={refetch}
              closeModal={close_Create_Call_Modal}
            />
          ) : null}
        </section>
      </div>
    </div>
  );
}

export default AdminCall;
