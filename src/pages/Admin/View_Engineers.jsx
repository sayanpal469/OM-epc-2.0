import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { GET_ALL_ENGINEERS } from "../../graphql/queries/graphql_queries";
import { useQuery } from "@apollo/client";
import Loading from "../../features/loading/Loading";

const View_Engineers = () => {
  const [engineers, setEngineers] = useState([]);
  const {
    data,
    loading,
  } = useQuery(GET_ALL_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
    pollInterval: "2000"
  });

  useEffect(() => {
    if (data) {
      setEngineers(data.engineers);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center h-screen">
      <div>{/* Empty space for navbar here */}</div>
      <div className="">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-col">
            {engineers.length > 0 ? (
              engineers.map((engineer) => (
                <EmployeeCard
                  key={engineer._id}
                  engineer={engineer}
                />
              ))
            ) : (
              <p>No Engineer</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default View_Engineers;
