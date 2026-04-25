import React, { useState } from "react";
import "../App.css";
import RauuVista from "./textosrauus";

function SelectorRauu({ cerrarModal, guardarRauuSeleccionado }) {
  const [rauuSeleccionado, setRauuSeleccionado] = useState("");

  const guardarYSalir = () => {
    if (!rauuSeleccionado) return;
    guardarRauuSeleccionado(rauuSeleccionado);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        {!rauuSeleccionado ? (
          <>
            <div className="modal-header">
              <h2>RAUU</h2>
              <button className="modal-cerrar" onClick={cerrarModal}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-body">
              <p>Seleccione el RAUU.</p>

              <div className="rac-botones">
                <button
                  className="btn-rac-opcion"
                  onClick={() => setRauuSeleccionado("RAUU1")}
                >
                  RAUU1
                </button>
                <button
                  className="btn-rac-opcion"
                  onClick={() => setRauuSeleccionado("RAUU2")}
                >
                  RAUU2
                </button>
                <button
                  className="btn-rac-opcion"
                  onClick={() => setRauuSeleccionado("RAUU3")}
                >
                  RAUU3
                </button>
                <button
                  className="btn-rac-opcion"
                  onClick={() => setRauuSeleccionado("RAUU4")}
                >
                  RAUU4
                </button>
                <button
                  className="btn-rac-opcion"
                  onClick={() => setRauuSeleccionado("RAUU5")}
                >
                  RAUU5
                </button>
              </div>

              {/*<div className="rac-agregar-box">
                <button className="btn-rac-agregar">
                  <i
                    className="fa-solid fa-plus"
                    style={{ marginRight: "8px" }}
                  ></i>
                  Añadir Nuevo RAUU
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
          <RauuVista
            rauuSeleccionado={rauuSeleccionado}
            volverSelector={() => setRauuSeleccionado("")}
            guardarYSalir={guardarYSalir}
          />
        )}
      </div>
    </div>
  );
}

export default SelectorRauu;