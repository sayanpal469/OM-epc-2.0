import { useMutation, useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { ADD_EXPENSE_MUTATION } from "../graphql/mutations/graphql.mutations";
import { GET_CALLS_BY_ENGINEER } from "../graphql/queries/graphql_queries";

const AddExpense = () => {
  const [todays_call, setTodays_call] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [engName, setEngName] = useState("");
  const [eng_emp_id, setEngEmpId] = useState("858");

  const [addExpenseMutation] = useMutation(ADD_EXPENSE_MUTATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });
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
  const { data } = useQuery(GET_CALLS_BY_ENGINEER, {
    variables: {
      eng_emp: "858",
      status: "ALL",
    },
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
    fetchPolicy: "network-only",
  });
  // Format the date

  const formattedDate = `${day}/${month}/${year}`;
  const [formData, setFormData] = useState({
    company_name: "",
    call_id: "",
    company_location: "",
    expense_amount: "",
    total_kilometer: "",
    time: formattedTime,
    date: formattedDate,
    admin_desc: "",
    eng_emp: "858",
    eng_name: engName,
    eng_desc: "",
    isApprove: "PENDING",
    status: "PENDING",
  });

  useEffect(() => {
    if (data?.callsByEng?.call_list?.length > 0) {
      const today = new Date().toLocaleDateString("en-GB").replace(/\//g, "-"); // Get the current date in the format "DD-MM-YYYY"
      // console.log({today});

      const filteredArray = data?.callsByEng?.call_list.filter((callDetail) => {
        return callDetail.assigned_date === today;
      });
      setTodays_call(filteredArray);
      setEngName(data.callsByEng.eng_name);
      setEngEmpId(data.callsByEng.eng_id);
      setFormData({
        ...formData,
        eng_emp: "858",
        eng_name: data.callsByEng.eng_name,
      });
    }
  }, [data]);
  console.log({ formData });

  console.log(data);
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log({ formData });
    try {
      // Execute the mutation with the form data and context token
      const { data } = await addExpenseMutation({
        variables: {
          expenseReport: {
            ...formData,
          },
        },
      });

      // Handle the response data if needed
      console.log("Mutation Response:", data);

      // Close the modal after submitting the form
      closeModal();
    } catch (error) {
      // Handle errors if the mutation fails
      console.error("Mutation Error:", error);
    }
  };
  const handleCompanyChange = (selectedCompanyId) => {
    const selectedCompany = todays_call.find(
      (call) => call.call_id === selectedCompanyId
    );

    setFormData({
      ...formData,
      company_name: selectedCompany?.company_name || "",
      call_id: selectedCompanyId,
      company_location: selectedCompany?.company_location || "",
    });
  };
  // console.log({ formData });
  return (
    <div className="flex justify-center items-center w-full px-5 mb-5">
      <div className="flex items-center justify-end w-full sm:w-1/2 shadow-lg h-[250px] my-4 bg-gray-100 rounded-md overflow-hidden">
        <div className="w-[50%] flex flex-col items-start lg:items-center justify-center sm:w-[70%] h-full">
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
          <span className="text-white text-3xl sm:text-4xl mb-2">Rs 2000</span>
          <span className="text-white"> Upto This Month</span>
        </div>
      </div>

      {isModalOpen && (
        <div className="h-screen fixed inset-0 z-10 overflow-y-auto">
          <form onSubmit={handleSubmit}>
            <div className="w-full h-full px-20 py-8 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50">
              <label
                className="block mb-4 font-semibold text-blue-800"
                htmlFor="selectOption"
              >
                Company name
              </label>
              <select
                id="selectOption"
                name="selectOption"
                onChange={(e) => {
                  if (e.target.value !== "default") {
                    handleCompanyChange(e.target.value);
                  } else {
                    setFormData({
                      ...formData,
                      company_name: "",
                    });
                  }
                }}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600"
                required
              >
                <option value="default">Select company name</option>
                {todays_call.map((call) => (
                  <option key={call.call_id} value={call.call_id}>
                    {call.company_name}
                  </option>
                ))}
              </select>
              <label
                className="block mt-4 mb-2 font-semibold text-blue-800"
                htmlFor="call_id"
              >
                Call Id
              </label>
              <input
                type="text"
                id="call_id"
                value={formData.call_id}
                name="call_id"
                disabled
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600 appearance-none"
                style={{
                  MozAppearance: "textfield",
                }}
              />
              <label
                className="block mt-4 mb-2 font-semibold text-blue-800"
                htmlFor="company_location"
              >
                Company location
              </label>
              <input
                type="text"
                id="company_location"
                name="company_location"
                disabled
                value={formData.company_location}
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600 appearance-none"
                style={{
                  MozAppearance: "textfield",
                }}
              />
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
                value={formData.expense_amount}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    expense_amount: e.target.value,
                  })
                }
                className="w-full p-3 border rounded-md focus:outline-none focus:border-indigo-600 appearance-none"
                style={{
                  MozAppearance: "textfield",
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
                value={formData.total_kilometer}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    total_kilometer: e.target.value,
                  })
                }
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
                  disabled={formData.company_name === ""}
                  style={{
                    cursor:
                      formData.company_name === "" ? "not-allowed" : "pointer",
                  }}
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
            MozAppearance: textfield;
          }
        `}
      </style>
    </div>
  );
};

export default AddExpense;
