import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    // routes here...
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
