import React, { useState } from "react";
import "../App.css";
import DocenteAux from "./docenteaux";

function LoginAux() {
  const [vista, setVista] = useState("roles");
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");
  const [mensaje, setMensaje] = useState("");

  const abrirLogin = () => {
    setVista("login");
    setCorreo("");
    setClave("");
    setMensaje("");
  };

  const volverRoles = () => {
    setVista("roles");
    setCorreo("");
    setClave("");
    setMensaje("");
  };

  const limpiarFormulario = () => {
    setCorreo("");
    setClave("");
    setMensaje("");
  };

  const cerrarSesion = () => {
    setVista("roles");
    setCorreo("");
    setClave("");
    setMensaje("");
  };

  const manejarLogin = (e) => {
    e.preventDefault();

    const correoValido = "pepito.perez@espoch.edu.ec";
    const claveValida = "pepe1234";

    if (correo === correoValido && clave === claveValida) {
      setMensaje("");
      setVista("docente");
    } else {
      setMensaje("Correo o contraseña incorrectos");
    }
  };

  if (vista === "docente") {
    return <DocenteAux cerrarSesion={cerrarSesion} />;
  }

  if (vista === "roles") {
    return (
      <main className="login-page">
        <section className="login-box">
          <div className="top-panel">
            <div className="file-icon">
              <i className="fa-solid fa-book" style={{ color: "#fff" }}></i>
            </div>
            <h1 className="system-title">AUX - ESPOCH SEDE ORELLANA</h1>
          </div>

          <div className="bottom-panel">
            <button className="role-card" onClick={abrirLogin}>
              <div className="role-icon blue-icon">
                <i className="fa-solid fa-graduation-cap"></i>
              </div>
              <span className="role-title">DOCENTE</span>
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="login-page">
      <section className="login-box">
        <div className="top-panel">
          <div className="file-icon">
            <i className="fa-solid fa-book" style={{ color: "#fff" }}></i>
          </div>
          <h1 className="system-title">AUX - ESPOCH SEDE ORELLANA</h1>
        </div>

        <div className="bottom-panel login-view">
          <h2 className="login-role-title">DOCENTE</h2>

          <form className="form-login" onSubmit={manejarLogin}>
            <input
              type="email"
              placeholder="Correo institucional"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Contraseña"
              value={clave}
              onChange={(e) => setClave(e.target.value)}
              required
            />

            <button type="submit" className="btn-login">
              Ingresar
            </button>

            <button type="button" className="btn-back" onClick={volverRoles}>
              Volver
            </button>

            <button type="button" className="btn-back" onClick={limpiarFormulario}>
              Limpiar
            </button>
          </form>

          {mensaje && <p className="mensaje-login">{mensaje}</p>}
        </div>
      </section>
    </main>
  );
}

export default LoginAux;