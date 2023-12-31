import PropTypes from "prop-types";

const EnginnerReport_StepTwo = ({ handleChange, WorkType, Device }) => {
  return (
    <div>
      <div className="mb-4 ">
        <label
          htmlFor="work_type"
          className="block text-gray-700 font-bold mb-4"
        >
          Work Type
        </label>
        <div className="flex flex-col gap-y-2">
          <label>
            <input
              type="radio"
              name="work_type"
              value="Warrenty"
              checked={WorkType === "Warrenty"}
              onChange={handleChange}
            />
            Warrenty
          </label>
          <label>
            <input
              type="radio"
              name="work_type"
              value="AMC"
              checked={WorkType === "AMC"}
              onChange={handleChange}
            />
            AMC
          </label>
          <label>
            <input
              type="radio"
              name="work_type"
              value="Installation"
              checked={WorkType === "Installation"}
              onChange={handleChange}
            />
            Installation
          </label>
          <label>
            <input
              type="radio"
              name="work_type"
              value="SiteInspection"
              checked={WorkType === "SiteInspection"}
              onChange={handleChange}
            />
            Site Inspection
          </label>
          <label>
            <input
              type="radio"
              name="work_type"
              value="Chargeable"
              checked={WorkType === "Chargeable"}
              onChange={handleChange}
            />
            Chargeable
          </label>
          <label>
            <input
              type="radio"
              name="work_type"
              value="PM"
              checked={WorkType === "PM"}
              onChange={handleChange}
            />
            PM
          </label>
          <label>
            <input
              type="radio"
              name="work_type"
              value="Service"
              checked={WorkType === "Service"}
              onChange={handleChange}
            />
            Service
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label
          htmlFor="device_type"
          className="block text-gray-700 font-bold mb-4"
        >
          Device Type
        </label>
        <div className="flex flex-col gap-y-2">
          <label>
            <input
              type="radio"
              name="device_type"
              value="Ups_Battery"
              checked={Device === "Ups_Battery"}
              onChange={handleChange}
            />
            UPS & Battery
          </label>
          <label>
            <input
              type="radio"
              name="device_type"
              value="Inverter_Battery"
              checked={Device === "Inverter_Battery"}
              onChange={handleChange}
            />
            Inverter & Battery
          </label>
          <label>
            <input
              type="radio"
              name="device_type"
              value="Stabilizer"
              checked={Device === "Stabilizer"}
              onChange={handleChange}
            />
            Stabilizer
          </label>
          <label>
            <input
              type="radio"
              name="device_type"
              value="Solar"
              checked={Device === "Solar"}
              onChange={handleChange}
            />
            Solar
          </label>
          <label>
            <input
              type="radio"
              name="device_type"
              value="Computer"
              checked={Device === "Computer"}
              onChange={handleChange}
            />
            Computer
          </label>
          <label>
            <input
              type="radio"
              name="device_type"
              value="Printer"
              checked={Device === "Printer"}
              onChange={handleChange}
            />
            Printer
          </label>
          <label>
            <input
              type="radio"
              name="device_type"
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
EnginnerReport_StepTwo.propTypes = {
  handleChange: PropTypes.func.isRequired,
  WorkType: PropTypes.string.isRequired,
  Device: PropTypes.string.isRequired,
};

export default EnginnerReport_StepTwo;
