import PropTypes from "prop-types";
const StepTwo = ({
  handleChange,
  EngineerName,
  AssignedDate,
  AssignedTime,
  Description,
  engineers,
}) => {
 

  console.log({ engineers });

  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="EngineerName"
          className="block text-gray-700 font-bold mb-2"
        >
          Engineer Name
        </label>
        <select
          id="EngineerName"
          name="EngineerName"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={EngineerName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select an engineer
          </option>
          {engineers.map((engineer, index) => (
            <option key={index} value={engineer} className="text-sm">
              {engineer.Fname} {engineer.Lname}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="AssingnedDate"
          className="block text-gray-700 font-bold mb-2"
        >
          Assigned Date
        </label>
        <input
          type="date"
          id="AssignedDate"
          name="AssignedDate"
          disabled="true"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={AssignedDate}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="AssignedTime"
          className="block text-gray-700 font-bold mb-2"
        >
          Assigned Time
        </label>
        <input
          type="string"
          id="AssignedTime"
          name="AssignedTime"
          disabled="true"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={AssignedTime} // Corrected value reference
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-bold mb-2"
        >
          Description
          <span className="text-gray-500 text-sm font-light"> (optional)</span>
        </label>
        <textarea
          id="Description"
          name="Description"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter description"
          value={Description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  );
};
StepTwo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  EngineerName: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  AssignedDate: PropTypes.string.isRequired,
  AssignedTime: PropTypes.string.isRequired,
  engineers: PropTypes.array.isRequired,
};

export default StepTwo;
