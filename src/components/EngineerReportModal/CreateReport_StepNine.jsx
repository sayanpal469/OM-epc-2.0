import PropTypes from "prop-types";
import { useRef} from "react";
import SignatureCanvas from "react-signature-canvas";

const EnginnerReport_StepNine = ({ handleSignature}) => {
  const sigRef = useRef();

  const clearSignature = () => {
    sigRef.current.clear();

  };

  const handleSignatureEnd = () => {
    const SignData = sigRef.current.toDataURL();
  
    handleSignature("customer_sign", SignData)
  };

  return (
    // <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
    <div>
      <div className="border-2 border-black rounded-lg p-1 mb-4 w-full overflow-hidden">
        <SignatureCanvas
          penColor="black"
          ref={sigRef}
          canvasProps={{width:1000, height: 200, className: "sigCanvas" }}
          onEnd={handleSignatureEnd}
        />
      </div>
      <div className="text-center">
        <button
          type="button"
          onClick={clearSignature}
          className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded"
        >
          Clear
        </button>
      </div>
    </div>
  );
};

EnginnerReport_StepNine.propTypes = {
  handleSignature: PropTypes.func.isRequired
};

export default EnginnerReport_StepNine;