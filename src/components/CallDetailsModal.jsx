import { useLazyQuery, useQuery } from "@apollo/client";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { GET_REPORT_BY_ENG } from "../graphql/queries/graphql_queries";

const CallDetailsModal = ({
  reportName,
  closeModal,
  selected_call_for_view,
  eng_emp,
}) => {
  const { data } = useQuery(GET_REPORT_BY_ENG, {
    variables: {
      engEmp: eng_emp,
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });

  useEffect(() => {
    if (data) {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0"); // Adding 1 because months are zero-based
      const year = currentDate.getFullYear().toString();
      const formattedDate = `${day}-${month}-${year}`;
    }
  }, [data]);

  console.log({ selected_call_for_view });

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
            <h3 className="text-3xl font-semibold">
              {selected_call_for_view?.company_name || ""}
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
              <span className="font-semibold mr-5">Call ID:</span>{" "}
              {selected_call_for_view?.call_id || ""}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">
                Assigned Date By Admin:
              </span>{" "}
              {selected_call_for_view?.assigned_date || ""}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">
                Submit Date By You:
              </span>{" "}
              {selected_call_for_view?.submit_date || ""}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">
                Description Attached By You:
              </span>
              {selected_call_for_view?.eng_desc || ""}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">
                Description Attached By Admin:
              </span>
              {selected_call_for_view?.admin_desc || ""}
            </p>
            {selected_call_for_view.report.length > 5 ? (
              <a
                href={selected_call_for_view.report}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center"
              >
                <span className="mr-2 cursor-pointer text-blue-500">
                  view PDF
                </span>
                <FaFilePdf className="text-red-500" />
              </a>
            ) : null}
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

CallDetailsModal.propTypes = {
  CallID: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  assignedDate: PropTypes.string.isRequired,
  submitDate: PropTypes.string.isRequired,
  reportName: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  selected_call_for_view: PropTypes.object.isRequired,
  eng_emp: PropTypes.string.isRequired,
};

export default CallDetailsModal;
