import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";

const ReportViewModal = ({ companyName, assignedDate, closeModal }) => {
  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-screen-md mx-auto my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
        {/* Modal content */}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">{companyName}</h3>
            <button
              className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              onClick={closeModal}
            >
              <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                ×
              </span>
            </button>
          </div>
          {/* Body */}
          <div className="relative p-6 flex-auto">
            <p className="mb-4">
              <span className="font-semibold mr-5">
                Assigned Date by Admin:
              </span>{" "}
              {assignedDate}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Submit Date by You:</span>{" "}
              20/08/2023
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Location :</span> Esplanade
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Objective :</span>{" "}
              Replacement of UPS Battery
            </p>
            <div className="flex items-center">
              <span className="mr-2 cursor-pointer text-blue-500">
                Random.pdf
              </span>
              <FaFilePdf className="text-red-500" />
            </div>
            {/* Date Picker and Save Button */}
          </div>
          {/* Footer */}
          <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="button"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ReportViewModal.propTypes = {
  companyName: PropTypes.string.isRequired,
  assignedDate: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ReportViewModal;
