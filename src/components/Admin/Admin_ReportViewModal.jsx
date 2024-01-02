import PropTypes from "prop-types";
import { useEffect } from "react";

const AdminReportViewModal = ({ closeModal, selected_report }) => {
  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const sendMessage = () => {
    // Replace 'YourEncodedMessage' and 'YourEncodedURL' with the message and URL you want to share
    const reportUrl = encodeURIComponent(
      "Check out your site report:\nReport: " + selected_report.report
    );
    const imageUrls = selected_report.site_images.map((imageUrl, index) => {
      return encodeURIComponent(`Image ${index + 1}: ${imageUrl}`);
    });

    // Construct the WhatsApp share link
    const whatsappLink = `https://wa.me/${7872358979}?text=${reportUrl}%0A${imageUrls.join(
      "%0A"
    )}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappLink, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden">
      <div className="relative w-full h-full max-w-screen-md mx-auto my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
        {/* Modal content */}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              {selected_report.company_name || ""}
            </h3>
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
                Submit Date By Engineer:
              </span>{" "}
              {selected_report.submit_date || ""}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Location :</span>{" "}
              {selected_report.company_location || ""}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Expense Amount :</span>{" "}
              {selected_report.expense_amount || ""}
            </p>

            <div className="flex flex-col my-2">
              <a
                target="_blank"
                rel="noreferrer"
                href={selected_report.report}
                className="sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                View Report
              </a>
              {selected_report.site_images.map((imageUrl, index) => (
                <a
                  key={index} // Ensure each element in the array has a unique key
                  target="_blank"
                  rel="noreferrer"
                  href={imageUrl}
                  className="sm:w-auto mx-4 my-2 px-4 py-2 rounded-md bg-blue-500 text-white"
                >
                  Image {index + 1}
                </a>
              ))}
            </div>
            <div className="flex flex-col my-2">
              <button
                onClick={() => sendMessage()}
                className="sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md bg-blue-500 text-white"
              >
                Send Report
              </button>
            </div>
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

AdminReportViewModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selected_report: PropTypes.object.isRequired,
};

export default AdminReportViewModal;
