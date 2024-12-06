import React, { useState } from "react";
import { Navigate, Outlet } from "react-router";

const PrivateRoute = () => {
  const isLoggedIn = useState(false); 

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;  
};

export default PrivateRoute;
