import React, { useState } from "react";
import { useNavigate } from "react-router";
import { NavLink } from "react-router"; 
import useLogin from "../../../hooks/useLogin"; 
import { useAuth } from "../AuthContext"; 

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setIsLoggedIn, setToken, setUserId } = useAuth(); 

  const { login, isLoading, error } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (email && password) {
      const result = await login(email, password);

      if (result.success) {
        
        setToken(result.token || "");
        setUserId(result.userId || "");
        setIsLoggedIn(true);
        navigate("/dashboard/home"); 
      } else {
        alert(result.message || "Error al iniciar sesión");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              placeholder="Introduce tu correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              placeholder="Introduce tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 mb-3" disabled={isLoading}>
            {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
          </button>
        </form>

        <div className="text-center">
          <small>
            ¿No tienes cuenta?{" "}
            <NavLink to="/register" className="text-decoration-none">
              Regístrate
            </NavLink>
          </small>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
