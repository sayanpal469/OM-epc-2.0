import PropTypes from "prop-types";

const StepOne = ({
  handleChange,
  call_id,
  customer_contact,
  company_name,
  company_details,
  company_location,
  company_address,
}) => {
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="call_id" className="block text-gray-700 font-bold mb-2">
          Call ID
        </label>
        <input
          type="text"
          id="call_id"
          name="call_id"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Call ID"
          value={call_id}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="customer_contact"
          className="block text-gray-700 font-bold mb-2"
        >
          Contact
        </label>
        <input
          type="number"
          id="customer_contact"
          name="customer_contact"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Contact"
          value={customer_contact}
          onChange={handleChange}
          required
          style={{
            WebkitAppearance: "none",
            MozAppearance: "textfield",
          }}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company_name"
          className="block text-gray-700 font-bold mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company_name"
          name="company_name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter company name"
          value={company_name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company_details"
          className="block text-gray-700 font-bold mb-2"
        >
          Company Details
        </label>
        <input
          type="text"
          id="company_details"
          name="company_details"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Details"
          value={company_details}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="company_location"
          className="block text-gray-700 font-bold mb-2"
        >
          Company Location
        </label>
        <input
          type="text"
          id="company_location"
          name="company_location"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Location"
          value={company_location}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="companyAddress"
          className="block text-gray-700 font-bold mb-2"
        >
          Company Address
        </label>
        <input
          type="text"
          id="company_address"
          name="company_address"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Address"
          value={company_address}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};
StepOne.propTypes = {
  handleChange: PropTypes.func.isRequired,
  call_id: PropTypes.string.isRequired,
  customer_contact: PropTypes.string.isRequired,
  company_name: PropTypes.string.isRequired,
  company_address: PropTypes.string.isRequired,
  company_location: PropTypes.string.isRequired,
  company_details: PropTypes.string.isRequired,
};

export default StepOne;
