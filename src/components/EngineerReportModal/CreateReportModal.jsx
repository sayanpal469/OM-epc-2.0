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
const formattedTime = ${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${amOrPm};

 
  const [formData, setFormData] = useState({

    date:new Date().toISOString().split('T')[0],
    client_name:'',
    atm_id:'',
    site_type:'',
    work_type:'',
    device_type:'',
    product_make:'',
    product_slNo: '',
    buy_back_details: '',
    nature_of_complaint:'',

    ac_input_three_phase_RY:'',
    ac_input_three_phase_YB:'',
    ac_input_three_phase_RB:'',
    ac_input_three_phase_NR:'',
    ac_output_three_phase_RY:'',
    ac_output_three_phase_YB:'',
    ac_output_three_phase_RB:'',
    ac_output_three_phase_NR:'',
    ac_input_single_phase_LN:'',
    ac_input_single_phase_NE:'',
    ac_input_single_phase_LE:'',
    ac_output_single_phase_LN:'',
    ac_output_single_phase_NE:'',
    ac_output_single_phase_LE:'',
    V:'',
    V_withMains:'',
    V_withoutMains:'',
    power_cut:'',
    battery_make:'',
    battery_type:'',
    battery_AH:'',
    quantity:'',
    customer_sign:'',
    eng_sign:'',
    sys_msg:'This Report is System Generated',
    AssignedTime:formattedTime,
    SiteImagesInput:[]
  });

// const [SiteImagesInput, setSiteImagesInput] = useState([]);

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
      requiredFields = ['client_name', 'atm_id', 'site_type'];
    } else if (form.currentStep?.name === 'step-2') {
      requiredFields = [ 'work_type', 'device_type',];
    }
  
    for (const field of requiredFields) {
      if (!formData[field]) {
        setErrorDiv(true);
        setStepOneError(Please Enter the ${field.replace(/([A-Z])/g, ' $1').trim()});
        setTimeout(() => {
          setErrorDiv(false);
          setStepOneError('');
        }, 5000);

        return; 
      }
    }
  

    await fakeDelay();
   if(form.currentStep?.name !== "step-9")
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
      console.log(Result);
      localStorage.setItem("formData",JSON.stringify(Result));
      closeModal()
    },
 

  });

  const isLoading = form.isSubmitting;

return (
  <div className="h-screen fixed inset-0 z-10 overflow-y-hidden bg-gray-100">
  <div className="w-full h-full px-10 py-4 shadow-lg backdrop-blur-md backdrop-filter bg-opacity-50">  
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
             Date={formData.date}
             ClientName={formData.client_name}
             SiteId_ATMId={formData.atm_id}
             SiteType={formData.site_type}
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
            WorkType={formData.work_type}
            Device={formData.device_type}
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
            ProductMake={formData.product_make}
            ProductSlNo={formData.product_slNo}
            BuyBackDetails={formData.buy_back_details}
            NatureOfComplaint={formData.nature_of_complaint}
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
            AcInputThreePhase_RY={formData.ac_input_three_phase_RY}
            AcInputThreePhase_YB={formData.ac_input_three_phase_YB}
            AcInputThreePhase_RB={formData.ac_input_three_phase_RB}
            AcInputThreePhase_NR={formData.ac_input_three_phase_NR}
            AcOutputThreePhase_RY={formData.ac_output_three_phase_RY}
            AcOutputThreePhase_YB={formData.ac_output_three_phase_YB}
            AcOutputThreePhase_RB={formData.ac_output_three_phase_RB}
            AcOutputThreePhase_NR={formData.ac_output_three_phase_NR}
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
            AcInputSinglePhase_LN={formData.ac_input_single_phase_LN}
            AcInputSinglePhase_NE={formData.ac_input_single_phase_NE}
            AcInputSinglePhase_LE={formData.ac_input_single_phase_LE}
            AcOutputSinglePhase_LN={formData.ac_output_single_phase_LN}
            AcOutputSinglePhase_NE={formData.ac_output_single_phase_NE}
            AcOutputSinglePhase_LE={formData.ac_output_single_phase_LE}
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
            UpsInvertDCV={formData.V}
            DCV_WithMains={formData.V_withMains}
            DCV_WithoutMains={formData.V_withoutMains}
            PowerCut={formData.power_cut}
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
            BatteryMake={formData.battery_make}
            BatteryType={formData.battery_type}
            BatteryAH={formData.battery_AH}
            Quantity={formData.quantity}
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
            SetBatteryDataInput={setBatteryDataInput}
            BatteryDataInput={BatteryDataInput}
            addBatteryData={addBatteryData}
            BatteryData={BatteryData}
            setFormData={setFormData}
            formData={formData}
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
      className={w-full sm:w-auto mt-4 sm:mt-0 px-4 py-2 rounded-md ${isLoading ? 'bg-gray-400' : 'bg-blue-500 text-white'}}
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