import PropTypes from "prop-types";

const StepOne = ({
  handleChange,
  CallID,
  CompanyName,
  CompanyDetails,
  CompanyLocation,
  CompanyAddress
 }) => {
  

  return (
    <div>
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
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="companyName" className="block text-gray-700 font-bold mb-2">
          Company Name
        </label>
        <input
          type="text"
          id="companyName"
          name="CompanyName"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter company name"
          value={CompanyName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyDetails" className="block text-gray-700 font-bold mb-2">
          Company Details
        </label>
        <input
          type="text"
          id="companyDetais"
          name="CompanyDetails"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Details"
          value={CompanyDetails}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyLocation" className="block text-gray-700 font-bold mb-2">
          Company Location
        </label>
        <input
          type="text"
          id="companyLocation"
          name="CompanyLocation"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Location"
          value={CompanyLocation}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="companyAddress" className="block text-gray-700 font-bold mb-2">
          Company Address
        </label>
        <input
          type="text"
          id="companyAddress"
          name="CompanyAddress"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Address"
          value={CompanyAddress}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};
StepOne.propTypes = {
  handleChange: PropTypes.func.isRequired,
  CallID: PropTypes.string.isRequired,
  CompanyName: PropTypes.string.isRequired,
  CompanyAddress: PropTypes.string.isRequired,
  CompanyLocation: PropTypes.string.isRequired,
  CompanyDetails: PropTypes.string.isRequired,
};

export default StepOne;

