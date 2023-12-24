import PropTypes from "prop-types";

const EnginnerReport_StepFive = ({
  handleChange,
  AcInputThreePhase_RY,
  AcInputThreePhase_YB,
  AcInputThreePhase_RB,
  AcInputThreePhase_NR,
  AcOutputThreePhase_RY,
  AcOutputThreePhase_YB,
  AcOutputThreePhase_RB,
  AcOutputThreePhase_NR,
 }) => {


  return (
    <div className="md:flex md:flex-wrap md:-mx-2">
  <div className="mb-4 md:w-1/2 md:px-2">
    <label htmlFor="AcInputThreePhase" className="block text-gray-700 font-bold mb-2">
      AC Input(Three Phase)
    </label>
    <div className="md:flex md:flex-wrap">
      <input
        type="number"
        id="AcInputThreePhase_RY"
        name="AcInputThreePhase_RY"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-Y"
        value={AcInputThreePhase_RY}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="AcInputThreePhase_YB"
        name="AcInputThreePhase_YB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter Y-B"
        value={AcInputThreePhase_YB}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="AcInputThreePhase_RB"
        name="AcInputThreePhase_RB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-B"
        value={AcInputThreePhase_RB}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="AcInputThreePhase_NR"
        name="AcInputThreePhase_NR"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter N-R"
        value={AcInputThreePhase_NR}
        onChange={handleChange}
        required
      />
    </div>
  </div>
  <div className="mb-4 md:w-1/2 md:px-2">
    <label htmlFor="AcOutputThreePhase" className="block text-gray-700 font-bold mb-2">
      AC Output(Three Phase)
    </label>
    <div className="md:flex md:flex-wrap">
      <input
        type="number"
        id="AcOutputThreePhase_RY"
        name="AcOutputThreePhase_RY"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-Y"
        value={AcOutputThreePhase_RY}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="AcOutputThreePhase_YB"
        name="AcOutputThreePhase_YB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter Y-B"
        value={AcOutputThreePhase_YB}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="AcOutputThreePhase_RB"
        name="AcOutputThreePhase_RB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-B"
        value={AcOutputThreePhase_RB}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="AcOutputThreePhase_NR"
        name="AcOutputThreePhase_NR"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter N-R"
        value={AcOutputThreePhase_NR}
        onChange={handleChange}
        required
      />
    </div>
  </div>
</div>

    
  );
};
EnginnerReport_StepFive.propTypes = {
    handleChange: PropTypes.func.isRequired,
    AcInputThreePhase_RY: PropTypes.string.isRequired,
    AcInputThreePhase_YB: PropTypes.string.isRequired,
    AcInputThreePhase_RB: PropTypes.string.isRequired,
    AcInputThreePhase_NR: PropTypes.string.isRequired,
    AcOutputThreePhase_RY: PropTypes.string.isRequired,
    AcOutputThreePhase_YB: PropTypes.string.isRequired,
    AcOutputThreePhase_RB: PropTypes.string.isRequired,
    AcOutputThreePhase_NR: PropTypes.string.isRequired,
};

export default EnginnerReport_StepFive;

