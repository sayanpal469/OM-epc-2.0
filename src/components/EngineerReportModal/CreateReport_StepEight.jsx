import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const EnginnerReport_StepEight = ({
  BatteryDataInput,
  SetBatteryDataInput,
  addBatteryData,
  BatteryData,
  setFormData,
  formData,
}) => {
  const [showTable, setShowTable] = useState(false);
  const [imageFiles, setImageFiles] = useState([]);
  useEffect(() => {
    if (imageFiles.length > 0) {
      setFormData({ ...formData, ["site_images"]: imageFiles });
    }
  }, [imageFiles]);

  const handleFileChange = async (event) => {
    const files = event.target.files;

    // Check if there are any files
    if (files.length === 0) {
      return;
    }
    setImageFiles((prevImages) => [...prevImages, ...files]);
  };

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
          {!showTable && (
            <button
              type="button"
              onClick={() => {
                addBatteryData(BatteryDataInput);
              }}
              className="w-full sm:w-auto mt-1 sm:mt-0 px-4 py-1 bg-gray-300 rounded-md mb-2 sm:mb-0 sm:mr-2"
            >
              Add
            </button>
          )}
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
          <div className="my-2">
            <input
              type="file"
              accept=".jpeg, .jpg, .png"
              multiple
              onChange={handleFileChange}
              className=" block w-full bg-transparent text-gray-700 border border-blue-500 rounded px-2 py-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            />
          </div>
        </div>
      </div>
      {showTable ? (
        <div
          style={{ border: "1px solid red", width: "100%", overflow: "scroll" }}
        >
          <table>
            <thead className="text-sm">
              <tr>
                {Object.keys(BatteryDataInput).map((key, index) => (
                  <th scope="col" key={index}>
                    {key}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {BatteryData.map((data, index) => (
                <tr key={index}>
                  {Object.keys(BatteryDataInput).map((key, columnIndex) => (
                    <td key={columnIndex} data-label={key}>
                      {data[key]}
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
              value={BatteryDataInput.battery_catch_code}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter Battery Batch Code"
              onChange={(e) => handleChange(e, "battery_catch_code")}
              required
            />
            <input
              type="text"
              id="WithMains"
              name="WithMains"
              value={BatteryDataInput.with_mains}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter With Mains"
              onChange={(e) => handleChange(e, "with_mains")}
              required
            />

            <input
              type="text"
              id="WithoutMains"
              name="WithoutMains"
              value={BatteryDataInput.without_mains}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter Without Mains"
              onChange={(e) => handleChange(e, "without_mains")}
              required
            />

            <input
              type="text"
              id="After5min"
              name="After5min"
              value={BatteryDataInput.after_5_min}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 5 mins"
              onChange={(e) => handleChange(e, "after_5_min")}
              required
            />

            <input
              type="text"
              id="After10mins"
              name="After10mins"
              value={BatteryDataInput.after_10_min}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 10 mins"
              onChange={(e) => handleChange(e, "after_10_min")}
              required
            />

            <input
              type="text"
              id="After20mins"
              name="After20mins"
              value={BatteryDataInput.after_20_min}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 20 mins"
              onChange={(e) => handleChange(e, "after_20_min")}
              required
            />

            <input
              type="text"
              id="After40mins"
              name="After40mins"
              value={BatteryDataInput.after_40_min}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter After 40 mins"
              onChange={(e) => handleChange(e, "after_40_min")}
              required
            />

            <input
              type="text"
              id="After1hrs"
              name="After1hrs"
              value={BatteryDataInput.after_1_hour}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 mb-2"
              placeholder="Enter  After 1 hrs"
              onChange={(e) => handleChange(e, "after_1_hour")}
              required
            />
          </div>
        </div>
      )}
    </div>
  );
};
EnginnerReport_StepEight.propTypes = {
  SetBatteryDataInput: PropTypes.func.isRequired,
  BatteryDataInput: PropTypes.object.isRequired,
  BatteryData: PropTypes.array.isRequired,
  addBatteryData: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default EnginnerReport_StepEight;
