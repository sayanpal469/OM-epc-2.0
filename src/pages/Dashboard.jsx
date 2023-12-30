import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginTimer from "../components/loginTimer";
import PropTypes from "prop-types";
import { useQuery } from "@apollo/client";
import { GET_CALLS_BY_ENGINEER } from "../graphql/queries/graphql_queries";
const Dashboard = ({ engineer_info }) => {
  const navigate = useNavigate();
  const [callNumbers, setCallNumbers] = useState({
    completed_call: 0,
    pending_call: 0,
    today_call: 0,
    recent_call: 0,
  });

  // console.log({ engineer_info });

  const eng_id = engineer_info ? engineer_info.engineerByObject.eng_emp : "";

  const { data } = useQuery(GET_CALLS_BY_ENGINEER, {
    variables: {
      eng_emp: eng_id,
      status: "ALL",
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  // console.log(engineer_info.engineerByObject.eng_emp);

  useEffect(() => {
    if (data && data.callsByEng) {
      const callList = data.callsByEng.call_list;
      console.log({ callList });
      // Count calls based on status
      const completedCalls = callList.filter(
        (call) => call.status === "COMPLETED"
      ).length;
      const pendingCalls = callList.filter(
        (call) => call.status === "PENDING"
      ).length;
      const todayCalls = callList.filter(
        (call) => call.status === "TODAY"
      ).length;
      const recentCallsArray = callList
        .filter((call) => {
          const submitDate = new Date(call.assigned_date);
          const currentDate = new Date();
          const tenDaysAgo = new Date(currentDate);
          tenDaysAgo.setDate(currentDate.getDate() - 10);
          return submitDate >= tenDaysAgo;
        })
        .sort((a, b) => {
          const dateA = new Date(a.date);
          const dateB = new Date(b.date);
          return dateB - dateA; // Sort in descending order by submit date
        });
      const recentCalls = recentCallsArray.length;

      // Update state with total numbers
      setCallNumbers({
        completed_call: completedCalls,
        pending_call: pendingCalls,
        today_call: todayCalls,
        recent_call: recentCalls,
      });
    }
  }, [data]);

  const total_call = callNumbers?.completed_call + callNumbers?.pending_call;

  return (
    <>
      <div className="flex">
        <div className="w-12 h-screen lg:w-20">
          {/* Empty space for navbar here */}
        </div>
        <div className="flex-1">
          <div className="w-full">
            <div>
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
                      Welcome, {engineer_info?.engineerByObject?.Fname}
                    </h1>
                  </div>
                  <div className="">
                    {engineer_info && (
                      <LoginTimer engineer_info={engineer_info} />
                    )}
                  </div>
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
                      <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>New Calls</h4>
                        <h1 className="font-bold">
                          {callNumbers?.recent_call}
                        </h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-orange-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>{`Today's Calls`}</h4>
                        <h1 className="font-bold">{callNumbers?.today_call}</h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-purple-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>Pending Calls</h4>
                        <h1 className="font-bold">
                          {callNumbers?.pending_call}
                        </h1>
                      </div>
                    </div>
                    <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
                      <div className="bg-green-500 w-16 h-16 flex items-center justify-center rounded-full">
                        {/* <span className="text-white text-3xl">📞</span> */}
                      </div>
                      <div className="analytic-info">
                        <h4>Total Calls</h4>
                        <h1 className="font-bold">{total_call}</h1>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Dashboard.propTypes = {
  engineer_info: PropTypes.object.isRequired,
};

export default Dashboard;
