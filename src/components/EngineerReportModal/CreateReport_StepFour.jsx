import PropTypes from "prop-types";



const EnginnerReport_StepFour = ({
  handleChange,
  ProductMake,
  ProductSlNo,
  BuyBackDetails,
  NatureOfComplaint
 }) => {


  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="ProductMake" className="block text-gray-700 font-bold mb-2">
        Product Make
        </label>
        <input
          type="text"
          id="ProductMake"
          name="ProductMake"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={ProductMake}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="ProductSlNo" className="block text-gray-700 font-bold mb-2">
        Product Sl No
        </label>
        <input
          type="text"
          id="ProductSlNo"
          name="ProductSlNo"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={ProductSlNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="BuyBackDetails" className="block text-gray-700 font-bold mb-2">
        Buy Back Details
        </label>
        <input
          type="text"
          id="BuyBackDetails"
          name="BuyBackDetails"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={BuyBackDetails}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="NatureOfComplaint" className="block text-gray-700 font-bold mb-2">
        Nature Of Complaint
        </label>
        <input
          type="text"
          id="NatureOfComplaint"
          name="NatureOfComplaint"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Customer Name"
          value={NatureOfComplaint}
          onChange={handleChange}
          required
        />
      </div>

    </div>
    
  );
};
EnginnerReport_StepFour.propTypes = {
  handleChange: PropTypes.func.isRequired,
  ProductMake: PropTypes.string.isRequired,
  ProductSlNo: PropTypes.string.isRequired,
  BuyBackDetails: PropTypes.string.isRequired,
  NatureOfComplaint: PropTypes.string.isRequired
};

export default EnginnerReport_StepFour;

