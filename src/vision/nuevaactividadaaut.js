import React from "react";
import "../App.css";

function NuevaActividadAaut({
  nuevoAautTexto,
  setNuevoAautTexto,
  volverVista,
  guardarNuevoAautYVolver,
}) {
  return (
    <>
      <div className="modal-header-aaut">
        <h2>Nuevo AAUT</h2>
        <button className="modal-cerrar-aaut" onClick={volverVista}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="modal-body-aaut">
        <textarea
          className="aaut-textarea-grande"
          placeholder="Ingrese el nuevo AAUT..."
          rows="5"
          value={nuevoAautTexto}
          onChange={(e) => setNuevoAautTexto(e.target.value)}
        ></textarea>
      </div>

      <div className="modal-footer-aaut modal-footer-doble-aaut">
        <button
          type="button"
          className="btn-modal-secundario-aaut"
          onClick={volverVista}
        >
          Volver
        </button>

        <button
          type="button"
          className="btn-modal-aaut"
          onClick={guardarNuevoAautYVolver}
        >
          Guardar
        </button>
      </div>
    </>
  );
}

export default NuevaActividadAaut;