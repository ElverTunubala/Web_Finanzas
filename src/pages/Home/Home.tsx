import React from "react";
import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate("/login");
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover", // Hace que el video cubra toda la pantalla
        }}
      >
        <source src="../../../public/fondo.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>


      <div
        className="d-flex justify-content-center align-items-center text-white"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <div>
          <h1 className="display-4 mb-4">¡Bienvenido a tu App de Finanzas!</h1>
          <p className="lead mb-4">
            Gestiona tus finanzas personales de manera fácil y rápida. ¡Haz
            crecer tu dinero hoy!
          </p>
          <button
            onClick={handleStartClick}
            className="btn btn-primary btn-lg"
          >
            Comenzar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
