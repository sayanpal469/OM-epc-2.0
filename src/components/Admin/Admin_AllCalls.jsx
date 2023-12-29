import { useState } from "react";
import CallDetailsModal from "../CallDetailsModal";

import Edit_Call from "./EditCall/EditCall";

import useFetchCallsByStatus from "../../hooks/useFetchCallsByStatus";


const Admin_calls = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  

  const status = "ALL"; 
  const { calls, data } = useFetchCallsByStatus(status);


  const open_Call_Details_Modal = () => {
    setIsViewModalOpen(true);
  };

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const close_Edit_Modal = ()=>{
    setIsEditModalOpen(false)
  }

 
  return (
    <div>
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Call_ID</th>
                <th scope="col">Company Name</th>
                <th scope="col">Engineer Name</th>
                <th scope="col"> Assigned Date</th>
                <th scope="col">Submit Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {calls.map((call) => (
                <tr key={call._id}>
                  <td data-label="Call_ID">{call.call_id}</td>
                  <td data-label="Company Name">{call.company_name}</td>
                  <td data-label="Engineer Name">{call.eng_name}</td>
                  <td data-label="Assigned Date">{call.assigned_date}</td>
                  <td data-label="Submit Date">{call.submit_date}</td>
                  <td data-label="Actions">
                    <button
                      onClick={() => open_Call_Details_Modal(call.call_id)}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {isViewModalOpen ? (
        <CallDetailsModal
          companyName="Visa - 3412"
          assignedDate="04/01/2016 "
          submitDate="04/01/2016"
          reportName="Random.pdf"
          closeModal={close_Call_Details_Modal}
        />
      ) 
     : isEditModalOpen ? (
      <Edit_Call
      closeModal={close_Edit_Modal}
      />
     ):null}
        </div>
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}

    </div>
  );
};

export default Admin_calls;
