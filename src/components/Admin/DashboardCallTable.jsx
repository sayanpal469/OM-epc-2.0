import PropTypes from "prop-types";
import { useState } from "react";
import {
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";

const DashboardCallTable = ({ calls }) => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(calls?.length / 10);

  const pageHandler = (e) => {
    if (e >= 1 && e <= totalPages && e !== page) setPage(e);
  };

  function calculateDuration(startDate, startTime, endDate, endTime) {
    const startDateTime = new Date(`${startDate} ${startTime}`).getTime();
    const endDateTime = new Date(`${endDate} ${endTime}`).getTime();

    // Calculate the duration in milliseconds
    const duration = endDateTime - startDateTime;

    // Calculate hours, minutes, and seconds
    const hours = Math.floor(duration / (1000 * 60 * 60));
    const minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((duration % (1000 * 60)) / 1000);

    // Format duration as a string
    const durationString = `${hours} hours ${minutes} minutes ${seconds} seconds`;

    // Return the duration as a string
    return durationString;
  }

  const startDate = "06-01-2024";
  const startTime = "12:10 PM";
  const endDate = "06-01-2024";
  const endTime = "01:30 PM";
  const examDurationString = calculateDuration(
    startDate,
    startTime,
    endDate,
    endTime
  );
  console.log(`Duration of the exam: ${examDurationString}`);

  return (
    <div className="mb-20 p-10 bg-white shadow-lg rounded-3xl w-[90%] mx-auto">
      <h1 className="font-semibold text-3xl">Call Status</h1>
      <div className="">
        <table className="min-w-full mt-5 rounded-3xl">
          <thead>
            <tr className="bg-pink-200 border-0">
              <th className="px-4 py-5 text-[16px]">Call ID</th>
              <th className="px-4 py-5 text-[16px]">Created Time</th>
              <th className="px-4 py-5 text-[16px]">Submitted Date</th>
              <th className="px-4 py-5 text-[16px]">Status</th>
              <th className="px-4 py-5 text-[16px]">Duration</th>
            </tr>
          </thead>
          <tbody>
            {Array.from(calls)
              .reverse()
              .slice(page * 10 - 10, page * 10)
              .map((call) => (
                <tr key={call._id}>
                  <td className="border px-4 py-3">{call.call_id}</td>
                  <td className="border px-4 py-3">{`${call.assigned_date} ${call.assigned_time}`}</td>
                  <td className="border px-4 py-3">
                    {call.status === "PENDING"
                      ? "-"
                      : `${call.submit_date} ${call.submit_time}`}
                  </td>
                  <td className="border px-4 py-3 flex">
                    {call.status === "COMPLETED" ? (
                      <span className="border-y-8 border-l-4 mr-3 border-green-500"></span>
                    ) : (
                      <span className="border-y-8 border-l-4 mr-3 border-orange-500"></span>
                    )}
                    {call.status === "COMPLETED" ? (
                      <span className="text-green-500">Completed</span>
                    ) : (
                      <span className="text-orange-500">Pending</span>
                    )}
                  </td>
                  <td className="border px-4 py-3">
                    {call.status === "PENDING"
                      ? "-"
                      : call.submit_time
                      ? calculateDuration(
                          call?.assigned_date,
                          call?.assigned_time,
                          call?.submit_date,
                          call?.submit_time
                        )
                      : "-"}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {calls?.length > 10 && (
          <div className="gap-2 text-center my-8 flex flex-row justify-center">
            <button
              className={`text-2xl hover:text-white hover:bg-blue-600 px-2 rounded-md ${
                page > 1 ? "" : "opacity-20 hover:bg-gray-400"
              }`}
              onClick={() => pageHandler(page - 1)}
            >
              <MdOutlineKeyboardDoubleArrowLeft />
            </button>
            <span className="text-center">
              {[...Array(Math.ceil(calls?.length / 10))].fill().map((_, i) => (
                <button
                  onClick={() => pageHandler(i + 1)}
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
              onClick={() => pageHandler(page + 1)}
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
  calls: PropTypes.array.isRequired,
};

export default DashboardCallTable;
