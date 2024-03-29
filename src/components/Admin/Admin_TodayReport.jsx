import { useState } from "react";
import AdminReportViewModal from "./Admin_ReportViewModal";
import PropTypes from "prop-types";

const Admin_TodayReport = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selected_report, setSelected_report] = useState({});
  // console.log({ data });
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelected_report({});
  };

  // Function to format date as dd-mm-yyyy
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); // January is 0!
  const yyyy = today.getFullYear();

  const todayFormatted = `${dd}-${mm}-${yyyy}`;

  // Filter calls based on today's date
  const filteredCalls = data?.calls?.filter(
    (call) => call.submit_date === todayFormatted
  );

  console.log({ data });

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr className="bg-orange-400">
              <th scope="callId">Call Id</th>
              <th scope="col">Company Name</th>
              <th scope="col">Engineer Name</th>
              <th scope="col">Status</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredCalls?.length > 0 ? (
              filteredCalls.map((call, index) => (
                <tr
                  className={index % 2 !== 0 ? "bg-gray-200" : ""}
                  key={call._id}
                >
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
              ))
            ) : (
              <tr>
                <td colSpan="6">No matching Report for today</td>
              </tr>
            )}
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

Admin_TodayReport.propTypes = {
  data: PropTypes.shape({
    calls: PropTypes.arrayOf(
      PropTypes.shape({
        callId: PropTypes.string,
        companyName: PropTypes.string,
        submit_date: PropTypes.string,
        status: PropTypes.string,
        siteId: PropTypes.string,
      })
    ),
  }),
};

export default Admin_TodayReport;
