import { useState, useEffect } from "react";

const LoginTimer = () => {
  const [clockIn, setClockIn] = useState(false);
  const [timer, setTimer] = useState({ hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    let intervalId;

    if (clockIn) {
      const startTime = new Date().getTime();

      intervalId = setInterval(() => {
        const currentTime = new Date().getTime();
        const elapsedTime = Math.floor((currentTime - startTime) / 1000);

        const hours = Math.floor(elapsedTime / 3600);
        const minutes = Math.floor((elapsedTime % 3600) / 60);
        const seconds = elapsedTime % 60;

        setTimer({ hours, minutes, seconds });
      }, 1000);
    } else {
      clearInterval(intervalId);
      const hours = 0;
      const minutes = 0;
      const seconds = 0;

      setTimer({ hours, minutes, seconds });
    }

    return () => clearInterval(intervalId);
  }, [clockIn]);

  return (
    <div className="mr-4">
      <button
        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setClockIn(!clockIn)}
      >
        {clockIn ? (
          <div className="flex flex-col">
            <h4>Web Log Out</h4>
            <span>{`${timer.hours}hr : ${timer.minutes}min : ${timer.seconds}s`}</span>
          </div>
        ) : (
          "Web Log In"
        )}
      </button>
    </div>
  );
};

export default LoginTimer;
