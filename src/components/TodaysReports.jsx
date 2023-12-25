 // Import your modal component
import { useState } from "react";
import ReportViewModal from "./ReportViewModal";
const TodaysReports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
           <th scope="callId">Call Id</th>
            <th scope="col">Company Name</th>
            <th scope="col">Assigned Date</th>
            <th scope="col">Submit Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td data-label="Call ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label=" Assigned Date">04/01/2016</td>
            <td data-label=" Submit Date">04/01/2016</td>
            <td data-label="Actions">
              <button
                onClick={openModal}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                View
              </button>
            </td>
          </tr>
          <tr>
          <td data-label="Call ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label=" Assigned Date">04/01/2016</td>
            <td data-label=" Submit Date">-</td>
            <td data-label="Actions">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                {" "}
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      {isModalOpen && (
        <ReportViewModal
          companyName="Visa - 3412"
          assignedDate="04/01/2016 "
          submitDate="04/01/2016"
          reportName="Random.pdf"
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default TodaysReports;
