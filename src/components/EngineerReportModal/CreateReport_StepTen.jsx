import PropTypes from "prop-types";
import { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";

const EnginnerReport_StepTen = ({ handleSignature}) => {
  const sigRef = useRef();
  const [Sign, setSign] = useState();

  const clearSignature = () => {
    sigRef.current.clear();
    setSign(null);
  };

  const handleSignatureEnd = () => {
    const SignData = sigRef.current.toDataURL();
    setSign(SignData);
    handleSignature("Sign", SignData)
    console.log(Sign)
  };

  return (
    <div className="mx-auto max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
      <div className="border-2 border-black rounded-lg p-4 mb-4">
        <SignatureCanvas
          penColor="black"
          ref={sigRef}
          canvasProps={{width:"190%", height: 200, className: "sigCanvas" }}
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

EnginnerReport_StepTen.propTypes = {
  handleSignature: PropTypes.func.isRequired
};

export default EnginnerReport_StepTen;
