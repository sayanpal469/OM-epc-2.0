import PropTypes from "prop-types";



const EnginnerReport_StepSix = ({
  handleChange,
    UpsInvertDCV,
    DCV_WithMains,
    DCV_WithoutMains,
    PowerCut,
 }) => {


  
  return (
    <div>
      <div className="mb-4">
        <label htmlFor="V" className="block text-gray-700 font-bold mb-2">
        UPS/Inverter DC.V
        </label>
        <input
          type="number"
          id="V"
          name="V"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter UPS/Inverter DC.V"
          value={UpsInvertDCV}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="V_withMains" className="block text-gray-700 font-bold mb-2">
        DC.V (With Mains)
        </label>
        <input
          type="number"
          id="V_withMains"
          name="V_withMains"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter DC.V (With Mains)"
          value={DCV_WithMains}
          onChange={handleChange}
          required
        />
        
      </div>
      <div className="mb-4">
        <label htmlFor="V_withoutMains" className="block text-gray-700 font-bold mb-2">
        DC.V (Without Mains)
        </label>
        <input
          type="number"
          id="V_withoutMains"
          name="V_withoutMains"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter DC.V (Without Mains)"
          value={DCV_WithoutMains}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="power_cut" className="block text-gray-700 font-bold mb-2">
        Power Cut
        </label>
        <input
          type="number"
          id=" power_cut"
          name="power_cut"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          placeholder="Enter Power Cut"
          value={PowerCut}
          onChange={handleChange}
          required
        />
      </div>
    </div>
    
  );
};
EnginnerReport_StepSix.propTypes = {
  handleChange: PropTypes.func.isRequired,
  UpsInvertDCV: PropTypes.string.isRequired,
  DCV_WithMains: PropTypes.string.isRequired,
  DCV_WithoutMains: PropTypes.string.isRequired,
  PowerCut: PropTypes.string.isRequired,
};

export default EnginnerReport_StepSix;
