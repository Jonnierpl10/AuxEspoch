import React from "react";
import "../App.css";

function NuevaActividadApex({
  nuevoApexTexto,
  setNuevoApexTexto,
  volverVista,
  guardarNuevoApexYVolver,
}) {
  return (
    <>
      <div className="modal-header-acd">
        <h2>Nuevo APEX</h2>
        <button className="modal-cerrar-acd" onClick={volverVista}>
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="modal-body-acd">
        <textarea
          className="acd-textarea-grande"
          placeholder="Ingrese el nuevo APEX..."
          rows="5"
          value={nuevoApexTexto}
          onChange={(e) => setNuevoApexTexto(e.target.value)}
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
          onClick={guardarNuevoApexYVolver}
        >
          Guardar
        </button>
      </div>
    </>
  );
}

export default NuevaActividadApex;