import { useState } from "react";
import AdminReportViewModal from "./Admin_ReportViewModal";


const Admin_SubmittedReport = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    const openModal = () => {
     setIsModalOpen(true);
     
   };
 
   const closeModal = () => {
     setIsModalOpen(false);
   };
 
    return (
      <div>
        <div>
        <table>
          <thead>
            <tr>
              <th scope="callId">Call Id</th>
              <th scope="col">Company Name</th>
              <th scope="col"> Submit Date</th>
              <th scope="col">Status</th>
              <th scope="col">Site Id</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
              <tr>
                <td data-label="Call ID">visa/10</td>
                <td data-label="Company Name">-</td>
                <td data-label="Submit Date">7/8/8</td>
                <td data-label="status">Completed</td>
                <td data-label="Site Id">-</td>
                <td data-label="Actions">
                  <button
                    onClick={() => {
                      openModal(true);
                    }}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                  >
                    View
                  </button>
                </td>
              </tr>
          </tbody>
        </table>
        {isModalOpen && (
          <AdminReportViewModal closeModal={closeModal}/>
        )}
      </div>
      </div>
    )
}

export default Admin_SubmittedReport
