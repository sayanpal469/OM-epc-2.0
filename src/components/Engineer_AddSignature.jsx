import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { useRef } from "react";
import SignatureCanvas from "react-signature-canvas";
import { updateSignEng } from "../graphql/mutations/graphql.mutations";

const Engineer_AddSignature = ({ closeModal, setReload, engineer_info }) => {
  const sigRef = useRef();
  const [Add_Sign] = useMutation(updateSignEng, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const clearSignature = () => {
    sigRef.current.clear();
  };
  const handleSignatureEnd = () => {
    const SignData = sigRef.current.toDataURL();
    return SignData;
  };

  const eng_emp_id = engineer_info?.engineerByObject?.eng_emp;

  console.log({ eng_emp_id });
  console.log({ engineer_info });

  const AddSignature = async () => {
    try {
      const signatureData = await handleSignatureEnd();
      const { data } = await Add_Sign({
        variables: {
          eng_emp: eng_emp_id,
          eng_sign: signatureData,
        },
        fetchPolicy: "network-only",
      });
      if (data) {
        setReload(true);
        closeModal();
      }
    } catch (error) {
      alert("Error adding signature data to localStorage:", error);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full  mx-auto my-6 bg-gray-200 backdrop-filter backdrop-blur-md">
        <div className="my-8 mx-20">
          <div className="border-2 border-black rounded-lg p-1 mb-4 w-full overflow-hidden">
            <SignatureCanvas
              penColor="black"
              ref={sigRef}
              canvasProps={{ width: 1000, height: 200, className: "sigCanvas" }}
              onEnd={handleSignatureEnd}
            />
          </div>
          <div className="text-center">
            <button
              type="button"
              onClick={closeModal}
              className="bg-gray-400 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mx-2"
            >
              Close
            </button>
            <button
              type="button"
              onClick={clearSignature}
              className="bg-red-500 hover:bg-red-400 text-white font-semibold py-2 px-4 rounded mx-2"
            >
              Clear
            </button>
            <button
              type="button"
              onClick={AddSignature}
              className="bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
Engineer_AddSignature.propTypes = {
  closeModal: PropTypes.func.isRequired,
  setReload: PropTypes.func.isRequired,
  engineer_info: PropTypes.object.isRequired,
};

export default Engineer_AddSignature;
