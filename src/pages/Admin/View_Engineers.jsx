import EmployeeCard from "./EmployeeCard";

const View_Engineers = () => {
  return (
    <div className="flex">
      <div className="w-12 h-screen lg:w-20">
        {/* Empty space for navbar here */}
      </div>
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-wrap lg:justify-start justify-center">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
      </div>
    </div>
  );
};

export default View_Engineers;
