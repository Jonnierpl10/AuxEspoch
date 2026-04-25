import React from "react";
import "../App.css";

function RauuVista({ rauuSeleccionado, volverSelector, guardarYSalir }) {
  const descripcionesRauu = {
    RAUU1: "Este es el párrafo descriptivo del RAUU1.",
    RAUU2: "Este es el párrafo descriptivo del RAUU2.",
    RAUU3: "Este es el párrafo descriptivo del RAUU3.",
    RAUU4: "Este es el párrafo descriptivo del RAUU4.",
    RAUU5: "Este es el párrafo descriptivo del RAUU5."
  };

  if (!rauuSeleccionado) return null;

  return (
    <>
      <div className="modal-header">
        <h2>{rauuSeleccionado}</h2>
        <button className="modal-cerrar" onClick={volverSelector}>
          ×
        </button>
      </div>

      <div className="modal-body">
        <div className="rac-texto-box">
          <p>{descripcionesRauu[rauuSeleccionado]}</p>
        </div>
      </div>

      <div className="modal-footer modal-footer-doble">
        <button className="btn-modal-secundario" onClick={volverSelector}>
          Volver
        </button>

        <button className="btn-modal" onClick={guardarYSalir}>
          Guardar
        </button>
      </div>
    </>
  );
}

export default RauuVista;