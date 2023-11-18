import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Calls from "./pages/Calls";
import Home from "./pages/Home";
import Login from "./pages/Login";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const graphqlEndpoint = "http://localhost:4000"; // Replace with your GraphQL server endpoint

const apolloClient = new ApolloClient({
  uri: graphqlEndpoint,
  cache: new InMemoryCache(),
});
function App() {
  const router = createBrowserRouter([
    // routes here...
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/calls",
      element: <Calls />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return (
    <ApolloProvider client={apolloClient}>
      <RouterProvider router={router} />
    </ApolloProvider>
  );
}

export default App;
