import PropTypes from "prop-types";
import { useState, useEffect } from "react";
const StepTwo = ({
  handleChange,
  eng_name,
  assigned_date,
  assigned_time,
  description,
  engineers,
  formData,
  setFormData,
}) => {
  const [eng_emp_id, setEng_emp_id] = useState("");
  const findEngineer = (e) => {
    const { name, value } = e.target;
    if (value !== "") {
      const eng = engineers.find(
        (engineer) => `${engineer.Fname} ${engineer.Lname}` === value
      );
      setEng_emp_id(eng.eng_emp);
      // console.log(eng.eng_emp);
      // console.log({ eng });
      setFormData({ ...formData, [name]: value });
    }
  };

  useEffect(() => {
    setFormData({ ...formData, ["eng_emp"]: eng_emp_id });
  }, [eng_emp_id]);

  const handle_Admin_Desc = (e) => {
    const { name, value } = e.target;
    // Check the type of the value
    if (typeof value === "number") {
      // If it's a number, parse it to a string
      const stringValue = value.toString();
      setFormData({ ...formData, [name]: stringValue });
      // Now you can use 'stringValue' as needed
      // console.log("Parsed string value:", stringValue);
    } else if (typeof value === "string") {
      // If it's already a string, keep it as is
      // Now you can use 'value' as needed
      setFormData({ ...formData, [name]: value });

      // console.log("Original string value:", value);
    }
    // Handle other types if needed
  };

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
          onChange={findEngineer}
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
        <input
          type="text"
          id="eng_emp"
          name="eng_emp"
          disabled="true"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={eng_emp_id}
          onChange={handleChange}
        />
        {/* <select
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
        </select> */}
      </div>

      <div className="mb-4">
        <label
          htmlFor="assigned_date"
          className="block text-gray-700 font-bold mb-2"
        >
          Assigned Date
        </label>
        <input
          type="string"
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
          id="admin_desc"
          name="admin_desc"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter description"
          value={description}
          onChange={handle_Admin_Desc}
          required
        ></textarea>
      </div>
    </div>
  );
};
StepTwo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  eng_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  assigned_date: PropTypes.string.isRequired,
  assigned_time: PropTypes.string.isRequired,
  engineers: PropTypes.array.isRequired,
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
};

export default StepTwo;
