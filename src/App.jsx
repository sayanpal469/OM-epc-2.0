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
  const [adminId, setAdminId] = useState("");
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
        { path: "/reports", element: <PrivateRoute element={<Reports />} /> },
        {
          path: "/create-engineers",
          element: (
            <PrivateRoute element={<Create_Engineers adminId={adminId} />} />
          ),
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
      setRole(decoded.role);
      setAdminId(decoded?.adminId);
      console.log({ decoded });
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
