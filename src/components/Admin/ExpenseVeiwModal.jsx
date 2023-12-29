import { useMutation } from "@apollo/client";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { APPROVE_EXPENSE_MUTATION } from "../../graphql/mutations/graphql.mutations";
import Loading from "../../features/loading/Loading";

const ExpenseVeiwModal = ({
  CallID,
  companyName,
  location,
  engineerName,
  amount,
  submitDate,
  closeModal,
  Kilometer,
  id,
}) => {
  const [changeExpenseStatus, { data, loading, }] = useMutation(
    APPROVE_EXPENSE_MUTATION,
    {
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`,
        },
      },
    }
  );
  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  const [description, setdescription] = useState("");

  const handleChange = (e) => {
    setdescription(e.target.value);
  };

  const handelChangeStatus = async (status) => {
    window.location.reload();
    await changeExpenseStatus({
      variables: {
        _id: id,
        approveStatus: status,
        admin_desc: description,
      },
    }),
      await closeModal();
  };

  console.log(data);

  return (
    <div className="h-screen fixed inset-0 z-10 overflow-y-hidden">
      <div className="w-full h-full px-10 py-8 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50">
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
          {loading && <Loading />}
          <div className="relative p-6 flex-auto">
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">Call ID:</span> {CallID}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">Company Location:</span>{" "}
              {location}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">Engineer Name:</span>{" "}
              {engineerName}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">Expense Amount:</span>{" "}
              {amount}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">Total Kilometer:</span>{" "}
              {Kilometer}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">Submit Date:</span>{" "}
              {submitDate}
            </p>

            <div className="mb-4">
              <textarea
                id="Description"
                name="Description"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                placeholder="Enter Description (optional)"
                value={description}
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between py-4 sm:py-6 px-4 sm:px-28 border-t border-solid border-blueGray-200 rounded-b">
            <button
              className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 sm:px-6 border border-red-500 hover:border-transparent rounded mb-2 sm:mb-0 w-full sm:w-auto"
              type="button"
              onClick={() => handelChangeStatus("REJECT")}
            >
              Reject
            </button>
            <button
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 sm:px-6 border border-blue-500 hover:border-transparent rounded mb-2 sm:mb-0 w-full sm:w-auto"
              type="button"
              onClick={() => handelChangeStatus("APPROVE")}
            >
              Accept
            </button>
            <button
              className="bg-transparent hover:bg-gray-400 text-gray-700 font-semibold hover:text-white py-2 px-4 sm:px-6 border border-gray-500 hover:border-transparent rounded w-full sm:w-auto"
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

ExpenseVeiwModal.propTypes = {
  CallID: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  engineerName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  submitDate: PropTypes.string.isRequired,
  Kilometer: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ExpenseVeiwModal;
