import PropTypes from "prop-types";

const EnginnerReport_StepOne = ({
  handleChange,
  ClientName,
  SiteId_ATMId,
  Date,
  SiteType
 }) => {
  
  return (
    <div>
       <div className="mb-4">
        <label htmlFor="client_name" className="block text-gray-700 font-bold mb-2">
          Client Name
        </label>
        <input
          type="text"
          id="client_name"
          name="client_name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={ClientName}
          onChange={handleChange}
          disabled
        />
         </div>
         <div className="mb-4">
        <label htmlFor="atm_id" className="block text-gray-700 font-bold mb-2">
          Site ID/ATM ID
        </label>
        <input
          type="text"
          id="atm_id"
          name="atm_id"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter  Site ID/ATM ID"
          value={SiteId_ATMId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
          Date
        </label>
        <input
          type="text"
          id="date"
          name="date"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Company Location"
          value={Date}
          onChange={handleChange}
          required
          disabled
        />
      </div>
      <div className="mb-4">
        <label htmlFor="site_type" className="block text-gray-700 font-bold mb-4">
         Site Type
        </label>
        <div className="flex gap-x-4">
        <label>
          <input
            type="radio"
            name="site_type"
            value="Onsite"
            checked={SiteType === "Onsite"}
            onChange={handleChange}
          />
          On Site
        </label>
        <label>
          <input
            type="radio"
            name="site_type"
            value="Offsite"
            checked={SiteType === "Offsite"}
            onChange={handleChange}
          />
          Off Site
        </label>
        </div>
      </div>
    </div>
    
  );
};
EnginnerReport_StepOne.propTypes = {
  handleChange: PropTypes.func.isRequired,
  Date: PropTypes.string.isRequired,
  ClientName: PropTypes.string.isRequired,
  SiteId_ATMId: PropTypes.string.isRequired,
  SiteType: PropTypes.string.isRequired,
};

export default EnginnerReport_StepOne;

