// Import your modal component
import { useState } from "react";
import PropTypes from "prop-types";
import ReportViewModal from "./ReportViewModal";
const TodaysReports = ({ tableData, eng_name }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReport, setSelectedReport] = useState(false);

  const openModal = (data) => {
    setIsModalOpen(true);
    setSelectedReport(data);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-"); // Get the current date in the format "DD-MM-YYYY"
  // console.log({today});

  const filteredArray = tableData?.filter((callDetail) => {
    return callDetail.date === today;
  });
  console.log({ tableData });
  return (
    <div>
      <table>
        <thead>
          <tr className="bg-orange-400">
            <th scope="callId">Call Id</th>
            <th scope="col">Company Name</th>
            <th scope="col"> Submit Date</th>
            <th scope="col">Status</th>
            <th scope="col">Site Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredArray?.map((data, index) => (
            <tr className={index % 2 !== 0 ? "bg-gray-200" : ""} key={data._id}>
              <td data-label="Call ID">{data.call_id || "-"}</td>
              <td data-label="Company Name">{data.company_name || "-"}</td>
              <td data-label="Submit Date">{data.date}</td>
              <td data-label="status">{data.date ? "Completed" : "-"}</td>
              <td data-label="Site Id">{data.atm_id || "-"}</td>
              <td data-label="Actions">
                <button
                  onClick={() => {
                    openModal(data);
                  }}
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
          selectedReport={selectedReport}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

TodaysReports.propTypes = {
  tableData: PropTypes.array.isRequired,
  eng_name: PropTypes.string.isRequired,
};

export default TodaysReports;
