import PropTypes from "prop-types";
import { useState } from "react";
import { MdOutlineKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

const DashboardCallTable = ({ calls }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(calls?.length / 10);

  const pageHandleler = (e) => {
    if (e >= 1 && e <= totalPages && e !== page) setPage(e);
  };
  return (
    <div className=" mb-20 p-10 bg-white shadow-lg rounded-3xl w-[90%] mx-auto">
      <h1 className="font-semibold text-3xl">Call Status</h1>
      <div className="">
        <table className="min-w-full mt-5 rounded-3xl">
          <thead>
            <tr className="bg-pink-200 border-0">
              <th className="px-4 py-5 text-[16px]">Call ID</th>
              <th className="px-4 py-5 text-[16px]">Created Time</th>
              <th className="px-4 py-5 text-[16px]">Submitted Time</th>
              <th className="px-4 py-5 text-[16px]">Status</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(calls)
              .reverse()
              .slice(page * 8 - 8, page * 8)
              .map((call, index) => (
                <tr
                  className={index % 2 !== 0 ? "bg-gray-200" : ""}
                  key={call._id}
                >
                  <td className="border px-4 py-3">{call.call_id}</td>
                  <td className="border px-4 py-3">{call.assigned_date}</td>

                  <td className="border px-4 py-3">
                    {call.status == "PENDING" ? "-" : call.submit_date}
                  </td>
                  <td className="border px-4 py-3 flex">
                    {call.status == "COMPLETED" && (
                      <span className="border-y-8 border-l-4 mr-3 border-green-500"></span>
                    )}{" "}
                    {call.status == "PENDING" && (
                      <span className="border-y-8 border-l-4 mr-3 border-orange-500"></span>
                    )}{" "}
                    {call.status == "COMPLETED" && (
                      <span className="">
                        {<span className="text-green-500">Completed</span>}
                      </span>
                    )}
                    {call.status == "PENDING" && (
                      <span className="">
                        {<span className="text-orange-500">Pending</span>}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {calls?.length > 10 && (
          <div className="gap-2 text-center my-8 flex flex-row justify-center">
            <button
              className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md  ${
                page > 1 ? "" : "opacity-20 hover:bg-gray-400"
              }`}
              onClick={() => pageHandleler(page - 1)}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>

            <span className="text-center">
              {[...Array(Math.ceil(calls?.length / 10))].fill().map((_, i) => (
                <button
                  onClick={() => pageHandleler(i + 1)}
                  key={i}
                  className={`mx-2 hover:text-blue-600 cursor-pointer ${
                    page === i + 1 ? "text-blue-600" : ""
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </span>

            <button
              className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md ${
                page < totalPages ? "" : "opacity-20 hover:bg-gray-400"
              }`}
              onClick={() => pageHandleler(page + 1)}
            >
              <MdOutlineKeyboardDoubleArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
DashboardCallTable.propTypes = {
  calls: PropTypes.any,
};

export default DashboardCallTable;
