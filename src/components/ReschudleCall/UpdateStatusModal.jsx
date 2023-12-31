import PropTypes from "prop-types";
import { useState } from "react";
const UpdateStatusModal = ({ closeModal, selectedCall }) => {
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setStatus(e.target.value);
  };

  const handleSave = () => {
    console.log(status);
  };

  return (
    <div>
      <div className="text-center flex flex-col text-lg gap-y-4 my-4">
        <p>Current status : {selectedCall.status}</p>
        <label>
          <input
            type="radio"
            name="status"
            value="present_at_site"
            checked={status === "present_at_site"}
            onChange={handleChange}
          />
          Present At Site
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="working_at_site"
            checked={status === "working_at_site"}
            onChange={handleChange}
          />
          Working At Site
        </label>
        <label>
          <input
            type="radio"
            name="status"
            value="completed_call"
            checked={status === "completed_call"}
            onChange={handleChange}
          />
          Completed Call
        </label>
      </div>
      <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
        <button
          className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={closeModal}
        >
          Close
        </button>
        <button
          className="ml-4 bg-blue-500 text-white font-bold px-4 py-2 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};
UpdateStatusModal.propTypes = {
  closeModal: PropTypes.func,
  selectedCall: PropTypes.object,
};
export default UpdateStatusModal;
