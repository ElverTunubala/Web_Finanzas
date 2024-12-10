import React, { useState } from "react";
import { useNavigate } from "react-router";
import useRegister from "../../../hooks/useRegister";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [currency, setCurrency] = useState("usd"); 
  const navigate = useNavigate();

  const { register, isLoading, error } = useRegister();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Las contraseñas no coinciden");
      return;
    }

    if (username && email && password && currency) {
      const result = await register(username, email, password, currency); 
      if (result.success) {
        navigate("/login");
      } else {
        alert(result.message || "Error al registrar el usuario");
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center mb-4">Crear Cuenta</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Usuario
            </label>
            <input
              type="text"
              id="username"
              className="form-control"
              placeholder="Introduce tu usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

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
              placeholder="Crea una contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="confirmPassword"
              className="form-control"
              placeholder="Repite tu contraseña"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="currency" className="form-label">
              Moneda
            </label>
            <select
              id="currency"
              className="form-control"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
              required
            >
              <option value="usd">Dólar (USD)</option>
              <option value="mxn">Peso Colombiano (COP)</option>
              <option value="eur">Euro (EUR)</option>
              <option value="mxn">Peso Mexicano (MXN)</option>
              <option value="gbp">Libra Esterlina (GBP)</option>
            </select>
          </div>

          {error && <div className="alert alert-danger">{error}</div>}

          <button type="submit" className="btn btn-primary w-100 mb-3" disabled={isLoading}>
            {isLoading ? "Registrando..." : "Crear Cuenta"}
          </button>
        </form>

        <div className="text-center">
          <small>
            ¿Ya tienes cuenta?{" "}
            <a href="/login" className="text-decoration-none">
              Iniciar sesión
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
