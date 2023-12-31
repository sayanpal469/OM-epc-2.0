
import PropTypes from "prop-types";
import Engineer_Report from "../components/Engineer_Report";
import Admin_Report from "../components/Admin/Admin_Report";
import { GET_ENGINEER_BY_OBJECT_ID } from "../graphql/queries/graphql_queries";
import { useQuery } from "@apollo/client";

const Reports = ({role , engId}) => {
  // console.log(role)
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
  return (
    <div className="flex">
    <div className="w-12 h-screen lg:w-20">
      {/* Empty space for navbar here */}
    </div>
    <div className="flex-1">
    {role === "Engineer" ? <Engineer_Report engineer_data={data}/> : <Admin_Report/>}
    </div>
  </div>
  )
}
Reports.propTypes = {
  role: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
};

export default Reports
