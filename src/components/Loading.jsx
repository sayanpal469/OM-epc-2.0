import "../Styles/Loading.css";

const Loading = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-blur">
      <div className="w-16 h-16 border-t-4 border-indigo-500 border-solid rounded-full animate-spin">
        {/* You can customize the spinner inside this div */}
      </div>
    </div>
  );
};

export default Loading;
