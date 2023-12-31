import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useLazyQuery, useMutation } from "@apollo/client";
import { SUBMIT_ATTENDENCE_MUTATION } from "../graphql/mutations/graphql.mutations";
import { GET_ATTENDENCE_BY_ENG } from "../graphql/queries/graphql_queries";
const LoginTimer = ({ engineer_info }) => {
  const [clockIn, setClockIn] = useState(false);

  const [Submit_Attendence] = useMutation(SUBMIT_ATTENDENCE_MUTATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
  const year = currentDate.getFullYear().toString();
  const formattedDate = `${day}/${month}/${year}`;

  // Format the time as hh:mm AM/PM
  const hours = currentDate.getHours() % 12 || 12;
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hours}:${minutes} ${ampm}`;
  // console.log({ engineer_info });
  const eng_Name = `${engineer_info.engineerByObject.Fname} ${engineer_info.engineerByObject.Lname} `;

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

  useEffect(() => {
    if (engineer_info) {
      const timerId = setTimeout(() => {
        getAttendenceByEng({
          variables: {
            engEmp: engineer_info.engineerByObject.eng_emp,
          },
        });
      }, 3000);
      return () => clearTimeout(timerId);
    }
  }, [engineer_info]);

  useEffect(() => {
    if (
      attendenceData?.getAttendenceByEng?.attendence.length > 0 &&
      attendenceData
    ) {
      const attendenceArr = attendenceData?.getAttendenceByEng?.attendence;

      // Get today's date in the format "30-12-2023"
      const todayDate = new Date().toLocaleDateString("en-GB");

      console.log(todayDate);
      // Check if at least one element in attendenceArr has a date that matches today's date
      const hasTodayAttendence = attendenceArr.some((attendence) => {
        // Assuming attendence.date is in the format "30-12-2023"
        const attendenceDate = attendence.date.split("-").reverse().join("-");
        return attendenceDate === todayDate;
      });

      if (hasTodayAttendence) {
        setClockIn(true);
      }
    }
  }, [attendenceData]);

  console.log(attendenceData);

  const handle_attendence = async () => {
    try {
      // Execute the mutation with the form data and context token
      const { data } = await Submit_Attendence({
        variables: {
          attendence: {
            date: formattedDate,
            eng_name: eng_Name,
            eng_emp: engineer_info.engineerByObject.eng_emp,
            time: formattedTime,
            location: "Kolkata",
          },
        },
        fetchPolicy: "network-only",
      });

      // Handle the response data if needed
      console.log("Mutation Response:", data);

      // Close the modal after submitting the form
    } catch (error) {
      // Handle errors if the mutation fails
      console.error("Mutation Error:", error);
    }
  };

  return (
    <div className="mr-4">
      {!clockIn && (
        <button
          className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => {
            setClockIn(!clockIn);
            handle_attendence();
          }}
        >
          Web Log In
        </button>
      )}
    </div>
  );
};
LoginTimer.propTypes = {
  engineer_info: PropTypes.object.isRequired,
};
export default LoginTimer;
