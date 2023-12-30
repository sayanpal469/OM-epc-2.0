import { useMutation, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { useState } from "react";
import { SUBMIT_ATTENDENCE_MUTATION } from "../graphql/mutations/graphql.mutations";
import { GET_ENGINEER } from "../graphql/queries/graphql_queries";

const LoginTimer = ({ eng_id }) => {
  const [clockIn, setClockIn] = useState(false);
  const [createAttendence] = useMutation(SUBMIT_ATTENDENCE_MUTATION, {
    variables: {
      engEmp: eng_id,
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const { data } = useQuery(GET_ENGINEER, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
  const year = currentDate.getFullYear().toString();
  const formattedDate = `${day}-${month}-${year}`;

  // Format the time as hh:mm AM/PM
  const hours = currentDate.getHours() % 12 || 12;
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const ampm = currentDate.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = `${hours}:${minutes} ${ampm}`;

  const handle_attendence = () => {
    createAttendence({
      variables: {
        attendence: {
          date: formattedDate,
          eng_name: data?.engineer?.Fname || "",
          eng_emp: eng_id,
          time: formattedTime,
          location: "",
        },
      },
    });
  };
  return (
    <div className="mr-4">
      <button
        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => handle_attendence()}
      >
        {clockIn ? (
          <div className="flex flex-col">
            <h4>Web Log Out</h4>
          </div>
        ) : (
          "Web Log In"
        )}
      </button>
    </div>
  );
};
LoginTimer.propTypes = {
  eng_id: PropTypes.string,
};

export default LoginTimer;
