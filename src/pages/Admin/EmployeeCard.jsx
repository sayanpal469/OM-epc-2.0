
const EmployeeCard = () => {
    const handleRemove = ()=>{
   console.log("removed");     
    }
  return (
    <div className="bg-blue-200 p-4 m-4 rounded-md shadow-md hover:shadow-lg transition duration-300">
      <div className="flex justify-center items-center mb-5">
        <div className="w-[50px] h-[50px]  bg-indigo-500 rounded-full mx-auto mb-4  flex items-center justify-center">
          <span className="text-2xl font-semibold text-white">TM</span>
        </div>
      </div>
      <h2 className="text-xl font-bold mb-2">Tapas Mal</h2>
      <p>Age: 25</p>
      <p>Total Calls: 50</p>
      <p>Pending Calls: 10</p>
      <p>Completed Calls: 40</p>
      <p>Designation: Software Engineer</p>
      <button onClick={()=>handleRemove()} className="bg-red-500 text-white p-2 mt-2 hover:bg-red-600 transition duration-300">
        Remove from Organization
      </button>
    </div>
  );
};

export default EmployeeCard;
