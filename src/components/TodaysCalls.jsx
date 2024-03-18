import PropTypes from "prop-types";
import CallDetailsModal from "./CallDetailsModal"; // Import your modal component
import { useState } from "react";
import Reschudle_Call from "./ReschudleCall/ReschudleCall";

const TodaysCalls = ({
  tablesData,
  refetch,
  selectedCallTab,
  eng_emp,
  engineer_data,
}) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReschudleModalOpen, setIsReschudleModalOpen] = useState(false);
  const [selectedCall, setSelectedCall] = useState({});

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const close_Reschudle_Details_Modal = () => {
    setIsReschudleModalOpen(false);
    setSelectedCall({});
  };

  // console.log({ tablesData });
  console.log({ selectedCall });
  const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-"); // Get the current date in the format "DD-MM-YYYY"
  // console.log({today});

  const filteredArray = tablesData?.filter((callDetail) => {
    return callDetail.visit_date === today;
  });

  console.log({ filteredArray });

  const open_Reschudle_Details_Modal = (index) => {
    setIsReschudleModalOpen(true);
    setSelectedCall(filteredArray[index]);
  };
  const open_Call_Details_Modal = (index) => {
    setIsViewModalOpen(true);
    setSelectedCall(filteredArray[index]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr className="bg-orange-400">
            <th scope="col">Call ID</th>
            <th scope="col">Company Name</th>
            <th scope="col"> Assigned Date</th>
            <th scope="col">Visit Date</th>
            <th scope="col">Status</th>
            <th scope="col">Submit Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray.reverse()?.map((callDetails, index) => (
            <tr
            className={index % 2 !== 0 ? "bg-gray-200" : ""}
            key={callDetails._id}
          >
              <td data-label="Call ID">{callDetails.call_id}</td>
              <td data-label="Company Name">{callDetails.company_name}</td>
              <td data-label="Assigned Date">{callDetails.assigned_date}</td>
              <td data-label="Visit Date">{callDetails.visit_date}</td>
              <td data-label="Status">{callDetails.status}</td>
              <td data-label="Submit Date">{callDetails.submit_date}</td>
              <td data-label="Actions">
                {callDetails.submit_date === "-" ? (
                  <button
                    onClick={() => open_Reschudle_Details_Modal(index)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    Reschudle
                  </button>
                ) : (
                  <button
                    onClick={() => open_Call_Details_Modal(index)}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    View
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isViewModalOpen ? (
        <CallDetailsModal
          companyName={selectedCall.company_name}
          CallID={selectedCall.call_id}
          assignedDate={selectedCall.assigned_date}
          submitDate={selectedCall.submit_date}
          reportName="Random.pdf"
          closeModal={close_Call_Details_Modal}
          selected_call_for_view={selectedCall}
        />
      ) : isReschudleModalOpen ? (
        <Reschudle_Call
          selectedCall={selectedCall}
          closeModal={close_Reschudle_Details_Modal}
          refetch={refetch}
          selectedCallTab_Parent={selectedCallTab}
          eng_emp={eng_emp}
          engineer_data={engineer_data}
        />
      ) : null}
    </div>
  );
};

TodaysCalls.propTypes = {
  tablesData: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
  selectedCallTab: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
  engineer_data: PropTypes.array.isRequired,
};

export default TodaysCalls;
