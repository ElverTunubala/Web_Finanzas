
import React from "react";
import { RouterProvider } from "react-router";
import { PrivateRouter } from "./router/PrivateRouter";
import {  useAuth } from "./pages/Auth/AuthContext";
import { PublicRouter } from "./router/PublicRouter";

function App() {

  const { isLoggedIn } = useAuth(); 
  return (
    <RouterProvider router={isLoggedIn ? PrivateRouter : PublicRouter} />
  );
}
export default App;
