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
import ReportModalPdf from "./components/ReportPdf/ReportModalPdf";
import Nav2 from "./features/navbar/Nav2";
// import Qr_code from "./pages/Admin/Qr_code";


const graphqlEndpoint = "http://localhost:4000"; // Replace with your GraphQL server endpoint

const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});

function App() {
  const [role, setRole] = useState("");
  const [adminId, setAdminId] = useState("");
  const [engId, setEngId] = useState("");
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Nav role={role} engId={engId} />,
      children: [
        {
          index: true,
          element: (
            <PrivateRoute element={<Home role={role} engId={engId} />} />
          ),
        },

        {
          path: "/calls",
          element: (
            <PrivateRoute element={<Calls role={role} engId={engId} />} />
          ),
        },
        {
          path: "/expense",
          element: (
            <PrivateRoute element={<Expenses engId={engId} role={role} />} />
          ),
        },
        {
          path: "/reports",
          element: <PrivateRoute element={<Reports role={role} engId={engId} />} />,
        },
        {
          path: "/create-engineers",
          element: (
            <PrivateRoute element={<Create_Engineers adminId={adminId} />} />
          ),
        },
        // {
        //   path: "/qr-code",
        //   element: (
        //     <PrivateRoute element={<Qr_code adminId={adminId} />} />
        //   ),
        // },
        {
          path: "/view-engineers",
          element: <PrivateRoute element={<View_Engineers />} />,
        },
        {
          path: "/view-engineers-report",
          element: <PrivateRoute element={<ReportModalPdf />} />,
        },

        // Conditional route based on role
      ],
    },
  ]);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      const decoded = jwtDecode(localStorage.getItem("token"));
      setRole(decoded.role);
      setAdminId(decoded.admin);
      setEngId(decoded.engineer ? decoded.engineer : "");
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
