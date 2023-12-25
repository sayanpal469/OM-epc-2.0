import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Calls from "./pages/Calls";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Expenses from "./pages/Expenses";
import Nav from "./features/navbar/Nav";
import "./Styles/DashBoard.css";
import PrivateRoute from "./features/navbar/PrivateRoute";
import Reports from "./pages/Reports";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import Create_Engineers from "./pages/Admin/Create_Engineers";
import View_Engineers from "./pages/Admin/View_Engineers";

const graphqlEndpoint = "http://localhost:4000"; // Replace with your GraphQL server endpoint

const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});

function App() {
  const [role, setRole] = useState("");
  const [admin_id, set_Admin_id] = useState("");
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Nav role={role} />,
      children: [
        {
          index: true,
          element: <PrivateRoute element={<Home role={role} />} />,
        },

        {
          path: "/calls",
          element: <PrivateRoute element={<Calls role={role} />} />,
        },
        {
          path: "/expense",
          element: <PrivateRoute element={<Expenses role={role} />} />,
        },
        { path: "/reports", element: <PrivateRoute element={<Reports role={role} />} /> },
        {
          path: "/create-engineers",
          element: <PrivateRoute element={<Create_Engineers admin_id={admin_id} />} />,
        },
        {
          path: "/view-engineers",
          element: <PrivateRoute element={<View_Engineers />} />,
        },
        // Conditional route based on role
      ],
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decoded = jwtDecode(localStorage.getItem("token"));
      console.log({ decoded });
      set_Admin_id(decoded.admin);
      setRole(decoded.role);
    }
  }, []);

  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </ApolloProvider>
  );
}

export default App;
