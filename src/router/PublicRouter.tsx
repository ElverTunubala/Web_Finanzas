import { createBrowserRouter } from "react-router";
import LoginPage from "../pages/Auth/Login/LoginPage";
import RegisterPage from "../pages/Auth/Register/RegisterPage";
import Home from "../pages/Home/Home";

export const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,  
  },
  {
    path: "/login",
    element: <LoginPage/>,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "*", 
    element: <div>404 - Página no encontrada</div>,
  },

]);
