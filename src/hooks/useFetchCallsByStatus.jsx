import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client"; // Assuming you are using Apollo Client
import { GET_CALLS_BY_STATUS } from "../graphql/queries/graphql_queries";

const useFetchCallsByStatus = (status) => {
  const [calls, setCalls] = useState([]);
  const { data } = useQuery(GET_CALLS_BY_STATUS, {
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
      setCalls(data.calls);
    }
  }, [data]);

  return { calls, data };
};

export default useFetchCallsByStatus;
