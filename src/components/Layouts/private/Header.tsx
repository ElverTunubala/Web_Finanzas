import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router"; 
import { useAuth } from "../../../pages/Auth/AuthContext";  

const Header = () => {
  const navigate = useNavigate();
  const { setIsLoggedIn, setToken, setUserId } = useAuth();  

 
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");

    setIsLoggedIn(false);
    setToken(null);
    setUserId(null);

    navigate("/");
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Mi Finanzas</Navbar.Brand>
      <Nav className="ml-auto">
        <Button variant="outline-danger" onClick={handleLogout}>
          Logout
        </Button>
      </Nav>
    </Navbar>
  );
};

export default Header;
