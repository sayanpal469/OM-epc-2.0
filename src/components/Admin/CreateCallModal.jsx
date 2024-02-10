import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
  GET_CALL_BY_CALLID,
  GET_ENGINEERS,
} from "../../graphql/queries/graphql_queries";
import { CREATE_CALL_MUTATION } from "../../graphql/mutations/graphql.mutations";
import toast, { Toaster } from "react-hot-toast";
import { FaSearch } from "react-icons/fa";

const fakeDelay = (delay = 500) => new Promise((r) => setTimeout(r, delay));

const CreateCallModal = ({ closeModal, refetch }) => {
  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [engineers, setEngineers] = useState([]);
  const [callId, setCallId] = useState("");
  const [callData, setCallData] = useState({});

  const [createCallMutation] = useMutation(CREATE_CALL_MUTATION, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`,
      },
    },
  });

  const { data } = useQuery(GET_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`, // Include the token from local storage
      },
    },
  });

  const [getCallByCallId, { data: existsData }] = useLazyQuery(
    GET_CALL_BY_CALLID,
    {
      variables: {
        call_id: callId,
      },
      context: {
        headers: {
          authorization: `${localStorage.getItem("token")}`, // Include the token from local storage
        },
      },
    }
  );

  console.log(existsData);
  console.log(callData);

  const currentTime = new Date();

  // Get hours and minutes
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  // Convert to 12-hour format
  hours = hours % 12 || 12;
  // Determine AM or PM
  const amOrPm = hours >= 12 ? "AM" : "PM";

  // Format the time
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")} ${amOrPm}`;

  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;

  const [formData, setFormData] = useState({
    call_id: "",
    company_name: "",
    customer_contact: "",
    company_details: "",
    company_location: "",
    company_address: "",
    eng_name: "",
    eng_emp: "",
    work_type: "",
    assigned_date: formattedDate,
    assigned_time: formattedTime,
    admin_desc: "",
    eng_desc: "-",
  });

  const [StepOneError, setStepOneError] = useState("");
  const [ErrorDiv, setErrorDiv] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitStep = async (event) => {
    event.preventDefault();
    let requiredFields = [];

    if (form.currentStep?.name === "step1") {
      requiredFields = [
        "call_id",
        "customer_contact",
        "company_name",
        "company_details",
        "company_location",
        "company_address",
      ];
    } else if (form.currentStep?.name === "step-2") {
      requiredFields = ["eng_name", "eng_emp"];
    }

    for (const field of requiredFields) {
      if (!formData[field]) {
        setErrorDiv(true);
        setStepOneError(
          `Please Enter the ${field.replace(/([A-Z])/g, " $1").trim()}`
        );

        setTimeout(() => {
          setErrorDiv(false);
          setStepOneError("");
        }, 5000);

        return;
      }
    }

    // All fields are filled, proceed with form submission

    console.log(`Submitting ${form.currentStep?.name}...`);
    await fakeDelay();
    form.submitStep();
  };

  const form = useForm({
    onSubmit: async () => {
      try {
        // console.log("Submitting form", values);
        await fakeDelay();

        await toast.promise(
          createCallMutation({
            variables: {
              call: formData,
            },
          }),
          {
            loading: "Creating Call...",
            success: <b>🎉 Call created successfully!</b>,
            error: (error) => <b>{error.message || "Something went wrong"}</b>,
          }
        );

        // After the toast is shown and promise is resolved, close the modal
        refetch({ status: "ALL" });
        setTimeout(() => {
          closeModal();
        }, 3000);
      } catch (error) {
        console.error("Error submitting form", error);
        // Handle error as needed
      }
    },
  });

  const isLoading = form.isSubmitting;

  const handelSearch = () => {
    try {
      getCallByCallId();
      // console.log(data);
    } catch (error) {
      console.error("Error fetching call data:", error.message);
    }
  };

  useEffect(() => {
    if (existsData) {
      setCallData(existsData.data);
      setFormData({
        ...formData,
        call_id: callData.call_id,
        company_name: callData.company_name,
        customer_contact: callData.customer_contact,
        company_details: callData.company_details,
        company_location: callData.company_location,
        company_address: callData.company_address,
        eng_name: callData.eng_name,
        eng_emp: callData.eng_emp,
      });
    }
  }, [callData, existsData]);

  useEffect(() => {
    if (data) {
      setEngineers(data?.engineers);
    }
  }, [data]);

  // console.log(data);

  return (
    <div className="h-screen fixed inset-0 z-10 overflow-y-hidden bg-gray-100">
      <div className="w-full h-full px-20 py-8 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50 relative">
        <Formiz connect={form}>
          <form noValidate onSubmit={handleSubmitStep}>
            <div>
              {/* Step 1 */}

              <FormizStep name="step1">
                {ErrorDiv && (
                  <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
                    {StepOneError}
                  </div>
                )}

                <div className="mb-10">
                  <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                    <input
                      onChange={(e) => setCallId(e.target.value)}
                      type="search"
                      className="relative m-0 -mr-0.5 block min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
                      placeholder="Search using Call id"
                      aria-label="Search"
                      aria-describedby="button-addon1"
                    />

                    <button
                      onClick={handelSearch}
                      className="relative z-[2] flex items-center rounded-r bg-primary px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-primary-700 hover:shadow-lg focus:bg-primary-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800 active:shadow-lg bg-blue-500"
                      type="button"
                      id="button-addon1"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      <FaSearch />
                    </button>
                  </div>
                </div>
                <StepOne
                  handleChange={handleChange}
                  call_id={formData.call_id}
                  customer_contact={formData.customer_contact}
                  company_name={formData.company_name}
                  company_details={formData.company_details}
                  company_location={formData.company_location}
                  company_address={formData.company_address}
                />
              </FormizStep>

              <FormizStep name="step-2">
                {ErrorDiv && (
                  <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
                    {StepOneError}
                  </div>
                )}
                <StepTwo
                  handleChange={handleChange}
                  eng_name={formData.eng_name}
                  eng_emp={formData.eng_emp}
                  work_type={formData.call_status}
                  assigned_date={formattedDate}
                  assigned_time={formData.assigned_time}
                  description={formData.admin_desc}
                  engineers={engineers}
                  setFormData={setFormData}
                  formData={formData}
                />
              </FormizStep>

              {form.steps?.length && (
                <div className="flex flex-col sm:flex-row items-center justify-between ">
                  <div>
                    {form.currentStep?.name === "step1" && (
                      <button
                        onClick={closeModal}
                        className="w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 bg-gray-300 rounded-md mr-2"
                      >
                        Cancel
                      </button>
                    )}

                    {!form.isFirstStep &&
                      form.currentStep?.name !== "step1" && (
                        <button
                          onClick={form.goToPreviousStep}
                          className="w-full sm:w-auto mt-4 sm:mt-0 mr-2-2 px-4 py-2 bg-gray-300 rounded-md"
                        >
                          Previous
                        </button>
                      )}
                    <button
                      type="submit"
                      className={`w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md ml-2 ${
                        isLoading ? "bg-gray-400" : "bg-blue-500 text-white"
                      }`}
                      disabled={
                        (form.isLastStep ? !form.isValid : !form.isStepValid) &&
                        form.isStepSubmitted
                      }
                    >
                      {form.isLastStep ? "Submit" : "Next"}
                    </button>
                  </div>

                  <div className="text-sm text-gray-500 mt-4 sm:mt-0">
                    Step {(form.currentStep?.index ?? 0) + 1} /{" "}
                    {form.steps.length}
                  </div>
                </div>
              )}
            </div>
          </form>
        </Formiz>
      </div>
      <div
        className="z-1"
        style={{
          position: "fixed",
          top: "10px",
          width: "100%",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: "9999", // Center horizontally
        }}
      >
        <Toaster />
      </div>
    </div>
  );
};

CreateCallModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default CreateCallModal;
