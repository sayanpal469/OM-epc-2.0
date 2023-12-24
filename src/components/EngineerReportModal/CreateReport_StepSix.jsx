import PropTypes from "prop-types";



const EnginnerReport_StepSix = ({
  handleChange,
  AcInputSinglePhase_LN,
  AcInputSinglePhase_NE,
  AcInputSinglePhase_LE,
  AcOutputSinglePhase_LN,
  AcOutputSinglePhase_NE,
  AcOutputSinglePhase_LE,
 }) => {


  return (
    <div className="md:flex md:flex-wrap md:-mx-2">
  <div className="mb-4 md:w-1/2 md:px-2">
    <label htmlFor="AcInputSinglePhase" className="block text-gray-700 font-bold mb-2">
      AC Input (Single Phase)
    </label>
    <div className="md:flex md:flex-wrap">
      <input
        type="number"
        id="AcInputSinglePhase_LN"
        name="AcInputSinglePhase_LN"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter L-N"
        value={AcInputSinglePhase_LN}
        onChange={handleChange}
      />
      <input
        type="number"
        id="AcInputSinglePhase_NE"
        name="AcInputSinglePhase_NE"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter N-E"
        value={AcInputSinglePhase_NE}
        onChange={handleChange}
      />
      <input
        type="number"
        id="AcInputSinglePhase_LE"
        name="AcInputSinglePhase_LE"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter L-E"
        value={AcInputSinglePhase_LE}
        onChange={handleChange}
      />
    </div>
  </div>
  <div className="mb-4 md:w-1/2 md:px-2">
    <label htmlFor="AcOutputSinglePhase" className="block text-gray-700 font-bold mb-2">
      AC Output (Single Phase)
    </label>
    <div className="md:flex md:flex-wrap">
      <input
        type="number"
        id="AcOutputSinglePhase_LN"
        name="AcOutputSinglePhase_LN"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter L-N"
        value={AcOutputSinglePhase_LN}
        onChange={handleChange}
      />
      <input
        type="number"
        id="AcOutputSinglePhase_NE"
        name="AcOutputSinglePhase_NE"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter N-E"
        value={AcOutputSinglePhase_NE}
        onChange={handleChange}
      />
      <input
        type="number"
        id="AcOutputSinglePhase_LE"
        name="AcOutputSinglePhase_LE"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter L-E"
        value={AcOutputSinglePhase_LE}
        onChange={handleChange}
      />
    </div>
  </div>
</div>

    
  );
};
EnginnerReport_StepSix.propTypes = {
    handleChange: PropTypes.func.isRequired,
    AcInputSinglePhase_LN: PropTypes.string.isRequired,
    AcInputSinglePhase_NE: PropTypes.string.isRequired,
    AcInputSinglePhase_LE: PropTypes.string.isRequired,
    AcOutputSinglePhase_LN: PropTypes.string.isRequired,
    AcOutputSinglePhase_NE: PropTypes.string.isRequired,
    AcOutputSinglePhase_LE: PropTypes.string.isRequired,
};

export default EnginnerReport_StepSix;

