import { useEffect, useState } from "react";
import CallDetailsModal from "../CallDetailsModal";
import useFetchCallsByStatus from "../../hooks/useFetchCallsByStatus";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import PropTypes from "prop-types";
import Edit_Call from "./EditCall/EditCall";
const Admin_CompleteCall = ({ saved_search }) => {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [page , setPage] = useState(1)
  const [selected_call_for_view, setSelected_call_for_view] = useState({});
  const status = "COMPLETED";
  const { data } = useFetchCallsByStatus(status);
  const [calls, setCalls] = useState([]);

  const filteredCalls = () => {
    if (!saved_search || !saved_search.option || !saved_search.value) {
      // No saved search, return all calls
      return calls;
    }

    // Filter based on savedSearch
    if (saved_search.option === "date") {
      // Filter by call submit date
      const [year, month, day] = saved_search.value.split("-");
      const newDate = `${day}-${month}-${year}`;
      return calls.filter((call) => call.date === newDate);
    } else if (saved_search.option === "name") {
      // Filter by engineer name
      return calls.filter((call) =>
        call.eng_name.toLowerCase().includes(saved_search.value.toLowerCase())
      );
    }

    // Default: return all calls
    return calls;
  };

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

  useEffect(() => {
    if (data) {
      const reversedCalls = [...data.calls].reverse();
      setCalls(reversedCalls);
    }
  }, [data]);

  // console.log(calls)
  const totalPages = Math.ceil(filteredCalls().length / 20);

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
      {data ? (
        <div>
          <table>
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

              {filteredCalls().slice(page * 20 - 20, page * 20).map((call , index) => (
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
          {filteredCalls().length > 20 && 
          <div className="gap-2 text-center my-8 flex flex-row justify-center">
          
          <button className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md  ${page > 1 ? '' :'opacity-20 hover:bg-gray-400' }`}
          onClick={() => pageHandleler(page - 1)}
          ><MdOutlineKeyboardDoubleArrowLeft /></button>
            
             <span className="text-center">
               {[...Array(Math.ceil(filteredCalls().length / 20))].fill().map((_, i) => (
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
            <CallDetailsModal
              selected_call_for_view={selected_call_for_view}
              reportName="Random.pdf"
              closeModal={close_Call_Details_Modal}
            />
          ) : isEditModalOpen ? (
            <Edit_Call
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
Admin_CompleteCall.propTypes = {
  saved_search: PropTypes.object,
};

export default Admin_CompleteCall;
