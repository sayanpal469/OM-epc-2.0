import PropTypes from "prop-types";
const StepTwo = ({
  handleChange,
  eng_name,
  eng_emp,
  assigned_date,
  assigned_time,
  description,
  engineers,
}) => {
  console.log({ engineers });


  return (
    <div>
      <div className="mb-4">
        <label
          htmlFor="eng_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Engineer Name
        </label>
        <select
          id="eng_name"
          name="eng_name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={eng_name}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select an engineer
          </option>
          {engineers.map((engineer, index) => (
            <option
              key={index}
              value={`${engineer.Fname} ${engineer.Lname}`}
              className="text-sm"
            >
              {engineer.Fname} {engineer.Lname}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="eng_emp" className="block text-gray-700 font-bold mb-2">
          Engineer Employee Id
        </label>
        <select
          id="eng_emp"
          name="eng_emp"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={eng_emp}
          onChange={handleChange}
          required
        >
          <option value="" disabled>
            Select Id
          </option>
          {engineers.map((engineer, index) => (
            <option key={index} value={engineer.eng_emp} className="text-sm">
              {engineer.eng_emp}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="assigned_date"
          className="block text-gray-700 font-bold mb-2"
        >
          Assigned Date
        </label>
        <input
          type="date"
          id="assigned_date"
          name="assigned_date"
          disabled="true"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={assigned_date}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label
          htmlFor="assigned_time"
          className="block text-gray-700 font-bold mb-2"
        >
          Assigned Time
        </label>
        <input
          type="string"
          id="assigned_time"
          name="assigned_time"
          disabled="true"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={assigned_time} // Corrected value reference
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
          id="description"
          name="description"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter description"
          value={description}
          onChange={handleChange}
          required
        ></textarea>
      </div>
    </div>
  );
};
StepTwo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  eng_name: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  assigned_date: PropTypes.string.isRequired,
  assigned_time: PropTypes.string.isRequired,
  engineers: PropTypes.array.isRequired,
};

export default StepTwo;
