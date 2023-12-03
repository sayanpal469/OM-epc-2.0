import { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginTimer from "../components/loginTimer";
import PropTypes from "prop-types";
import CallPieChart from "../components/CallPieChart";

const engineers = ["Tapas", "Engineer 2"]; // replace with your actual list of engineers

const Admin_Dashboard = ({ role }) => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedEngineer, setSelectedEngineer] = useState(engineers[0]);
  const navigate = useNavigate();
  const callData = [{ completed: 14 }, { pending: 16 }];
  const handleMonthChange = (month) => {
    setSelectedMonth(month);
  };

  const handleEngineerChange = (e) => {
    setSelectedEngineer(e.target.value);
  };

  const renderMonthOptions = () => {
    return Array.from({ length: 12 }, (_, index) => (
      <option key={index} value={index}>
        {new Date(0, index).toLocaleString("default", { month: "long" })}
      </option>
    ));
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(new Date().getFullYear(), selectedMonth);
    const highlightedDates = ["07/08/2023", "19/08/2023", "22/11/2023"]; // replace with your actual highlighted dates
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
            className={`w-10 h-full border-2 rounded-full flex items-center justify-center mr-2 mb-2 ${
              isHighlighted ? "bg-green-500" : ""
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
        className="w-10 h-5 border-2 rounded-full flex items-center justify-center mr-2 mb-2 bg-gray-200"
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

  return (
    <>
      <div className="flex">
        <div className="w-12 h-screen lg:w-20">
          {/* Empty space for navbar here */}
        </div>
        <div className="flex-1">
          <div className="w-full">
            <div className="">
              <header
                className="bg-cover bg-center flex justify-center items-center h-125"
                style={{
                  backgroundImage:
                    "url('https://static.vecteezy.com/system/resources/previews/006/304/619/original/dark-black-square-pattern-on-glowing-red-neon-abstract-background-in-technology-style-modern-futuristic-geometric-shape-web-banner-design-you-can-use-for-cover-template-poster-illustration-vector.jpg')",
                }}
              >
                <div className="lg:flex md:flex items-center justify-between w-full h-fit text-white ">
                  <div className="mb-3 lg:mb-0">
                    <h1 className="lg:text-4xl md:text-2xl text-xl font-bold">
                      Welcome, Palash
                    </h1>
                  </div>
                  {role !== "Admin" ? (
                    <div className="">
                      <LoginTimer />
                    </div>
                  ) : null}
                </div>
              </header>
              <main className="mt-5">
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

                  <div className="grid lg:grid-cols-2 mx-auto w-auto mt-10 px-10 gap-10">
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full"></div>
                      <div className="analytic-info">
                        <h4>{`Today's Calls`}</h4>
                        <h1 className="font-bold">10</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full"></div>
                      <div className="analytic-info">
                        <h4>{`Completed Calls`}</h4>
                        <h1 className="font-bold">14</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full"></div>
                      <div className="analytic-info">
                        <h4>Pending Calls</h4>
                        <h1 className="font-bold">16</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full"></div>
                      <div className="analytic-info">
                        <h4>Total Calls</h4>
                        <h1 className="font-bold">40</h1>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
            {/* <div className="w-full px-10 flex justify-center items-center h-16 border-2">
              
              <div className="w-[50%] h-full border-2 flex justify-center items-center lg:text-3xl text-xl font-semibold border-red-500">
                Report Graph
              </div>
            </div> */}
            <div className="flex flex-col justify-between h-auto lg:h-auto px-10 mb-10 lg:flex-row">
              <div className="w-full lg:w-[45%] lg:mb-0 mb-5">
                <div className="lg:text-3xl text-xl font-semibold mb-5">
                  Attendence Sheet
                </div>
                <div className="bg-blue-300 shadow-lg rounded-lg ">
                  <div className="flex justify-between items-center mb-4">
                    <select
                      className="border p-1 bg-gray-200"
                      value={selectedMonth}
                      onChange={(e) =>
                        handleMonthChange(parseInt(e.target.value, 10))
                      }
                    >
                      {renderMonthOptions()}
                    </select>
                    <select
                      className="border p-1 bg-gray-200"
                      value={selectedEngineer}
                      onChange={handleEngineerChange}
                    >
                      {engineers.map((engineer, index) => (
                        <option key={index} value={engineer}>
                          {engineer}
                        </option>
                      ))}
                    </select>
                  </div>
                  {renderCalendar()}
                </div>
              </div>
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

Admin_Dashboard.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Admin_Dashboard;
