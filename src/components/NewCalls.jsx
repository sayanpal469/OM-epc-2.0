const NewCalls = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">Company Name</th>
            <th scope="col">Schedule Date</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-label="Company Name">Visa - 3412</td>
            <td data-label="Schedule Date">04/01/2016</td>
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