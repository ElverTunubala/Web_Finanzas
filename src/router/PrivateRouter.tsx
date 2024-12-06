import { createBrowserRouter } from "react-router";
import PrivateRoute from "../components/Layouts/Public/PrivateLayout";
import HomePage from "../pages/Home/HomePage";

export const PrivateRouter = createBrowserRouter([
  {
    path: "/dashboard",
    element: <PrivateRoute />,
    children: [
      {
        path: "home",
        element: <HomePage />,
      },
    ],
  },
]);
