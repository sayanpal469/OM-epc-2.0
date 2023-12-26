import PropTypes from "prop-types";
import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const EnginnerReport_StepNine = ({
  BatteryDataInput,
  SetBatteryDataInput,
  addBatteryData,
  BatteryData,
}) => {
  const [showTable, setShowTable] = useState(false);

  const handleChange = (event, fieldName) => {
    const { value } = event.target;
    SetBatteryDataInput({
      ...BatteryDataInput,
      [fieldName]: value,
    });
  };

  const toggleTable = () => {
    setShowTable((prevState) => !prevState);
  };
  return (
    <div className=" w-full">
      <div className="mb-4">
        <p className="block text-gray-700 font-bold mb-2">
          Battery Test Report
        </p>

        <div className="flex flex-col sm:flex-row items-start sm:items-center ">
          <button
            type="button"
            onClick={() => {
              addBatteryData(BatteryDataInput);
            }}
            className="w-full sm:w-auto mt-1 sm:mt-0 px-4 py-1 bg-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2"
          >
            Add
          </button>

          <button
            type="button"
            onClick={toggleTable}
            className={`w-full sm:w-auto px-2 sm:px-4 py-1 sm:py-1 bg-blue-500 text-white rounded-md flex items-center justify-center ${
              showTable ? "flex-row-reverse" : "flex-row"
            }`}
          >
            {showTable ? (
              <FaChevronUp className="ml-1" /> // FontAwesome Icon for "Hide Table"
            ) : (
              <FaChevronDown className="mr-1" /> // FontAwesome Icon for "Show Table"
            )}
            {showTable ? "Show Input " : "Show Table"}
          </button>
        </div>
      </div>
      {showTable ? (
        <div style={{ border: "1px solid black" }} className="">
          <table>
            <thead>
              <tr>
                {Object.keys(BatteryDataInput).map((key, index) => {
                  return (
                    <th scope="col" key={index}>
                      {key}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {BatteryData.map((rowData, rowIndex) => (
                <tr key={rowIndex}>
                  {Object.keys(BatteryDataInput).map((key, colIndex) => (
                    <td data-label={key} key={colIndex}>
                      {rowData[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>
          <div>
            <input
              type="text"
              id="BatteryBatchCode"
              name="BatteryBatchCode"
              value={BatteryDataInput.BatteryBatchCode}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter Battery Batch Code"
              onChange={(e) => handleChange(e, "BatteryBatchCode")}
              required
            />
            <input
              type="text"
              id="WithMains"
              name="WithMains"
              value={BatteryDataInput.WithMains}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter With Mains"
              onChange={(e) => handleChange(e, "WithMains")}
              required
            />

            <input
              type="text"
              id="WithoutMains"
              name="WithoutMains"
              value={BatteryDataInput.WithoutMains}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter Without Mains"
              onChange={(e) => handleChange(e, "WithoutMains")}
              required
            />

            <input
              type="text"
              id="After5mins"
              name="After5mins"
              value={BatteryDataInput.After5mins}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 5 mins"
              onChange={(e) => handleChange(e, "After5mins")}
              required
            />

            <input
              type="text"
              id="After10mins"
              name="After10mins"
              value={BatteryDataInput.After10mins}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 10 mins"
              onChange={(e) => handleChange(e, "After10mins")}
              required
            />

            <input
              type="text"
              id="After20mins"
              name="After20mins"
              value={BatteryDataInput.After20mins}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 20 mins"
              onChange={(e) => handleChange(e, "After20mins")}
              required
            />

            <input
              type="text"
              id="After40mins"
              name="After40mins"
              value={BatteryDataInput.After40mins}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 40 mins"
              onChange={(e) => handleChange(e, "After40mins")}
              required
            />

            <input
              type="text"
              id="After1hrs"
              name="After1hrs"
              value={BatteryDataInput.After1hrs}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter  After 1 hrs"
              onChange={(e) => handleChange(e, "After1hrs")}
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};
EnginnerReport_StepNine.propTypes = {
  SetBatteryDataInput: PropTypes.func.isRequired,
  BatteryDataInput: PropTypes.object.isRequired,
  BatteryData: PropTypes.array.isRequired,
  addBatteryData: PropTypes.func.isRequired,
};

export default EnginnerReport_StepNine;
