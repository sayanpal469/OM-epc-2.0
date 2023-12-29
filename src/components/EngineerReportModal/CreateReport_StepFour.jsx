import PropTypes from "prop-types";

const EnginnerReport_StepFour = ({
  handle_Input_3Phase_AC,
  handle_Output_3Phase_AC,
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
        id="ac_input_three_phase_RY"
        name="ac_input_three_phase_RY"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-Y"
        value={AcInputThreePhase_RY}
        onChange={handle_Input_3Phase_AC}
        required
      />
      <input
        type="number"
        id="ac_input_three_phase_YB"
        name="ac_input_three_phase_YB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter Y-B"
        value={AcInputThreePhase_YB}
        onChange={handle_Input_3Phase_AC}
        required
      />
      <input
        type="number"
        id="ac_input_three_phase_RB"
        name="ac_input_three_phase_RB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-B"
        value={AcInputThreePhase_RB}
        onChange={handle_Input_3Phase_AC}
        required
      />
      <input
        type="number"
        id="ac_input_three_phase_NR"
        name="ac_input_three_phase_NR"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter N-R"
        value={AcInputThreePhase_NR}
        onChange={handle_Input_3Phase_AC}
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
        id="ac_output_three_phase_RY"
        name="ac_output_three_phase_RY"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-Y"
        value={AcOutputThreePhase_RY}
        onChange={handle_Output_3Phase_AC}
        required
      />
      <input
        type="number"
        id="ac_output_three_phase_YB"
        name="ac_output_three_phase_YB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter Y-B"
        value={AcOutputThreePhase_YB}
        onChange={handle_Output_3Phase_AC}
        required
      />
      <input
        type="number"
        id="ac_output_three_phase_RB"
        name="ac_output_three_phase_RB"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:mr-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter R-B"
        value={AcOutputThreePhase_RB}
        onChange={handle_Output_3Phase_AC}
        required
      />
      <input
        type="number"
        id="ac_output_three_phase_NR"
        name="ac_output_three_phase_NR"
        className="w-full md:w-1/2 px-3 py-2 border rounded-md mb-2 md:mb-0 md:ml-2 focus:outline-none focus:border-blue-500"
        placeholder="Enter N-R"
        value={AcOutputThreePhase_NR}
        onChange={handle_Output_3Phase_AC}
        required
      />
    </div>
  </div>
</div>

    
  );
};
EnginnerReport_StepFour.propTypes = {
    handle_Input_3Phase_AC: PropTypes.func.isRequired,
    handle_Output_3Phase_AC:PropTypes.func.isRequired,
    AcInputThreePhase_RY: PropTypes.string.isRequired,
    AcInputThreePhase_YB: PropTypes.string.isRequired,
    AcInputThreePhase_RB: PropTypes.string.isRequired,
    AcInputThreePhase_NR: PropTypes.string.isRequired,
    AcOutputThreePhase_RY: PropTypes.string.isRequired,
    AcOutputThreePhase_YB: PropTypes.string.isRequired,
    AcOutputThreePhase_RB: PropTypes.string.isRequired,
    AcOutputThreePhase_NR: PropTypes.string.isRequired,
};

export default EnginnerReport_StepFour;

