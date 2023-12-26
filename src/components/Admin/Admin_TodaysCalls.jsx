import useFetchCallsByStatus from "../../hooks/useFetchCallsByStatus";

const Admin_TodaysCalls = () => {
  const status = "TODAY";
  const { calls, data } = useFetchCallsByStatus(status);

  return (
    <div>
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th scope="col">Call_ID</th>
                <th scope="col">Company Name</th>
                <th scope="col">Engineer Name</th>
                <th scope="col"> Assigned Date</th>
                <th scope="col">Call Date</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>

            <tbody>
              {calls.map((call) => (
                <tr key={call._id}>
                  <td data-label="Call_ID">{call.call_id}</td>
                  <td data-label="Company Name">{call.company_name}</td>
                  <td data-label="Engineer Name">{call.eng_name}</td>
                  <td data-label="Assigned Date">{call.assigned_date}</td>
                  <td data-label="Submit Date">{call.submit_date}</td>
                  <td data-label="Actions">
                    <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Edit Call
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="h-full mt-40 flex justify-center items-center">
          No Calls to Show
        </div>
      )}
    </div>
  );
};

export default Admin_TodaysCalls;
