import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../../pages/Auth/AuthContext"; 

const PrivateRoute = () => {
  const { isLoggedIn } = useAuth(); 

  if (!isLoggedIn) {
    return <Navigate to="/login" />; 
  }
  
  return <Outlet />;
};

export default PrivateRoute;
