import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import { Formiz, FormizStep, useForm } from "@formiz/core";
import StepTwo from "./StepTwo";
import StepOne from "./StepOne";
import { useQuery } from "@apollo/client";
import { GET_ENGINEERS } from "../../graphql/queries/graphql_queries";

const fakeDelay = (delay = 500) => new Promise((r) => setTimeout(r, delay));
const CreateCallModal = ({ closeModal }) => {
  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [engineers, setEngineers] = useState([]);
  const { data } = useQuery(GET_ENGINEERS, {
    context: {
      headers: {
        authorization: `${localStorage.getItem("token")}`, // Include the token from local storage
      },
    },
  });

  useEffect(() => {
    if (data) {
      console.log(data);
      setEngineers(data.engineers);
    }
  }, [data]);

  console.log({ engineers });

  // Time Configuration
  // Get the current date and time
  const currentTime = new Date();

  // Get hours and minutes
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();

  // Determine AM or PM
  const amOrPm = hours >= 12 ? "PM" : "AM";

  // Convert to 12-hour format
  hours = hours % 12 || 12;

  // Format the time
  const formattedTime = `${String(hours).padStart(2, "0")}:${String(
    minutes
  ).padStart(2, "0")} ${amOrPm}`;

  const [formData, setFormData] = useState({

    EmpID:'',
    CallID: '',
    CompanyName: '',
    CompanyDetails: '',
    CompanyLocation: '',
    CompanyAddress: '',
    EngineerName: '',
    AssignedDate:new Date().toISOString().split('T')[0],
    AssignedTime:formattedTime,
    Description:'',

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
        "CallID",
        "CompanyName",
        "CompanyDetails",
        "CompanyLocation",
        "CompanyAddress",
      ];
    } else if (form.currentStep?.name === "step-2") {
      requiredFields = ["EngineerName"];
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
    onSubmit: async (valus) => {
      console.log("Submitting form", valus);
      await fakeDelay();
      console.log(formData);
      closeModal();
    },
  });

  const isLoading = form.isSubmitting;

return (
  <div className="h-screen fixed inset-0 z-10 overflow-y-hidden bg-gray-100">
  <div className="w-full h-full px-20 py-8 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50">  
  <Formiz connect={form}>
      <form noValidate onSubmit={handleSubmitStep}>
        <div>
         
          {/* Step 1 */}

          <FormizStep name="step1">
            {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <StepOne
             handleChange={handleChange}
             EmpID={formData.EmpID}
             CallID={formData.CallID}
             CompanyName={formData.CompanyName}
             CompanyDetails={formData.CompanyDetails}
             CompanyLocation={formData.CompanyLocation}
             CompanyAddress={formData.CompanyAddress}
            />
          </FormizStep>

          {/* Step 2 */}

          <FormizStep name="step-2">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <StepTwo
            handleChange={handleChange}
            EngineerName={formData.EngineerName}
            AssignedDate={formData.AssignedDate}
            AssignedTime={formData.AssignedTime}
            Description={formData.Description}
            />
          </FormizStep>

          

          {form.steps?.length && (
  <div className="flex flex-col sm:flex-row items-center justify-between">
    <div>
    {form.currentStep?.name === 'step1' && (
      <button onClick={closeModal} className="w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 bg-gray-300 rounded-md mx-2">
        Cancel
      </button>
    )}

    {!form.isFirstStep && form.currentStep?.name !== 'step1' && (
      <button onClick={form.goToPreviousStep} className="w-full sm:w-auto mt-4 sm:mt-0 mx-2 px-4 py-2 bg-gray-300 rounded-md mx-2">
        Previous
      </button>
    )}
    <button
      type="submit"
      className={`w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md ${isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
      disabled={(form.isLastStep ? !form.isValid : !form.isStepValid) && form.isStepSubmitted}
    >
      {form.isLastStep ? 'Submit' : 'Next'}
    </button>
    </div>

    <div className="text-sm text-gray-500 mt-4 sm:mt-0">
      Step {(form.currentStep?.index ?? 0) + 1} / {form.steps.length}

    </div>
  );
};

CreateCallModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CreateCallModal;
