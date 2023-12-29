import useFetchCallsByStatus from "../hooks/useFetchCallsByStatus";

const TodaysCallComponent = () => {
  const status = "TODAY";
  const { calls  } = useFetchCallsByStatus(status);
  return (
    <div>
      <div className="shadow-lg p-5 rounded-lg flex gap-5 items-center">
        <div className="bg-blue-500 w-16 h-16 flex items-center justify-center rounded-full"></div>
        <div className="analytic-info">
          <h4>{`Today's Calls`}</h4>
          <h1 className="font-bold">{calls.length > 0 ? calls.length : 0}</h1>
        </div>
      </div>
    </div>
  );
};

export default TodaysCallComponent;
