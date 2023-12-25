import PropTypes from "prop-types";


const batteryName =['Battery1' , 'Battery2' , 'Battery3']
const EnginnerReport_StepEight = ({
  handleChange,
    BatteryMake,
    BatteryType,
    BatteryAH,
    Quantity,
 }) => {


  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="BatteryMake" className="block text-gray-700 font-bold mb-2">
        Battery Make
        </label>
        <input
          type="text"
          id="BatteryMake"
          name="BatteryMake"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Battery Make"
          value={BatteryMake}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="BatteryType" className="block text-gray-700 font-bold mb-2">
        Battery Type
        </label>
        <select
          id="BatteryType"
          name="BatteryType"
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
        <label htmlFor="BatteryAH" className="block text-gray-700 font-bold mb-2">
        Battery A.H
        </label>
        <input
          type="text"
          id="BatteryAH"
          name="BatteryAH"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Battery A.H"
          value={BatteryAH}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Quantity" className="block text-gray-700 font-bold mb-2">
        Quantity
        </label>
        <input
          type="number"
          id="Quantity"
          name="Quantity"
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
EnginnerReport_StepEight.propTypes = {
  handleChange: PropTypes.func.isRequired,
  BatteryMake:PropTypes.string.isRequired,
  BatteryType:PropTypes.string.isRequired,
  BatteryAH:PropTypes.string.isRequired,
  Quantity:PropTypes.string.isRequired,
};

export default EnginnerReport_StepEight;
