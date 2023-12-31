import { useState } from "react";
import CallDetailsModal from "./CallDetailsModal";

import Reschudle_Call from "./ReschudleCall/ReschudleCall";

import PropTypes from "prop-types";

const AllCalls = ({ tablesData, refetch, selectedCallTab, eng_emp }) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReschudleModalOpen, setIsReschudleModalOpen] = useState(false);
  const [selectedCall, setSelectedCall] = useState({});
  const open_Call_Details_Modal = (index) => {
    setIsViewModalOpen(true);
    setSelectedCall(tablesData[index]);
  };

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
    setSelectedCall({});
  };

  const open_Reschudle_Details_Modal = (index) => {
    setIsReschudleModalOpen(true);
    setSelectedCall(tablesData[index]);
  };

  const close_Reschudle_Details_Modal = () => {
    setIsReschudleModalOpen(false);
    setSelectedCall({});
  };

  // console.log(tablesData);
  return (
    <div>
      <table>
        <thead>
          <tr>
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
          {tablesData?.map((callDetails, index) => (
            <tr key={index}>
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
                    onClick={() => {
                      open_Call_Details_Modal(index);
                    }}
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
          selected_call_for_view={selectedCall}
          reportName="Random.pdf"
          closeModal={close_Call_Details_Modal}
        />
      ) : isReschudleModalOpen ? (
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

AllCalls.propTypes = {
  tablesData: PropTypes.any.isRequired,
  refetch: PropTypes.func.isRequired,
  selectedCallTab: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
};

export default AllCalls;
