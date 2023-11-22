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

const graphqlEndpoint = "http://localhost:4000"; // Replace with your GraphQL server endpoint

const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});

function App() {
  const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    {
      path: "/",
      element: <Nav />,
      children: [
        { index: true, element: <PrivateRoute element={<Home />} /> },
        { path: "/calls", element: <PrivateRoute element={<Calls />} /> },
        { path: "/expense", element: <PrivateRoute element={<Expenses />} /> },
        { path: "/reports", element: <PrivateRoute element={<Reports />} /> },
      ],
    },
  ]);

  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router}>
        <Outlet />
      </RouterProvider>
    </ApolloProvider>
  );
}

export default App;
