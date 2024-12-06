import { useState } from "react";
import { RouterProvider } from "react-router";
import { PublicRouter } from "./router/PublicRouter";
import { PrivateRouter } from "./router/PrivateRouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <RouterProvider router={isLoggedIn ? PrivateRouter : PublicRouter} />
  );
}

export default App;
