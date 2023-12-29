import PropTypes from "prop-types";
import { useState } from "react";


const engineerName = ['engineer1', 'engineer2' , 'enginner3']
const Edit_Call = ({
    closeModal
}) => {
  const [engineer, setEngineer] = useState("")

 

 const handleDelete = ()=>{
    console.log("deleted")
    closeModal()
 }
 const handleChange = (e)=>{
    setEngineer(e.target.value)
 }
const handleSave = ()=>{
    console.log(engineer)
    closeModal()
}

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gray-100">
    <div className="relative w-full h-full max-w-screen-md mx-auto my-6 bg-opacity-50 backdrop-filter backdrop-blur-md">
      <div>
        {/* Empty space for navbar here */}
      </div>
      <div>
      <section className="w-full h-full">
  <div className="lg:flex lg:justify-between lg:items-center flex-col p-5 space-y-5">
    <div className="flex lg:flex-row sm:flex-col sm:space-y-5 lg:w-[50%] w-full space-y-5 flex-col justify-center items-center lg:items-end lg:space-x-4">
      <button className="bg-blue-500 hover:bg-transparent text-white font-semibold hover:text-blue-700 py-2 px-4 border border-blue-500 hover:border-transparent rounded">
        Edit Call
      </button>
      <button onClick={handleDelete} className="bg-red-500 hover:bg-transparent text-white font-semibold hover:text-red-700 py-2 px-4 border border-red-500 hover:border-transparent rounded">
        Delete
      </button>
    </div>
    <div>
      <div className="mb-4">
        <label htmlFor="engineer_name" className="block text-gray-700 font-bold mb-2">
          Engineer Name
        </label>
        <select
          id="engineer_name"
          name="engineer_name"
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
          value={engineer}
          onChange={handleChange}
          required
        >
          <option value="" disabled>Select a Site</option>
          {engineerName.map((battery, index) => (
            <option key={index} value={battery} className="text-sm">{battery}</option>
          ))}
        </select>
      </div>
    </div>
  </div>
  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
    <button
      className="text-blue-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
      type="button"
      onClick={closeModal}
    >
      Close
    </button>
    <button
      className="ml-4 bg-blue-500 text-white font-bold px-4 py-2 rounded"
      onClick={handleSave}
    >
      Save
    </button>
  </div>
</section>

      </div>
    </div>
    </div>
  );
};
Edit_Call.propTypes = {
    closeModal: PropTypes.func
}
export default Edit_Call;
