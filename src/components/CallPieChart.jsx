import { PieChart } from "react-minimal-pie-chart";
import PropTypes from "prop-types";

const CallPieChart = ({ callData }) => {
  // Extracting data from the array
  const completedCalls =
    callData.find((data) => data.completed)?.completed || 0;
  const pendingCalls = callData.find((data) => data.pending)?.pending || 0;

  const data = [
    { title: "Completed Calls", value: completedCalls, color:"#F97316" },
    { title: "Pending Calls", value: pendingCalls, color: "#a855f7" },
  ];

  return (
    <div className="h-full w-full lg:w-[50%]">
      <PieChart
        data={data}
        radius={40}
        segmentsShift={(index) => (index === 0 ? 2 : 0)}
        animate
        animationDuration={3000}
        animationEasing="ease-out"
        label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
        labelPosition={60}
        labelStyle={{
          fontSize: "5px",
          fontFamily: "sans-serif",
          fill: "#fff",
        }}
      >
        {/* Add a Tooltip component */}
        {/* <Tooltip /> */}
      </PieChart>
    </div>
  );
};

CallPieChart.propTypes = {
  callData: PropTypes.arrayOf(
    PropTypes.shape({
      completed: PropTypes.number,
      pending: PropTypes.number,
    })
  ).isRequired,
};

export default CallPieChart;
