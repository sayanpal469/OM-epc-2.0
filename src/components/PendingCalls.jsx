import { useState } from "react";

// import RescheduleCallModal from "./ReschudleCall/ReschudleCallModal";
import PropTypes from "prop-types";
import Reschudle_Call from "./ReschudleCall/ReschudleCall";

const PendingCalls = ({ tablesData, refetch, selectedCallTab, eng_emp }) => {
  const [isReschudleModalOpen, setIsReschudleModalOpen] = useState(false);
  const [selectedCall, setSelectedCall] = useState({});
  const open_Reschudle_Details_Modal = (index) => {
    setIsReschudleModalOpen(true);
    setSelectedCall(tablesData[index]);
  };

  const close_Reschudle_Details_Modal = () => {
    setIsReschudleModalOpen(false);
    setSelectedCall({});
  };

  const pendingCallsData = tablesData
    ? tablesData?.filter((callDetails) => callDetails?.status === "PENDING")
    : [];
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
          {pendingCallsData?.map((callDetails, index) => (
            <tr
              className={index % 2 !== 0 ? "bg-gray-200" : ""}
              key={callDetails._id}
            >
              <td data-label="Call ID">{callDetails.call_id}</td>
              <td data-label="Company Name">{callDetails.company_name}</td>
              <td data-label="Assigned Date">{callDetails.assigned_date}</td>
              <td data-label="Visit Dtae">{callDetails.visit_date}</td>
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
                ) : null}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {isReschudleModalOpen ? (
        <Reschudle_Call
          selectedCall={selectedCall}
          closeModal={close_Reschudle_Details_Modal}
          refetch={refetch}
          selectedCallTab_Parent={selectedCallTab}
          eng_emp={eng_emp}
        />
      ) : null}
    </div>
  );
};
PendingCalls.propTypes = {
  tablesData: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
  selectedCallTab: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
};

export default PendingCalls;
