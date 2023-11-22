import { useState } from "react";

const LoginTimer = () => {
  const [clockIn, setClockIn] = useState(false);

  return (
    <div className="mr-4">
      <button
        className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        onClick={() => setClockIn(!clockIn)}
      >
        {clockIn ? (
          <div className="flex flex-col">
            <h4>Web Log Out</h4>
          </div>
        ) : (
          "Web Log In"
        )}
      </button>
    </div>
  );
};

export default LoginTimer;
