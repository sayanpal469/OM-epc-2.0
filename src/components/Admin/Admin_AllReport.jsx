import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import AdminReportViewModal from "./Admin_ReportViewModal";

const Admin_AllReport = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [page , setPage] = useState(1)
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

  const totalPages = Math.ceil(tableData?.length / 10);

  const pageHandleler = (e)=>{
    if(
      e >= 1 &&
      e <= totalPages &&
      e !== page
    )
    setPage(e)
  }

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr className="bg-orange-400">
              <th scope="callId">Call Id</th>
              <th scope="col">Company Name</th>
              <th scope="col"> Engineer Name</th>
              <th scope="col">Status</th>
              <th scope="col">Submit Date</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.slice(page * 10 - 10, page * 10).map((call , index) => (
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
            ))}
          </tbody>
        </table>
        {tableData?.length > 10 && 
          <div className="gap-2 text-center my-8 flex flex-row justify-center">
          
          <button className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md  ${page > 1 ? '' :'opacity-20 hover:bg-gray-400' }`}
          onClick={() => pageHandleler(page - 1)}
          ><MdOutlineKeyboardDoubleArrowLeft /></button>
            
             <span className="text-center">
               {[...Array(Math.ceil(tableData?.length / 10))].fill().map((_, i) => (
               <button onClick={() => pageHandleler(i+1)} key={i} 
               className={`mx-2 hover:text-blue-600 cursor-pointer ${page === i + 1 ? 'text-blue-600' : ''}`}
               >{i + 1}</button>
                ))}
             </span>

             <button className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md ${page < totalPages ? '' :'opacity-20 hover:bg-gray-400' }`}
            onClick={() => pageHandleler(page + 1)}
            ><MdOutlineKeyboardDoubleArrowRight /></button>
          </div>
          }
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
