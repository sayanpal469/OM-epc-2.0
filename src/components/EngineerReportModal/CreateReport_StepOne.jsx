import PropTypes from "prop-types";

const companyName =['Company1' , 'Company2' , 'Company3']
const EnginnerReport_StepOne = ({
  handleChange,
  EmpID,
  CallID,
  CompanyName,
  ComplainId,
  Date,
 }) => {
  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
          Company Name
        </label>
        <select
          id="CompanyName"
          name="CompanyName"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={CompanyName}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select an Site</option>
          {companyName.map((company, index) => (
            <option key={index} value={company} className="text-sm">{company}</option>
          ))}
        </select>
        </div>

      <div className="mb-4">
        <label htmlFor="CallID" className="block text-gray-700 font-bold mb-2">
          Call ID
        </label>
        <input
          type="text"
          id="CallID"
          name="CallID"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Call ID"
          value={CallID}
          onChange={handleChange}
          disabled
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="EmpID" className="block text-gray-700 font-bold mb-2">
          Employee ID
        </label>
        <input
          type="text"
          id="EmpID"
          name="EmpID"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Employee ID"
          value={EmpID}
          disabled
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="ComplainID" className="block text-gray-700 font-bold mb-2">
          Complain ID
        </label>
        <input
          type="text"
          id="ComplainId"
          name="ComplainId"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Complain Id"
          value={ComplainId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Date" className="block text-gray-700 font-bold mb-2">
          Date
        </label>
        <input
          type="text"
          id="Date"
          name="Date"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Location"
          value={Date}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    
  );
};
EnginnerReport_StepOne.propTypes = {
  handleChange: PropTypes.func.isRequired,
  EmpID: PropTypes.string.isRequired,
  CallID: PropTypes.string.isRequired,
  CompanyName: PropTypes.string.isRequired,
  ComplainId: PropTypes.string.isRequired,
  Date: PropTypes.string.isRequired,
};

export default EnginnerReport_StepOne;

