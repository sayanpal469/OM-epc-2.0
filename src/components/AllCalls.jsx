import { useState } from "react";
import CallDetailsModal from "./CallDetailsModal";
import RescheduleCallModal from "./ReschudleCallModal";

const AllCalls = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isReschudleModalOpen, setIsReschudleModalOpen] = useState(false);
  const open_Call_Details_Modal = () => {
    setIsViewModalOpen(true);
  };

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const open_Reschudle_Details_Modal = () => {
    setIsReschudleModalOpen(true);
  };

  const close_Reschudle_Details_Modal = () => {
    setIsReschudleModalOpen(false);
  };
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
          <tr>
          <td data-label="Call ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Location">Kolkata</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="status">Completed</td>
            <td data-label="Submit Date">04/01/2016</td>
            <td data-label="Actions">
              <button
                onClick={open_Call_Details_Modal}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                View
              </button>
            </td>
          </tr>
          
          <tr>
          <td data-label="Call ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Location">Kolkata</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="status">-</td>
            <td data-label="Submit Date">-</td>
            <td data-label="Actions">
              <button
                onClick={open_Reschudle_Details_Modal}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                Reschedule
              </button>
            </td>
          </tr>
          <tr>
          <td data-label="Call ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Location">Kolkata</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="status">Completed</td>
            <td data-label="Submit Date">04/01/2016</td>
            <td data-label="Actions">
              <button
                onClick={open_Call_Details_Modal}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                View
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isViewModalOpen ? (
        <CallDetailsModal
          companyName="Visa - 3412"
          CallID="call_08/12/2023_01"
          assignedDate="04/01/2016 "
          submitDate="04/01/2016"
          reportName="Random.pdf"
          closeModal={close_Call_Details_Modal}
        />
      ) : isReschudleModalOpen ? (
        <RescheduleCallModal
          CallID="call_08/12/2023_01"
          companyName="Visa - 3412"
          Location="KOlkata"
          assignedDate="04/01/2016"
          DescriptionByAdmin="checkk"
          submitDate="04/01/2016"
          closeModal={close_Reschudle_Details_Modal}
        />
      ) : null}
    </div>
  );
};

export default AllCalls;
