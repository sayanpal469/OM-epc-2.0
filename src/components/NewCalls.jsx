import PropTypes from "prop-types";
import { useState } from "react";
import CallDetailsModal from "./CallDetailsModal";
import RescheduleCallModal from "../components/ReschudleCall/ReschudleCallModal";
const NewCalls = ({ tablesData }) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReschudleModalOpen, setIsReschudleModalOpen] = useState(false);
  const [selectedCall, setSelectedCall] = useState({});
  const open_Call_Details_Modal = () => {
    setIsViewModalOpen(true);
  };

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const open_Reschudle_Details_Modal = (index) => {
    setIsReschudleModalOpen(true);
    setSelectedCall(tablesData[index]);
  };

  const close_Reschudle_Details_Modal = () => {
    setIsReschudleModalOpen(false);
    setSelectedCall({});
  };
  console.log({ tablesData });
  const currentDate = new Date();
  const lastTenDaysDate = new Date();
  lastTenDaysDate.setDate(currentDate.getDate() - 10);

  const formatDate = (dateString) => {
    const [day, month, year] = dateString.split("-");
    return new Date(`${year}-${month}-${day}`);
  };

  const filteredArray = tablesData.filter((item) => {
    const assignedDate = formatDate(item.assigned_date);
    return assignedDate >= lastTenDaysDate && assignedDate <= currentDate;
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Call ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Location</th>
            <th scope="col"> Assigned Date</th>
            <th scope="col">Status</th>
            <th scope="col">Submit Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray?.map((callDetails, index) => (
            <tr key={index}>
              <td data-label="Call ID">{callDetails.call_id}</td>
              <td data-label="Company Name">{callDetails.company_name}</td>
              <td data-label="Location">{callDetails.company_location}</td>
              <td data-label="Assigned Date">{callDetails.assigned_date}</td>
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
                    onClick={open_Call_Details_Modal}
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
        />
      ) : isReschudleModalOpen ? (
        <RescheduleCallModal
          CallID={selectedCall.call_id}
          companyName={selectedCall.company_name}
          Location={selectedCall.company_location}
          assignedDate={selectedCall.assigned_date}
          DescriptionByAdmin="checkk"
          submitDate={selectedCall.submit_date}
          closeModal={close_Reschudle_Details_Modal}
        />
      ) : null}
    </div>
  );
};

NewCalls.propTypes = {
  tablesData: PropTypes.any.isRequired,
};

export default NewCalls;
