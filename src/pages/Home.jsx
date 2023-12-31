// import Navbar from "../features/navbar/Navbar";
import { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import PropTypes from "prop-types";
import Admin_Dashboard from "./Admin_Dashboard";
import { useQuery } from "@apollo/client";
import { GET_ENGINEER_BY_OBJECT_ID } from "../graphql/queries/graphql_queries";
const Home = ({ role, engId }) => {
  const [engineer_info, setEngineer_info] = useState();
  const { data } = useQuery(GET_ENGINEER_BY_OBJECT_ID, {
    variables: {
      id: engId,
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

  console.log({ data });
  return (
    <div>
      {/* Content here */}
      {/* <Navbar/> */}
      {role === "Engineer" && engineer_info ? (
        <Dashboard engineer_info={engineer_info} engId={engId} />
      ) : role === "Admin" ? (
        <Admin_Dashboard  />
      ) : null}
    </div>
  );
};

Home.propTypes = {
  role: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
};

export default Home;
