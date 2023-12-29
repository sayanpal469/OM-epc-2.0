import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import AdminCall from "../components/Admin/AdminCall";
import Engineer_Calls from "../components/Engineer_Calls";
import { GET_ENGINEER_BY_OBJECT_ID } from "../graphql/queries/graphql_queries";
const Calls = ({ role, engId }) => {
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
        {role === "Engineer" ? (
          <Engineer_Calls engineer_data={data} />
        ) : (
          <AdminCall />
        )}
      </div>
    </div>
  );
};
Calls.propTypes = {
  role: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
};

export default Calls;
