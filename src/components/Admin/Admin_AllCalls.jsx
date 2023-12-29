import { useState } from "react";
import CallDetailsModal from "../CallDetailsModal";
import Edit_Call from "./EditCall/EditCall";


const Admin_AllCalls = () => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
  
  const open_Call_Details_Modal = () => {
    setIsViewModalOpen(true);
  };

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const open_Edit_Modal = ()=>{
    setIsEditModalOpen(true)
  }
  const close_Edit_Modal = ()=>{
    setIsEditModalOpen(false)
  }

  return (
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
          <tr>
          <td data-label="Call_ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Engineer Name">Engineer_1</td>
            <td data-label="Assigned Date">04/01/2016</td>
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
          <td data-label="Call_ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Engineer Name">Engineer_2</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="Submit Date">-</td>
            <td data-label="Actions">
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                onClick={open_Edit_Modal}
              >
               Edit Call
              </button>
            </td>
          </tr>
          <tr>
          <td data-label="Call_ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Engineer Name">Engineer_3</td>
            <td data-label="Assigned Date">04/01/2016</td>
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
  );
}

export default Admin_AllCalls
