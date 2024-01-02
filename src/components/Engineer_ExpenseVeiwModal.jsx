import PropTypes from "prop-types";
const Engineer_ExpenseVeiwModal = ({ closeModal, selectedExpense }) => {
  console.log({ selectedExpense });
  return (
    <div className="h-screen fixed inset-0 z-10 overflow-y-hidden">
      <div className="w-full h-full px-10 py-8 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50">
        {/* Modal content */}
        <div className="relative flex flex-col bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
          {/* Header */}
          <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
              {selectedExpense?.call_id || "-"}
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
              {" "}
              <span className="font-semibold mr-5">
                Call ID: {selectedExpense?.call_id || "-"}
              </span>
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">
                Total Kilometer: {selectedExpense?.total_kilometer || "-"}
              </span>{" "}
            </p>
            <p className="mb-4">
              <span className="font-semibold mr-5">
                Expense amount: {selectedExpense?.expense_amount || "-"}
              </span>{" "}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">
                Description by Admin: {selectedExpense?.admin_desc || "-"}
              </span>{" "}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">
                Description by Engineer: {selectedExpense?.eng_desc || "-"}
              </span>{" "}
            </p>
            <p className="mb-4">
              {" "}
              <span className="font-semibold mr-5">
                Expense Status: {selectedExpense?.status || "-"}
              </span>{" "}
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between py-4 sm:py-6 px-4 sm:px-28 border-t border-solid border-blueGray-200 rounded-b">
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
Engineer_ExpenseVeiwModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedExpense: PropTypes.string.isRequired,
};

export default Engineer_ExpenseVeiwModal;
