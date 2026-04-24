import React from "react";
import "../App.css";

function NuevaActividadAcd({
  nuevoAcdTexto,
  setNuevoAcdTexto,
  volverVista,
  guardarNuevoAcdYVolver,
}) {
  return (
    <>
      <div className="modal-header-acd">
        <h2>Nuevo ACD</h2>
        <button className="modal-cerrar-acd" onClick={volverVista}>
          ×
        </button>
      </div>

      <div className="modal-body-acd">
        <textarea
          className="acd-textarea-grande"
          placeholder="Ingrese el nuevo ACD..."
          rows="5"
          value={nuevoAcdTexto}
          onChange={(e) => setNuevoAcdTexto(e.target.value)}
        ></textarea>
      </div>

      <div className="modal-footer-acd modal-footer-doble-acd">
        <button
          type="button"
          className="btn-modal-secundario-acd"
          onClick={volverVista}
        >
          Volver
        </button>

        <button
          type="button"
          className="btn-modal-acd"
          onClick={guardarNuevoAcdYVolver}
        >
          Guardar
        </button>
      </div>
    </>
  );
}

export default NuevaActividadAcd;