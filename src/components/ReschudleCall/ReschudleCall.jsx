import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Loading from "../Loading";
import ReschudleCall_Table from "./ReschudleCall_Table";
const Reschudle_Call = ({
  closeModal,
  selectedCall,
  refetch,
  selectedCallTab_Parent,
  eng_emp,
  engineer_data,
}) => {
  const [selectedCallTab, setSelectedCallTab] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  //   useEffect(() => {
  //     // Apply overflow-hidden to body when the modal is open
  //     document.body.style.overflow = "hidden";

  //     // Cleanup function to remove the style when the component unmounts or modal is closed
  //     return () => {
  //       document.body.style.overflow = "auto";
  //     };
  //   }, []);

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
    selectedCallTab === "" || selectedCallTab === "Reschudle_Call"
      ? "bg-blue-500 text-white hover:bg-white hover:text-blue-500"
      : "bg-transparent text-blue-700 hover:bg-blue-500 hover:text-white";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-100">
      <div className="relative w-full h-full  mx-auto my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
        <div>{/* Empty space for navbar here */}</div>
        <div>
          <section className="w-full h-full">
            <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
              <div className="flex lg:flex-row sm:space-y-0 lg:w-[50%] w-[100%] space-y-5  flex-col justify-center items-end space-x-4">
                <button
                  onClick={() => handleCallTab("Reschudle_Call")}
                  className={`border  py-2 w-full rounded ${button_All_Classes}`}
                >
                  Reschudle Call
                </button>
                {selectedCall.submit_date === "-" && (
                  <button
                    onClick={() => handleCallTab("Submit_Report")}
                    className={`border py-2 w-full rounded ${buttonClasses(
                      "Submit_Report"
                    )}`}
                  >
                    Submit Report
                  </button>
                )}
                <button
                  onClick={() => handleCallTab("Update_Status")}
                  className={`border py-2 w-full rounded ${buttonClasses(
                    "Update_Status"
                  )}`}
                >
                  Update Status
                </button>
              </div>
            </div>
            {isLoading && <Loading />}
            <ReschudleCall_Table
              closeModal={closeModal}
              selectedCallTab={selectedCallTab}
              selectedCallTab_Parent={selectedCallTab_Parent}
              selectedCall={selectedCall}
              refetch={refetch}
              eng_emp={eng_emp}
              engineer_data={engineer_data}
            />
          </section>
        </div>
      </div>
    </div>
  );
};
Reschudle_Call.propTypes = {
  closeModal: PropTypes.func,
  selectedCall: PropTypes.object,
  refetch: PropTypes.func.isRequired,
  selectedCallTab_Parent: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
  engineer_data: PropTypes.object.isRequired,
};
export default Reschudle_Call;
