import React, { useState } from "react";
import "../App.css";
import RacVista from "./textosracs";

function SelectorRac({ cerrarModal, guardarRacSeleccionado }) {
  const [racSeleccionado, setRacSeleccionado] = useState("");

  const guardarYSalir = () => {
    if (!racSeleccionado) return;
    guardarRacSeleccionado(racSeleccionado);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        {!racSeleccionado ? (
          <>
            <div className="modal-header">
              <h2>RAC</h2>
              <button className="modal-cerrar" onClick={cerrarModal}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-body">
              <p>Seleccione el RAC.</p>

              <div className="rac-botones">
                <button className="btn-rac-opcion" onClick={() => setRacSeleccionado("RAC1")}>
                  RAC1
                </button>
                <button className="btn-rac-opcion" onClick={() => setRacSeleccionado("RAC2")}>
                  RAC2
                </button>
                <button className="btn-rac-opcion" onClick={() => setRacSeleccionado("RAC3")}>
                  RAC3
                </button>
                <button className="btn-rac-opcion" onClick={() => setRacSeleccionado("RAC4")}>
                  RAC4
                </button>
                <button className="btn-rac-opcion" onClick={() => setRacSeleccionado("RAC5")}>
                  RAC5
                </button>
              </div>

              {/*<div className="rac-agregar-box">
                <button className="btn-rac-agregar">
                  <i className="fa-solid fa-plus" style={{ marginRight: "8px" }}></i>
                  Añadir Nuevo RAC
                </button>
              </div>*/}
            </div>

            <div className="modal-footer">
              <button className="btn-modal" onClick={cerrarModal}>
                Cerrar
              </button>
            </div>
          </>
        ) : (
          <RacVista
            racSeleccionado={racSeleccionado}
            volverSelector={() => setRacSeleccionado("")}
            guardarYSalir={guardarYSalir}
          />
        )}
      </div>
    </div>
  );
}

export default SelectorRac;