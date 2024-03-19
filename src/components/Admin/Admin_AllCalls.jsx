import { useState } from "react";
import PropTypes from "prop-types";
import { JsonToExcel } from "react-json-to-excel";
import Edit_Call from "./EditCall/EditCall";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import CallDetailsModal_Admin from "./CallDetailsModal_Admin";

const Admin_calls = ({ saved_search, calls, refetch }) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [page , setPage] = useState(1)
  const [selected_call_for_view, setSelected_call_for_view] = useState({});

  const filteredCalls = () => {
    if (!saved_search || !saved_search.option || !saved_search.value) {
      // No saved search, return all calls
      return calls;
    }

    // Filter based on savedSearch
    if (saved_search.option === "date") {
      // Filter by call submit date
      // console.log({ saved_search });
      const [year, month, day] = saved_search.value.split("-");
      const newDate = `${day}-${month}-${year}`;
      return calls.filter((call) => call.assigned_date === newDate);
    } else if (saved_search.option === "name") {
      // Filter by engineer name
      return calls.filter((call) =>
        call.eng_name.toLowerCase().includes(saved_search.value.toLowerCase())
      );
    }

    // Default: return all calls
    return calls;
  };

  // console.log( filteredCalls());

  // console.log({ saved_search });
  // console.log({ filteredCalls });
  const open_Call_Details_Modal = () => {
    setIsViewModalOpen(true);
  };

  const close_Call_Details_Modal = () => {
    setIsViewModalOpen(false);
  };

  const close_Edit_Modal = () => {
    setIsEditModalOpen(false);
  };
  const open_Edit_Modal = () => {
    setIsEditModalOpen(true);
  };

  const jsonData = calls.map((call) => {
    // Map the site_images array to create image fields
    const imageFields = call.site_images.map((image, index) => ({
      [`image${index + 1}`]: image,
    }));
    return {
      date: call.assigned_date,
      time: call.assigned_time,
      emp_id: call.eng_emp,
      eng_name: call.eng_name,
      company_name: call.company_name,
      company_location: call.company_location,
      company_details: call.company_details,
      company_address: call.company_address,
      call_id: call.call_id,
      submit_date: call.submit_date,
      customer_contact: call.customer_contact,
      report: call.report,
      visit_date: call.visit_date,
      status: call.status,
      eng_desc: call.eng_desc,
      admin_desc: call.admin_desc,
      ...Object.assign({}, ...imageFields), // Spread image fields
    };
  });

  const totalPages = Math.ceil(filteredCalls().length / 10);

  const pageHandleler = (e)=>{
    if(
      e >= 1 &&
      e <= totalPages &&
      e !== page
    )
    setPage(e)
  }
  // console.log({ jsonData });

  return (
    <div>
      {calls?.length > 0 ? (
        <div>
          <JsonToExcel
            title="Download as Excel"
            data={jsonData}
            fileName="all-calls-report"
            btnClassName=""
            btnColor="#7CB9E8"
          />
          <table className="mt-2">
            <thead>
              <tr className="bg-orange-400">
                <th scope="col">Call_ID</th>
                <th scope="col">Company Name</th>
                <th scope="col">Engineer Name</th>
                <th scope="col"> Assigned Date</th>
                <th scope="col">Submit Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCalls().slice(page * 10 - 10, page * 10).map((call , index) => (
                <tr
                  className={index % 2 !== 0 ? "bg-gray-200" : ""}
                  key={call._id}
                >

                  <td data-label="Call_ID">{call.call_id}</td>
                  <td data-label="Company Name">{call.company_name}</td>
                  <td data-label="Engineer Name">{call.eng_name}</td>
                  <td data-label="Assigned Date">{call.assigned_date}</td>
                  <td data-label="Submit Date">{call.submit_date}</td>
                  <td data-label="Actions">
                    {call.submit_date !== "-" ? (
                      <button
                        onClick={() => {
                          open_Call_Details_Modal(call.call_id);
                          setSelected_call_for_view(call);
                        }}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      >
                        View
                      </button>
                    ) : (
                      <button
                        onClick={() => {
                          open_Edit_Modal();
                          setSelected_call_for_view(call);
                        }}
                        className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                      >
                        Edit
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredCalls().length > 10 && 
          <div className="gap-2 text-center my-8 flex flex-row justify-center">
          
          <button className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md  ${page > 1 ? '' :'opacity-20 hover:bg-gray-400' }`}
          onClick={() => pageHandleler(page - 1)}
          ><MdOutlineKeyboardDoubleArrowLeft /></button>
            
             <span className="text-center">
               {[...Array(Math.ceil(filteredCalls().length / 10))].fill().map((_, i) => (
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
          {isViewModalOpen ? (
            <CallDetailsModal_Admin
              selected_call_for_view={selected_call_for_view}
              reportName="Random.pdf"
              closeModal={close_Call_Details_Modal}
            />
          ) : isEditModalOpen ? (
            <Edit_Call
              refetch={refetch}
              selected_call_for_view={selected_call_for_view}
              closeModal={close_Edit_Modal}
            />
          ) : null}
        </div>
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

Admin_calls.propTypes = {
  saved_search: PropTypes.object,
  calls: PropTypes.array,
  refetch: PropTypes.func,
};
export default Admin_calls;
