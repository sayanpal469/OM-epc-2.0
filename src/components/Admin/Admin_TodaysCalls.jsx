
const Admin_TodaysCalls = () => {
 
  return (
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
          <tr>
          <td data-label="Call_ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Engineer Name">Engineer_1</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="Submit Date">04/01/2016</td>
            <td data-label="Actions">
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
               Edit Call
              </button>
            </td>
          </tr>
          <tr>
          <td data-label="Call_ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Engineer Name">Engineer_2</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="Submit Date">04/01/2016</td>
            <td data-label="Actions">
              <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
               Edit Call
              </button>
            </td>
          </tr>
          <tr>
          <td data-label="Call_ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Engineer Name">Engineer_3</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="Submit Date">04/01/2016</td>
            <td data-label="Actions">
            <button
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
              >
               Edit Call
              </button>
            </td>
          </tr>
        </tbody>
      </table>
     
    </div>
  );
}

export default Admin_TodaysCalls;
