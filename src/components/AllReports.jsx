import PropTypes from "prop-types";
import { useState } from "react";
import ReportViewModal from "./ReportViewModal";

const AllReports = ({tableData}) => {
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
            <th scope="col"> Assigned Date</th>
            <th scope="col">Status</th>
            <th scope="col">Submit Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
        {tableData?.map((data,index)=>(
          <tr key={index}>
          <td data-label="Call ID">{data.call_id || 'call id nei'}</td>
            <td data-label="Company Name">{data.companyName || 'google'}</td>
            <td data-label="Assigned Date">{data.date}</td>
            <td data-label="status">{data.status || 'status nei'}</td>
            <td data-label="Submit Date">{data.submit_date || 'submit date nei'}</td>
            <td data-label="Actions">
              <button
                onClick={openModal}
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
                View
              </button>
            </td>
          </tr>
        ))}
          

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
AllReports.propTypes = {
  tableData:PropTypes.array.isRequired
};
export default AllReports;
