import PropTypes from "prop-types";


const batteryName =['SMF' , 'LITHIUM' , 'TUBULAR']
const EnginnerReport_StepSeven = ({
  handleChange,
    BatteryMake,
    BatteryType,
    BatteryAH,
    Quantity,
 }) => {


  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="battery_make" className="block text-gray-700 font-bold mb-2">
        Battery Make
        </label>
        <input
          type="text"
          id="battery_make"
          name="battery_make"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Battery Make"
          value={BatteryMake}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="battery_type" className="block text-gray-700 font-bold mb-2">
        Battery Type
        </label>
        <select
          id="battery_type"
          name="battery_type"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={BatteryType}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select an Site</option>
          {batteryName.map((battery, index) => (
            <option key={index} value={battery} className="text-sm">{battery}</option>
          ))}
        </select>
        </div>
      <div className="mb-4">
        <label htmlFor="battery_AH" className="block text-gray-700 font-bold mb-2">
        Battery AH
        </label>
        <input
          type="number"
          id="battery_AH"
          name="battery_AH"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Battery A.H"
          value={BatteryAH}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">
        Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Quantity"
          value={Quantity}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    
  );
};
EnginnerReport_StepSeven.propTypes = {
  handleChange: PropTypes.func.isRequired,
  BatteryMake:PropTypes.string.isRequired,
  BatteryType:PropTypes.string.isRequired,
  BatteryAH:PropTypes.string.isRequired,
  Quantity:PropTypes.string.isRequired,
};

export default EnginnerReport_StepSeven;
