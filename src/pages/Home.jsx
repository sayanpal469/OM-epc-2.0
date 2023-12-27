// import Navbar from "../features/navbar/Navbar";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import PropTypes from "prop-types";
import Admin_Dashboard from "./Admin_Dashboard";
import { useQuery } from "@apollo/client";
import { GET_ENGINEER } from "../graphql/queries/graphql_queries";
const Home = ({ role }) => {
  console.log({ role });
  const [engineer_info, setEngineer_info] = useState();
  const { data } = useQuery(GET_ENGINEER, {
    variables: {
      empId: "123/modon/2023",
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    skip: role !== "Engineer", // Skip the query if the role is not Engineer
  });
  useEffect(() => {
    setEngineer_info(data);
  }, [data, role]);
  return (
    <div>
      {/* Content here */}
      {/* <Navbar/> */}
      {role === "Engineer" ? (
        <Dashboard engineer_info={engineer_info} />
      ) : (
        <Admin_Dashboard role={role} />
      )}
    </div>
  );
};

Home.propTypes = {
  role: PropTypes.string.isRequired,
};

export default Home;
