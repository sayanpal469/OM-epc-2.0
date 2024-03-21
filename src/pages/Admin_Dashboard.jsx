import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GET_ATTENDENCE_BY_ENG } from "../graphql/queries/graphql_queries";
import CallPieChart from "../components/CallPieChart";
import useFetchCallsByStatus from "../hooks/useFetchCallsByStatus";
import TodaysCallComponent from "./TodaysCallComponent";
import { GET_ALL_ENGINEERS } from "../graphql/queries/graphql_queries";
import { useLazyQuery, useQuery } from "@apollo/client";
import { MdIncompleteCircle, MdPendingActions } from "react-icons/md";
import { MdOutlineDoNotDisturbOnTotalSilence } from "react-icons/md";
import DashboardCallTable from "../components/Admin/DashboardCallTable";

const Admin_Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());

  const handlePrevMonth = () => {
    if (selectedMonth === 0) {
      setSelectedMonth(11);
      setSelectedYear(selectedYear - 1);
    } else {
      setSelectedMonth(selectedMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 11) {
      setSelectedMonth(0);
      setSelectedYear(selectedYear + 1);
    } else {
      setSelectedMonth(selectedMonth + 1);
    }
  };

  // const highlightedDates = ["07/08/2023", "19/08/2023", "22/11/2023"]; // replace with your actual highlighted dates
  const [highlightedDates, setHighlightedDates] = useState([]);
  const navigate = useNavigate();
  const [engineers, setEngineers] = useState([]);
  const { data } = useQuery(GET_ALL_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });
  const [selectedEngineer, setSelectedEngineer] = useState(engineers[0]);

  const status = "ALL";
  const { calls } = useFetchCallsByStatus(status);
  console.log({ calls });
  const [getAttendenceByEng, { data: attendenceData }] = useLazyQuery(
    GET_ATTENDENCE_BY_ENG,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );

  // console.log(calls);

  useEffect(() => {
    if (engineers && selectedEngineer) {
      setLoading(true); // Set loading to true when engineer is selected
      const timerId = setTimeout(() => {
        const selctedEngData = engineers.filter(
          (eng) => `${eng.Fname}` === selectedEngineer
        );
        getAttendenceByEng({
          variables: {
            engEmp: selctedEngData[0]?.eng_emp,
          },
        });
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [engineers, selectedEngineer, getAttendenceByEng]);

  useEffect(() => {
    if (
      attendenceData?.getAttendenceByEng?.attendence?.length > 0 &&
      attendenceData
    ) {
      const attendenceArr = attendenceData.getAttendenceByEng.attendence;
      const highlightedDates = attendenceArr.map((attendence) => {
        const [day, month, year] = attendence.date.split("/");
        return `${day}/${month}/${year}`;
      });
      setHighlightedDates(highlightedDates);
    } else {
      setHighlightedDates([]);
    }
    setLoading(false); // Set loading to false after getting attendance data
  }, [attendenceData]);

  useEffect(() => {
    if (engineers.length > 0) {
      const name = `${engineers[0].Fname}`;
      setSelectedEngineer(name);
    }
  }, [engineers]);

  useEffect(() => {
    if (data) {
      setEngineers(data.engineers);
    }
  }, [data]);

  const pendingCalls = calls.filter((call) => call.status == "PENDING");
  const completedCalls = calls.filter((call) => call.status == "COMPLETED");

  // console.log({ pendingCalls });

  const callData = [
    { completed: completedCalls?.length || 0 },
    { pending: pendingCalls.length || 0 },
  ];

  // const handleMonthChange = (month) => {
  //   setSelectedMonth(month);
  // };

  const handleEngineerChange = (e) => {
    // console.log();
    setSelectedEngineer(e.target.value);
    setLoading(true);
  };

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // const renderMonthOptions = () => {
  //   return Array.from({ length: 12 }, (_, index) => (
  //     <option key={index} value={index}>
  //       {new Date(0, index).toLocaleString("default", { month: "long" })}
  //     </option>
  //   ));
  // };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(new Date().getFullYear(), selectedMonth);

    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Calculate the day of the week for the 1st day of the selected month
    const firstDayOfMonth = new Date(
      new Date().getFullYear(),
      selectedMonth,
      1
    );
    const startDayIndex = firstDayOfMonth.getDay();

    // Render the calendar days
    const calendarDays = Array.from(
      { length: daysInMonth + startDayIndex },
      (_, index) => {
        const day = index - startDayIndex + 1;
        if (day <= 0) {
          return (
            <div
              key={`emptyDay-${index}`}
              className="w-10 h-full rounded-full flex items-center justify-center mr-2 mb-2 bg-transparent"
            >
              {/* Empty space for days before the 1st day of the month */}
            </div>
          );
        }

        const formattedDay = day < 10 ? `0${day}` : `${day}`;
        const formattedMonth =
          selectedMonth + 1 < 10
            ? `0${selectedMonth + 1}`
            : `${selectedMonth + 1}`;
        const formattedDate = `${formattedDay}/${formattedMonth}/${new Date().getFullYear()}`;

        const isHighlighted = highlightedDates.includes(formattedDate);

        return (
          <div
            key={`calendarDay-${index}`}
            className={`pl-8 py-5 border  ${
              isHighlighted ? "bg-green-500 text-white" : ""
            }`}
          >
            {day}
          </div>
        );
      }
    );

    // Render the day names row
    const dayNamesRow = dayNames.map((dayName, index) => (
      <div
        key={`dayName-${index}`}
        className="w-10 h-5 text-lg font-semibold rounded-full flex items-center justify-center mr-2 mb-5"
      >
        {dayName}
      </div>
    ));

    // Combine the day names row and calendar days
    const calendarContent = [...dayNamesRow, ...calendarDays];

    return (
      <div className="grid grid-cols-7 gap-2 px-2 items-center justify-between">
        {calendarContent}
      </div>
    );
  };

  // console.log({ selectedMonth });
  // console.log({ highlightedDates });

  // const getDate = (timestamp) => {
  //   const date = new Date(timestamp);
  //   const options = { year: "numeric", month: "long", day: "numeric" };
  //   console.log(date.toLocaleDateString("en-US", options));
  //   console.log({timestamp})
  //   return date.toLocaleDateString("en-US", options);
  // };

  return (
    <>
      <div className="flex">
        {/* <div className="w-12 h-screen lg:w-20">
         
        </div> */}
        <div className="flex-1">
          <div className="w-full">
            <div className="">
              <h1 className="lg:text-4xl text-center mt-10 md:text-2xl text-xl font-bold">
                Welcome Admin
              </h1>
              <main className="w-[90%] mx-auto">
                <section>
                  <div className="flex justify-between w-full items-center px-10">
                    <h3 className="lg:text-3xl text-xl font-semibold">
                      Overview
                    </h3>
                    <button
                      onClick={() => navigate("/calls")}
                      className="bg-transparent mb-3 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      View Calls
                    </button>
                  </div>

                  <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-auto w-auto mt-10 px-10 gap-10 mb-10">
                    <TodaysCallComponent />

                    <div className="relative">
                      <div className="shadow-lg overviewBox p-5 bg-[#CEEFFF]">
                        <div className="">
                          <h4 className="text-sm">Completed Calls</h4>
                          <h1 className="font-bold text-5xl mt-5">
                            {completedCalls.length > 0
                              ? completedCalls.length
                              : 0}
                          </h1>
                        </div>
                      </div>
                      <div className="rightIcon bg-white h-16 text-[#39C2FC] flex justify-center shadow-slate-200 shadow-2xl items-center text-4xl w-20 p-2 rounded-2xl absolute top-0 right-0">
                        <MdIncompleteCircle />
                      </div>
                    </div>

                    <div className="relative">
                      <div className="shadow-lg overviewBox p-5 bg-[#D6F6D6]">
                        <div className="">
                          <h4 className="text-sm">Pending Calls</h4>
                          <h1 className="font-bold text-5xl mt-5">
                            {pendingCalls.length > 0 ? pendingCalls.length : 0}
                          </h1>
                        </div>
                      </div>
                      <div className="rightIcon bg-white h-16 text-green-500 flex justify-center shadow-slate-200 shadow-2xl items-center text-4xl w-20 p-2 rounded-2xl absolute top-0 right-0">
                        <MdPendingActions />
                      </div>
                    </div>

                    <div className="relative">
                      <div className="shadow-lg overviewBox p-5 bg-[#e1defc]">
                        <div className="">
                          <h4 className="text-sm">Total Calls</h4>
                          <h1 className="font-bold text-5xl mt-5">
                            {calls.length > 0 ? calls.length : 0}
                          </h1>
                        </div>
                      </div>
                      <div className="rightIcon bg-white h-16 text-blue-500 flex justify-center shadow-slate-200 shadow-2xl items-center text-4xl w-20 p-2 rounded-2xl absolute top-0 right-0">
                        <MdOutlineDoNotDisturbOnTotalSilence />
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>

            <DashboardCallTable calls={calls} />

            <div className="flex flex-col justify-between h-auto lg:h-auto lg:px-10 px-5 mb-10 lg:flex-row">
              <div className="w-full lg:w-[45%] lg:mb-0 mb-5">
                <div className="bg-white p-5 shadow-lg rounded-3xl pt-2 bg-opacity-100 backdrop-filter bg-blur-lg">
                  <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center border p-1 bg-gray-200">
                      <button className="px-2 py-1" onClick={handlePrevMonth}>
                        &#8592;
                      </button>
                      <div className="mx-2">{`${monthNames[selectedMonth]} ${selectedYear}`}</div>
                      <button className="px-2 py-1" onClick={handleNextMonth}>
                        &#8594;
                      </button>
                    </div>

                    <p className="text-sm text-center sm:text-2xl font-semibold">
                      Attendence Sheet
                    </p>
                    <select
                      className="border p-1 bg-gray-200"
                      value={selectedEngineer}
                      onChange={handleEngineerChange}
                    >
                      {engineers.map((engineer, index) => (
                        <option key={index} value={engineer.Fname}>
                          {engineer.Fname}
                        </option>
                      ))}
                    </select>
                  </div>
                  {loading ? (
                    <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
                      <svg
                        className="text-gray-300 animate-spin"
                        viewBox="0 0 64 64"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                      >
                        <path
                          d="M32 3C35.8083 3 39.5794 3.75011 43.0978 5.20749C46.6163 6.66488 49.8132 8.80101 52.5061 11.4939C55.199 14.1868 57.3351 17.3837 58.7925 20.9022C60.2499 24.4206 61 28.1917 61 32C61 35.8083 60.2499 39.5794 58.7925 43.0978C57.3351 46.6163 55.199 49.8132 52.5061 52.5061C49.8132 55.199 46.6163 57.3351 43.0978 58.7925C39.5794 60.2499 35.8083 61 32 61C28.1917 61 24.4206 60.2499 20.9022 58.7925C17.3837 57.3351 14.1868 55.199 11.4939 52.5061C8.801 49.8132 6.66487 46.6163 5.20749 43.0978C3.7501 39.5794 3 35.8083 3 32C3 28.1917 3.75011 24.4206 5.2075 20.9022C6.66489 17.3837 8.80101 14.1868 11.4939 11.4939C14.1868 8.80099 17.3838 6.66487 20.9022 5.20749C24.4206 3.7501 28.1917 3 32 3L32 3Z"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                        <path
                          d="M32 3C36.5778 3 41.0906 4.08374 45.1692 6.16256C49.2477 8.24138 52.7762 11.2562 55.466 14.9605C58.1558 18.6647 59.9304 22.9531 60.6448 27.4748C61.3591 31.9965 60.9928 36.6232 59.5759 40.9762"
                          stroke="currentColor"
                          strokeWidth="5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-gray-900"
                        ></path>
                      </svg>
                    </div>
                  ) : (
                    renderCalendar()
                  )}
                </div>
              </div>

              {/* Call Graph  */}

              <div className="h-auto w-full justify-center items-center flex  flex-col lg:w-[45%]">
                <div className="lg:text-3xl text-xl font-semibold mb-5">
                  Overall Call Graph
                </div>
                <CallPieChart callData={callData} />
                <div className="w-[50%] h-full justify-center items-center flex lg:flex-col flex-row">
                  <div>
                    <div className="flex justify-start items-center">
                      <div className="w-5 mr-2 h-5 bg-purple-500"></div>
                      <h5>Pending Calls</h5>
                    </div>
                    <div className="flex justify-center items-center">
                      <div className="w-5 mr-2 h-5 bg-orange-500"></div>
                      <h5>Completed Calls</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin_Dashboard;
