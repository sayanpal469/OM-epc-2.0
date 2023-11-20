import { useEffect, useState } from "react";

const AddExpense = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    // Add a class to the body to prevent scrolling
    document.body.style.overflow = isModalOpen ? "hidden" : "unset";

    // Cleanup: Remove the class when the component is unmounted
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    closeModal(); // Close the modal after submitting the form
  };
  // Get the current date and time
  const currentTime = new Date();

  // Get hours, minutes, and seconds
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  // Determine AM or PM
  const amOrPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format the time
  const formattedTime = `${hours} : ${
    minutes < 9 ? `0${minutes}` : minutes
  } ${amOrPm}`;
  const currentDate = new Date();

  // Get day, month, and year
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // Months are zero-based, so add 1
  const year = currentDate.getFullYear();

  // Format the date
  const formattedDate = `${day}/${month}/${year}`;

  return (
    <div className="flex justify-center items-center w-full px-5 mb-5">
      <div className="relative flex items-center justify-end w-full sm:w-1/2 shadow-lg h-[250px] my-4 bg-gray-100 rounded-md overflow-hidden">
        <div className="w-[50%] flex flex-col items-center justify-center sm:w-[70%] h-full">
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
            Add your Expenses
          </h2>
          <button
            onClick={openModal}
            className="bg-indigo-600 my-5 hover:bg-indigo-700 text-white font-semibold py-2 px-4 border rounded-md hover:border-transparent transition duration-300"
          >
            Add Expense
          </button>
        </div>

        <div
          className="w-[50%] sm:w-[30%] h-full flex flex-col items-center justify-center bg-blue-500"
          style={{
            borderTopLeftRadius: "50%",
            borderBottomLeftRadius: "50%",
          }}
        >
          <span className="text-white text-4xl sm:text-6xl mb-2">Rs 2000</span>
          <span className="text-white"> Upto This Month</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-10 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-full h-screen  p-20 rounded-md shadow-lg backdrop-blur-md backdrop-filter">
              <label
                className="block mt-4 mb-2 font-semibold text-gray-800"
                htmlFor="selectOption"
              >
                Select Site Name
              </label>
              <select
                id="selectOption"
                name="selectOption"
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600"
                required
              >
                <option value="1">Site Name 1</option>
                <option value="2">Site Name 2</option>
                <option value="3">Site Name 3</option>
              </select>

              <label
                className="block mt-4 mb-2 font-semibold text-blue-800"
                htmlFor="totalExpense"
              >
                Total Expense
              </label>
              <input
                type="number"
                id="totalExpense"
                name="totalExpense"
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600 appearance-none"
                style={{
                  "-moz-appearance": "textfield",
                }}
                required
              />
              <label
                className="block my-4 font-semibold text-blue-800"
                htmlFor="totalKilometer"
              >
                Total Kilometer
              </label>
              <input
                type="number"
                id="totalKilometer"
                name="totalKilometer"
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600"
                required
              />
              <div className="flex mt-4 justify-between items-center">
                <div className="w-1/3">
                  <label
                    className="block mb-4 font-semibold text-blue-800"
                    htmlFor="totalTime"
                  >
                    Time
                  </label>
                  <input
                    type="text"
                    id="totalTime"
                    name="totalTime"
                    value={formattedTime}
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600"
                    required
                    disabled
                  />
                </div>

                <div className="w-1/3">
                  <label
                    className="block mb-4 font-semibold text-blue-800"
                    htmlFor="totalDate"
                  >
                    Date
                  </label>
                  <input
                    type="text"
                    id="totalDate"
                    name="totalDate"
                    value={formattedDate}
                    className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600"
                    required
                    disabled
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center justify-end space-x-4">
                <button
                  type="button"
                  className="text-sm font-semibold text-gray-600 hover:text-gray-800"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 focus:outline-none focus:border-indigo-700"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
      <style>
        {`
          input[type="number"]::-webkit-inner-spin-button,
          input[type="number"]::-webkit-outer-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }

          input[type="number"] {
            -moz-appearance: textfield;
          }
        `}
      </style>
    </div>
  );
};

export default AddExpense;
