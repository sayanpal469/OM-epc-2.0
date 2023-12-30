import { useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import AdminExpenses from "../components/Admin/AdminExpenses";
import ExpenseTable from "../components/ExpenseTable";
import { GET_ENGINEER_BY_OBJECT_ID } from "../graphql/queries/graphql_queries";

const Expenses = ({ role, engId }) => {
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

  console.log({ engineer_info });
  // console.log(role);
  return (
    <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1">
        {role === "Engineer" ? (
          <ExpenseTable engineer_info={engineer_info} />
        ) : (
          <AdminExpenses />
        )}
      </div>
    </div>
  );
};
Expenses.propTypes = {
  role: PropTypes.string.isRequired,
  engId: PropTypes.string.isRequired,
};
export default Expenses;
