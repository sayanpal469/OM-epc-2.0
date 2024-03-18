import useFetchCallsByStatus from "../hooks/useFetchCallsByStatus";
import { IoTodayOutline } from "react-icons/io5";

const TodaysCallComponent = () => {
  const status = "TODAY";
  const { calls } = useFetchCallsByStatus(status);
  return (
    <div className="relative">
      <div className="shadow-lg overviewBox p-5 bg-[#FFD8E5]">
        <div className="">
          <h4 className="text-lg">{`Today's Calls`}</h4>
          <h1 className="font-bold text-5xl mt-5">
            {calls.length > 0 ? calls.length : 0}
          </h1>
        </div>
      </div>
      <div className="rightIcon bg-white h-16 text-red-500 flex justify-center shadow-slate-200 shadow-2xl items-center text-4xl w-20 p-2 rounded-2xl absolute top-0 right-0">
        <IoTodayOutline />
      </div>
    </div>
  );
};

export default TodaysCallComponent;
