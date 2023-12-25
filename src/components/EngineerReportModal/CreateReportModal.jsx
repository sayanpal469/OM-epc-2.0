import PropTypes from "prop-types";
import { useEffect} from "react";
import  { useState } from 'react';
import { Formiz, FormizStep, useForm } from '@formiz/core';

import EnginnerReport_StepOne from "./CreateReport_StepOne";
import EnginnerReport_StepTwo from "./CreateReport_StepTwo";
import EnginnerReport_StepThree from "./CreateReport_StepThree";
import EnginnerReport_StepFour from "./CreateReport_StepFour";
import EnginnerReport_StepSix from "./CreateReport_StepSix";
import EnginnerReport_StepSeven from "./CreateReport_StepSeven";
import EnginnerReport_StepEight from "./CreateReport_StepEight";
import EnginnerReport_StepFive from "./CreateReport_StepFive";
import EnginnerReport_StepNine from "./CreateReport_StepNine";
import EnginnerReport_StepTen from "./CreateReport_StepTen";

const fakeDelay = (delay = 500) => new Promise((r) => setTimeout(r, delay));
const CreateReportModal = ({
  closeModal
}) => {


  useEffect(() => {
    // Apply overflow-hidden to body when the modal is open
    document.body.style.overflow = "hidden";

    // Cleanup function to remove the style when the component unmounts or modal is closed
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Time Configuration 
    // Get the current date and time
    const currentTime = new Date();

// Get hours and minutes
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();

// Determine AM or PM
const amOrPm = hours >= 12 ? 'PM' : 'AM';

// Convert to 12-hour format
hours = hours % 12 || 12;

// Format the time
const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${amOrPm}`;

 
  const [formData, setFormData] = useState({
    CompanyName: '',
    EmpID:'',
    CallID: '',
    ComplainId:'',
    Date:new Date().toISOString().split('T')[0],
    CustomerName:'',
    ClientName:'',
    SiteId_ATMId:'',
    PhNo:'',
    Address:'',
    SiteType:'',
    WorkType:'',
    Device:'',
    ProductMake:'',
    ProductSlNo:'',
    BuyBackDetails:'',
    NatureOfComplaint:'',
    AcInputThreePhase_RY:'',
    AcInputThreePhase_YB:'',
    AcInputThreePhase_RB:'',
    AcInputThreePhase_NR:'',
    AcOutputThreePhase_RY:'',
    AcOutputThreePhase_YB:'',
    AcOutputThreePhase_RB:'',
    AcOutputThreePhase_NR:'',
    AcInputSinglePhase_LN:'',
    AcInputSinglePhase_NE:'',
    AcInputSinglePhase_LE:'',
    AcOutputSinglePhase_LN:'',
    AcOutputSinglePhase_NE:'',
    AcOutputSinglePhase_LE:'',
    UpsInvertDCV:'',
    DCV_WithMains:'',
    DCV_WithoutMains:'',
    PowerCut:'',
    BatteryMake:'',
    BatteryType:'',
    BatteryAH:'',
    Quantity:'',
    Sign:'',
    CustomerRemarks:'',
    AssignedTime:formattedTime,
  });

  const [BatteryDataInput, setBatteryDataInput] = useState({
    After1hrs:'',
    After40mins:'',
    After20mins:'',
    After10mins:'',
    After5mins:'',
    WithMains:'',
    BatteryBatchCode:'',
    WithoutMains:'',
  });
  const [BatteryData, setBatteryData] = useState([])

  const addBatteryData = (data) => {
    setBatteryData(prevData => [...prevData, data]);
    setBatteryDataInput({
      BatteryBatchCode:'',
      WithMains:'',
      WithoutMains:'',
      After5mins:'',
      After10mins:'',
      After20mins:'',
      After40mins:'',
      After1hrs:'',
    })
  };

const handleSubmitSignature = (name , value)=>{
  setFormData({ ...formData, [name]: value });
}
  const [StepOneError, setStepOneError] = useState("")
  const [ErrorDiv, setErrorDiv] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitStep = async (event) => {
    event.preventDefault();
    let requiredFields = [];
  
    if (form.currentStep?.name === 'step-1') {
      requiredFields = ['CompanyName', 'ComplainId'];
    } else if (form.currentStep?.name === 'step-2') {
      requiredFields = ['CustomerName', 'ClientName', 'SiteId_ATMId', 'PhNo' , 'Address'];
    }
  
    for (const field of requiredFields) {
      if (!formData[field]) {
        setErrorDiv(true);
        setStepOneError(`Please Enter the ${field.replace(/([A-Z])/g, ' $1').trim()}`);
        setTimeout(() => {
          setErrorDiv(false);
          setStepOneError('');
        }, 5000);

        return; 
      }
    }
  
    // All fields are filled, proceed with form submission
    
    console.log(`Submitting ${form.currentStep?.name}...`);
    await fakeDelay();
   if(form.currentStep?.name !== "step-10")
   {
    form.goToNextStep()
   }else{
    form.submitStep();
   }
  };


  const form = useForm({
      onSubmit: async (values) => {
      const Result ={...formData,BatteryData}
      console.log('Submitting form',values);
      await fakeDelay();
      console.log(Result)
      closeModal()
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

          <FormizStep name="step-1">
            {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepOne
             handleChange={handleChange}
             EmpID={formData.EmpID}
             CallID={formData.CallID}
             CompanyName={formData.CompanyName}
             ComplainId={formData.ComplainId}
             Date={formData.Date}
            />
          </FormizStep>

          {/* Step 2 */}

          <FormizStep name="step-2">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepTwo
            handleChange={handleChange}
            CustomerName={formData.CustomerName}
            ClientName={formData.ClientName}
            SiteId_ATMId={formData.SiteId_ATMId}
            PhNo={formData.PhNo}
            Address={formData.Address}
            SiteType={formData.SiteType}
            />
          </FormizStep>

           {/* Step 3 */}

           <FormizStep name="step-3">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepThree
            handleChange={handleChange}
            WorkType={formData.WorkType}
            Device={formData.Device}
            />
          </FormizStep>

           {/* Step 4 */}

           <FormizStep name="step-4">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepFour
            handleChange={handleChange}
            ProductMake={formData.ProductMake}
            ProductSlNo={formData.ProductSlNo}
            BuyBackDetails={formData.BuyBackDetails}
            NatureOfComplaint={formData.NatureOfComplaint}
            />
          </FormizStep>
            
            {/* Step 5 */}

           <FormizStep name="step-5">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepFive
            handleChange={handleChange}
             AcInputThreePhase_RY={formData.AcInputThreePhase_RY}
             AcInputThreePhase_YB={formData.AcInputThreePhase_YB}
             AcInputThreePhase_RB={formData.AcInputThreePhase_RB}
             AcInputThreePhase_NR={formData.AcInputThreePhase_NR}
             AcOutputThreePhase_RY={formData.AcOutputThreePhase_RY}
             AcOutputThreePhase_YB={formData.AcOutputThreePhase_YB}
             AcOutputThreePhase_RB={formData.AcOutputThreePhase_RB}
             AcOutputThreePhase_NR={formData.AcOutputThreePhase_NR}
            />
          </FormizStep>

          {/* Step 6 */}

          <FormizStep name="step-6">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepSix
            handleChange={handleChange}
            AcInputSinglePhase_LN={formData.AcInputSinglePhase_LN}
            AcInputSinglePhase_NE={formData.AcInputSinglePhase_NE}
            AcInputSinglePhase_LE={formData.AcInputSinglePhase_LE}
            AcOutputSinglePhase_LN={formData.AcOutputSinglePhase_LN}
            AcOutputSinglePhase_NE={formData.AcOutputSinglePhase_NE}
            AcOutputSinglePhase_LE={formData.AcOutputSinglePhase_LE}
            />
          </FormizStep>

           {/* Step 7 */}

           <FormizStep name="step-7">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepSeven
            handleChange={handleChange}
             UpsInvertDCV={formData.UpsInvertDCV}
             DCV_WithMains={formData.DCV_WithMains}
             DCV_WithoutMains={formData.DCV_WithoutMains}
             PowerCut={formData.PowerCut}
            />
          </FormizStep>

          {/* Step 8 */}

          <FormizStep name="step-8">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepEight
            handleChange={handleChange}
            BatteryMake={formData.BatteryMake}
            BatteryType={formData.BatteryType}
            BatteryAH={formData.BatteryAH}
            Quantity={formData.Quantity}
            />
          </FormizStep>

          {/* Step 9 */}

          <FormizStep name="step-9">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepNine
            SetBatteryDataInput={setBatteryDataInput}
            BatteryDataInput={BatteryDataInput}
            addBatteryData={addBatteryData}
            BatteryData={BatteryData}
            />
          </FormizStep>

          {/* Step 10 */}

          <FormizStep name="step-10">
          {ErrorDiv &&
            <div className=" text-center my-2 p-2 bg-red-100 text-red-400 border border-red-400 rounded-md text-sm sm:text-base md:text-lg lg:text-xl">
             {StepOneError}
            </div>
            }
            <EnginnerReport_StepTen
            handleSignature={handleSubmitSignature}
            />
          </FormizStep>

          {form.steps?.length && (
  <div className="flex flex-col sm:flex-row items-center justify-between ">
    <div>
    {form.currentStep?.name === 'step-1' && (
      <button onClick={closeModal} className="w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 bg-gray-300 rounded-md r-2 mr-2">
        Cancel
      </button>
    )}

    {!form.isFirstStep && form.currentStep?.name !== 'step-1' && (
      <button type="button" onClick={form.goToPreviousStep} className="w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 bg-gray-300 rounded-md mr-2">
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
  </div>


)}

        </div>
      </form>
    </Formiz>
  </div>  
  </div>
);
};

CreateReportModal.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CreateReportModal;
