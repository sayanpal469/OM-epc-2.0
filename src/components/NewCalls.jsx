const NewCalls = () => {
  return (
    <div>
      <table>
        <thead>
        <tr>
          <th scope="col">Call ID</th>
            <th scope="col">Company Name</th>
            <th scope="col">Location</th>
            <th scope="col"> Assigned Date</th>
            <th scope="col">Status</th>
            <th scope="col">Submit Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          <td data-label="Call ID">call_08/12/2023_01</td>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Location">Kolkata</td>
            <td data-label="Assigned Date">04/01/2016</td>
            <td data-label="status">-</td>
            <td data-label="Submit Date">-</td>
            <td data-label="Actions">
              <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                Reschedule
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default NewCalls;
