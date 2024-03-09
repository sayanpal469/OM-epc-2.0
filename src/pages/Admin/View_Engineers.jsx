import { useEffect, useState } from "react";
import EmployeeCard from "./EmployeeCard";
import { GET_ALL_ENGINEERS } from "../../graphql/queries/graphql_queries";
import { useLazyQuery } from "@apollo/client";
import Loading from "../../features/loading/Loading";

const View_Engineers = () => {
  const [engineers, setEngineers] = useState([]);
  const [getAllEng, { data, loading, error, refetch }] = useLazyQuery(GET_ALL_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    getAllEng()
  
    
  }, [])
  
  useEffect(() => {
    if (data) {
      setEngineers(data.engineers);
    }
  }, [data]);

  return (
    <div className="flex justify-center items-center h-auto py-5">
      <div>{/* Empty space for navbar here */}</div>
      <div className="">
        {loading ? (
          <Loading />
        ) : (
          <div className="flex flex-wrap justify-evenly items-center">
            {engineers.length > 0 ? (
              engineers.map((engineer) => (
                <EmployeeCard
                  key={engineer._id}
                  engineer={engineer}
                  refetch={refetch}
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
