import PropTypes from "prop-types";



const EnginnerReport_StepThree = ({
  handleChange,
  WorkType,
  Device,
 }) => {


  
  return (
    <div>
        <div className="mb-4 ">
        <label htmlFor="SiteType" className="block text-gray-700 font-bold mb-4">
         Site Type
        </label>
        <div className="flex flex-col gap-y-2">
        <label>
          <input
            type="radio"
            name="WorkType"
            value="Warrenty"
            checked={WorkType === "Warrenty"}
            onChange={handleChange}
          />
          Warrenty
        </label>
        <label>
          <input
            type="radio"
            name="WorkType"
            value="AMC"
            checked={WorkType === "AMC"}
            onChange={handleChange}
          />
          AMC
        </label>
        <label>
          <input
            type="radio"
            name="WorkType"
            value="Installation"
            checked={WorkType === "Installation"}
            onChange={handleChange}
          />
          Installation
        </label>
        <label>
          <input
            type="radio"
            name="WorkType"
            value="SiteInspection"
            checked={WorkType === "SiteInspection"}
            onChange={handleChange}
          />
          Site Inspection
        </label>
        <label>
          <input
            type="radio"
            name="WorkType"
            value="Chargeable"
            checked={WorkType === "Chargeable"}
            onChange={handleChange}
          />
          Chargeable
        </label>
        <label>
          <input
            type="radio"
            name="WorkType"
            value="PM"
            checked={WorkType === "PM"}
            onChange={handleChange}
          />
          PM
        </label>
        <label>
          <input
            type="radio"
            name="WorkType"
            value="Service"
            checked={WorkType === "Service"}
            onChange={handleChange}
          />
          Service
        </label>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="Device" className="block text-gray-700 font-bold mb-4">
         Device Type
        </label>
        <div className="flex flex-col gap-y-2">
        <label>
          <input
            type="radio"
            name="Device"
            value="Ups&Battery"
            checked={Device === "Ups&Battery"}
            onChange={handleChange}
          />
          UPS & Battery
        </label>
        <label>
          <input
            type="radio"
            name="Device"
            value="Inverter&Battery"
            checked={Device === "Inverter&Battery"}
            onChange={handleChange}
          />
          Inverter & Battery
        </label>
        <label>
          <input
            type="radio"
            name="Device"
            value="Stabilizer"
            checked={Device === "Stabilizer"}
            onChange={handleChange}
          />
          Stabilizer
        </label>
        <label>
          <input
            type="radio"
            name="Device"
            value="Solar"
            checked={Device === "Solar"}
            onChange={handleChange}
          />
          Solar
        </label>
        <label>
          <input
            type="radio"
            name="Device"
            value="Computer"
            checked={Device === "Computer"}
            onChange={handleChange}
          />
          Computer
        </label>
        <label>
          <input
            type="radio"
            name="Device"
            value="Printer"
            checked={Device === "Printer"}
            onChange={handleChange}
          />
          Printer
        </label>
        <label>
          <input
            type="radio"
            name="Device"
            value="CCTV"
            checked={Device === "CCTV"}
            onChange={handleChange}
          />
          CCTV
        </label>
        </div>
      </div>
    </div>
    
  );
};
EnginnerReport_StepThree.propTypes = {
  handleChange: PropTypes.func.isRequired,
  WorkType: PropTypes.string.isRequired,
  Device: PropTypes.string.isRequired,
};

export default EnginnerReport_StepThree;

