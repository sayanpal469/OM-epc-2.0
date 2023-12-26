import PropTypes from "prop-types";



const EnginnerReport_StepTwo = ({
  handleChange,
  CustomerName,
  ClientName,
  SiteId_ATMId,
  PhNo,
  Address,
  SiteType
 }) => {


  
  return (
    <div>
     
      <div className="mb-4">
        <label htmlFor="CustomerName" className="block text-gray-700 font-bold mb-2">
         Customer Name
        </label>
        <input
          type="text"
          id="CustomerName"
          name="CustomerName"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={CustomerName}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="ClientName" className="block text-gray-700 font-bold mb-2">
          Client Name
        </label>
        <input
          type="text"
          id="ClientName"
          name="ClientName"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={ClientName}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="SiteId_ATMId" className="block text-gray-700 font-bold mb-2">
          Site ID/ATM ID
        </label>
        <input
          type="text"
          id="SiteId_ATMId"
          name="SiteId_ATMId"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter  Site ID/ATM ID"
          value={SiteId_ATMId}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="PhNo" className="block text-gray-700 font-bold mb-2">
          Phone Number
        </label>
        <input
          type="number"
          id="PhNo"
          name="PhNo"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Phone Number"
          value={PhNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Address" className="block text-gray-700 font-bold mb-2">
          Address
        </label>
        <input
          type="text"
          id="Address"
          name="Address"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Address"
          value={Address}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="SiteType" className="block text-gray-700 font-bold mb-4">
         Site Type
        </label>
        <div className="flex gap-x-4">
        <label>
          <input
            type="radio"
            name="SiteType"
            value="OnSite"
            checked={SiteType === "OnSite"}
            onChange={handleChange}
          />
          On Site
        </label>
        <label>
          <input
            type="radio"
            name="SiteType"
            value="OffSite"
            checked={SiteType === "OffSite"}
            onChange={handleChange}
          />
          Off Site
        </label>
        </div>
      </div>
    </div>
    
  );
};
EnginnerReport_StepTwo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  PhNo: PropTypes.string.isRequired,
  CustomerName: PropTypes.string.isRequired,
  ClientName: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  SiteId_ATMId: PropTypes.string.isRequired,
  SiteType: PropTypes.string.isRequired,
};

export default EnginnerReport_StepTwo;

