import PropTypes from "prop-types";

const EnginnerReport_StepThree = ({
  handleChange,
  ProductMake,
  ProductSlNo,
  BuyBackDetails,
  NatureOfComplaint
 }) => {


  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="product_make" className="block text-gray-700 font-bold mb-2">
        Product Make
        </label>
        <input
          type="text"
          id="product_make"
          name="product_make"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Product Make"
          value={ProductMake}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="product_slNo" className="block text-gray-700 font-bold mb-2">
        Product Sl No
        </label>
        <input
          type="text"
          id="product_slNo"
          name="product_slNo"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Product Sl no"
          value={ProductSlNo}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="buy_back_details" className="block text-gray-700 font-bold mb-2">
        Buy Back Details
        </label>
        <input
          type="text"
          id="buy_back_details"
          name="buy_back_details"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Buy Back Details"
          value={BuyBackDetails}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
  <label htmlFor="nature_of_complaint" className="block text-gray-700 font-bold mb-2">
    Nature Of Complaint
  </label>
  <textarea
    id="nature_of_complaint"
    name="nature_of_complaint"
    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
    placeholder="Enter Nature of Complaint"
    value={NatureOfComplaint}
    onChange={handleChange}
    required
  />
</div>

    </div>
    
  );
};
EnginnerReport_StepThree.propTypes = {
  handleChange: PropTypes.func.isRequired,
  ProductMake: PropTypes.string.isRequired,
  ProductSlNo: PropTypes.string.isRequired,
  BuyBackDetails: PropTypes.string.isRequired,
  NatureOfComplaint: PropTypes.string.isRequired
};

export default EnginnerReport_StepThree;

