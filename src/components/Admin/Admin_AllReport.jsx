import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import AdminReportViewModal from "./Admin_ReportViewModal";

const Admin_AllReport = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [selected_report, setSelected_report] = useState({});
  // console.log({ data });
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelected_report({});
  };

  useEffect(() => {
    if (data) {
      if (data?.calls?.length > 0) {
        const reversedCalls = [...data.calls].reverse();
        setTableData(reversedCalls);
      }
    }
  }, [data, tableData]);

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th scope="callId">Call Id</th>
              <th scope="col">Company Name</th>
              <th scope="col"> Engineer Name</th>
              <th scope="col">Status</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((call) => (
              <tr key={call._id}>
                <td data-label="Call_ID">{call.call_id}</td>
                <td data-label="Company Name">{call.company_name}</td>
                <td data-label="Engineer Name">{call.eng_name}</td>
                <td data-label="Status">{call.status}</td>
                <td data-label="Submit Date">{call.submit_date}</td>
                <td data-label="Actions">
                  {call.submit_date !== "-" ? (
                    <button
                      onClick={() => {
                        openModal();
                        setSelected_report(call);
                      }}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      View
                    </button>
                  ) : (
                    <button
                      // onClick={() => {
                      //   open_Edit_Modal();
                      //   setSelected_call_for_view(call);
                      // }}
                      className="bg-transparent hover:bg-gray-500 text-gray-700 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded"
                    >
                      Pending
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isModalOpen && (
          <AdminReportViewModal
            selected_report={selected_report}
            closeModal={closeModal}
          />
        )}
      </div>
    </div>
  );
};
Admin_AllReport.propTypes = {
  data: PropTypes.any,
};

export default Admin_AllReport;
