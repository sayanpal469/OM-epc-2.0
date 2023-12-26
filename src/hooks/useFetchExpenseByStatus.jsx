import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { GET_EXPENSE_BY_STATUS } from "../graphql/queries/graphql_queries";

const useFetchExpenseByStatus = (status) => {
  const [expenses, setExpenses] = useState([]);
  const { data } = useQuery(GET_EXPENSE_BY_STATUS, {
    variables: {
      status,
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    pollInterval: 2000,
  });

  useEffect(() => {
    if (data) {
      setExpenses(data?.expenseReportsByStatus);
    }
  }, [data]);

  return { expenses, data };
};

export default useFetchExpenseByStatus;
