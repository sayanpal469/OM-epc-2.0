import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";
import { isArray } from "@apollo/client/utilities";

const EngineerGraph = ({ calls, attendenceData, expenseData }) => {
  const [attendence, setAttendence] = useState([
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]);
  const [expense, setExpense] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const test = (data) => {
    const currentYear = new Date().getFullYear();
    const monthCounts = Array.from({ length: 12 }, () => 0);

    data.forEach((call) => {
      const submitDate = call.submit_date;
      const submitYear = parseInt(submitDate.split("-")[2]);
      const submitMonth = parseInt(submitDate.split("-")[1], 10) - 1; // Adjust for zero-based index
      if (submitYear === currentYear) {
        monthCounts[submitMonth]++;
      }
    });

    return monthCounts;
  };

  const calculateTotalAttendanceByMonth = (attendanceArr) => {
    const currentYear = new Date().getFullYear();
    const monthlyAttendance = Array(12).fill(0);

    attendanceArr.forEach((entry) => {
      const dateParts = entry.date.split("/");
      const submitYear = parseInt(dateParts[2]);
      const month = parseInt(dateParts[1], 10) - 1; // Month is zero-based in JavaScript Date object

      // Check if the date has already been counted for this month
      const alreadyCounted =
        monthlyAttendance[month] &&
        monthlyAttendance[month].includes(entry.date);
      if (submitYear === currentYear) {
        if (!alreadyCounted) {
          if (!monthlyAttendance[month]) {
            monthlyAttendance[month] = [entry.date];
          } else {
            monthlyAttendance[month].push(entry.date);
          }
        }
      }
    });

    // Map the array to get the count for each month
    const counts = monthlyAttendance.map((monthArray) =>
      monthArray ? monthArray.length : 0
    );

    return counts;
  };

  const calciExpense = (expenseArr) => {
    const currentYear = new Date().getFullYear();
    return expenseArr.reduce((result, expense) => {
      if (expense.status === "APPROVE") {
        const monthIndex = parseInt(expense.date.split("-")[1], 10) - 1;
        const year = parseInt(expense.date.split("-")[2]);

        // Check if the month is valid (1 to 12)
        if (
          !isNaN(monthIndex) &&
          monthIndex >= 0 &&
          monthIndex < 12 &&
          year === currentYear
        ) {
          result[monthIndex] += parseInt(expense.expense_amount, 10);
        }
      }
      return result;
    }, Array(12).fill(0));
  };

  const monthCounts = test(calls);
  //   const attendenceCounts = test2(attendenceData);
  useEffect(() => {
    if (attendenceData?.getAttendenceByEng?.attendence?.length > 0) {
      //   console.log({ attendenceData });
      const attendenceCounts = calculateTotalAttendanceByMonth(
        attendenceData.getAttendenceByEng.attendence
      );
      setAttendence(attendenceCounts);
      //   console.log({ attendenceCounts });
    }
  }, [attendenceData]);

  useEffect(() => {
    if (expenseData) {
      const result = calciExpense(expenseData.expenseReportByEng?.expense_list);
      console.log({ result });
      setExpense(result);
    }
  }, [expenseData]);

  const data = [
    {
      name: "Jan",
      call: monthCounts[0],
      expense: expense[0],
      attendence: attendence[0],
    },
    {
      name: "Feb",
      call: monthCounts[1],
      expense: expense[1],
      attendence: attendence[1],
    },
    {
      name: "Mar",
      call: monthCounts[2],
      expense: expense[2],
      attendence: attendence[2],
    },
    {
      name: "Apr",
      call: monthCounts[3],
      expense: expense[3],
      attendence: attendence[3],
    },
    {
      name: "May",
      call: monthCounts[4],
      expense: expense[4],
      attendence: attendence[4],
    },
    {
      name: "Jun",
      call: monthCounts[5],
      expense: expense[5],
      attendence: attendence[5],
    },
    {
      name: "Jul",
      call: monthCounts[6],
      expense: expense[6],
      attendence: attendence[6],
    },
    {
      name: "Aug",
      call: monthCounts[7],
      expense: expense[7],
      attendence: attendence[7],
    },
    {
      name: "Sept",
      call: monthCounts[8],
      expense: expense[8],
      attendence: attendence[8],
    },
    {
      name: "Oct",
      call: monthCounts[9],
      expense: expense[9],
      attendence: attendence[9],
    },
    {
      name: "Nov",
      call: monthCounts[10],
      expense: expense[10],
      attendence: attendence[10],
    },
    {
      name: "Dec",
      call: monthCounts[11],
      expense: expense[11],
      attendence: attendence[11],
    },
  ];

  return (
    <div>
      <BarChart width={820} height={450} data={data}>
        <CartesianGrid strokeDasharray="10 10" />
        <XAxis dataKey="name" />
        {/* <YAxis type="number" domain={[100, 500]} /> */}
        <Tooltip />
        {/* <Legend /> */}
        <Bar dataKey="expense" fill="#8884d8" />
        <Bar dataKey="call" fill="#82ca9d" />
        <Bar dataKey="attendence" fill="#DC143C" />
      </BarChart>
    </div>
  );
};

EngineerGraph.propTypes = {
  calls: PropTypes.any,
  attendenceData: PropTypes.any,
  expenseData: PropTypes.any,
};

export default EngineerGraph;
