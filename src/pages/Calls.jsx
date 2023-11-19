import { useState, useEffect } from "react";
import CallsTables from "../components/CallsTables";
import Loading from "../components/Loading";
import Navbar from "../features/navbar/Navbar";

const Calls = () => {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleCallTab = (callTab) => {
    setIsLoading(true);
    setSelectedCallTab(callTab);
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
  const button_All_Classes =
    selectedCallTab === "" || selectedCallTab === "All_Calls"
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";

  return (
    <section className="w-full h-full">
      <Navbar />
      <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
        {/* Mobile View: Centered Buttons with Space Between */}
        <div className="flex justify-center space-x-4 mb-5">
          <button
            onClick={() => handleCallTab("New_Calls")}
            className={`py-2 px-4 border rounded ${buttonClasses("New_Calls")}`}
          >
            New Calls
          </button>

          <button
            onClick={() => handleCallTab("Completed_Calls")}
            className={`py-2 px-4 border rounded ${buttonClasses(
              "Completed_Calls"
            )}`}
          >
            Today Calls
          </button>

          <button
            onClick={() => handleCallTab("Pending_Calls")}
            className={`py-2 px-4 border rounded ${buttonClasses(
              "Pending_Calls"
            )}`}
          >
            Pending Calls
          </button>

          <button
            onClick={() => handleCallTab("All_Calls")}
            className={`py-2 px-4 border rounded ${button_All_Classes}`}
          >
            All Calls
          </button>
        </div>

        {/* Desktop View: Input and Button */}
        <div className="w-full flex justify-center items-center my-5 lg:justify-center">
          <div className="lg:flex lg:items-center lg:justify-center lg:w-1/2 w-full border-black-500 border-2 rounded-r-md space-x-4">
            <div className="flex rounded-md overflow-hidden w-full">
              <input
                type="text"
                className="w-full rounded-md rounded-r-none ps-3"
                placeholder="Search By Company Name or Date"
              />
              <button className="bg-indigo-600 text-white px-6 text-lg font-semibold py-4 rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {isLoading && <Loading />}
      <CallsTables selectedCallTab={selectedCallTab} />
    </section>
  );
};

export default Calls;
