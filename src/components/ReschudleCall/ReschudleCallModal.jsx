import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { RESCHEDULE_CALL_BY_ENG__MUTATION } from "../../graphql/mutations/graphql.mutations";

const RescheduleCallModal = ({
  companyName,
  assignedDate,
  closeModal,
  CallID,
  Location,
  DescriptionByAdmin,
  selectedCall,
  refetch,
  eng_emp,
}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [Description, setDescription] = useState(null);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const [Reschedule_Call] = useMutation(RESCHEDULE_CALL_BY_ENG__MUTATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleDateChange = (date) => {
    let formattedDate = date.split("-").reverse().join("-");
    setSelectedDate(formattedDate);
    setShowSaveButton(true);
  };
  const handleDescriptionChange = (description) => {
    setDescription(description);
    setShowSaveButton(true);
  };

  console.log({ selectedCall });

  const handleSave = async () => {
    if (selectedDate || Description) {
      try {
        // Execute the mutation with the form data and context token
        const { data } = await Reschedule_Call({
          variables: {
            call: {
              visit_date: selectedDate ? selectedDate : "-",
              eng_desc: Description ? Description : "-",
              call_id: selectedCall.call_id,
            },
          },
          fetchPolicy: "network-only",
        });

        // Handle the response data if needed
        console.log("Mutation Response:", data);

        if (data) {
          refetch({
            variables: {
              engEmp: eng_emp,
              status: "ALL",
            },
          });

          setTimeout(() => {
            closeModal();
          }, 2000);
        }

        // Close the modal after submitting the form
      } catch (error) {
        // Handle errors if the mutation fails
        console.error("Mutation Error:", error);
      }
    }
  };

  return (
    <div style={{ height:"520px", overflow:"scroll"}}>
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
            <span className="font-semibold mr-5">Call ID:</span> {CallID}
          </p>
          <p className="mb-4">
            <span className="font-semibold mr-5">Assigned Date by Admin:</span>{" "}
            {assignedDate}
          </p>
          <p className="mb-4">
            <span className="font-semibold mr-5">Location:</span> {Location}
          </p>
          <p className="mb-4">
            <span className="font-semibold mr-5">Company Address:</span>{" "}
            {selectedCall.company_address}
          </p>
          <p className="mb-4">
            <span className="font-semibold mr-5">Company Contact:</span>{" "}
            {selectedCall.customer_contact}
          </p>
          <p className="mb-4">
            <span className="font-semibold mr-5">Description by Admin:</span>{" "}
            {DescriptionByAdmin}
          </p>
          {/* Date Picker and Save Button */}
          <div className="mb-4">
            <label className="font-semibold mr-5">
              Submit your visit date:
            </label>
            <input
              type="date"
              onChange={(e) => handleDateChange(e.target.value)}
              className="border-2 px-2"
            />
          </div>
          <div className="mb-4 flex">
            <label className="font-semibold mr-5">Description:</label>
            <textarea
              type="text"
              onChange={(e) => handleDescriptionChange(e.target.value)}
              className="border-2 px-2"
            />
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
          {showSaveButton && (
            <button
              className="ml-4 bg-blue-500 text-white font-bold px-4 py-2 rounded"
              onClick={handleSave}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

RescheduleCallModal.propTypes = {
  companyName: PropTypes.string.isRequired,
  CallID: PropTypes.string.isRequired,
  assignedDate: PropTypes.string.isRequired,
  Location: PropTypes.string.isRequired,
  DescriptionByAdmin: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedCall: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
  selectedCallTab_Parent: PropTypes.string.isRequired,
  eng_emp: PropTypes.string.isRequired,
};

export default RescheduleCallModal;
