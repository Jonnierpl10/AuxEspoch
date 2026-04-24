import React, { useState } from "react";
import "../App.css";
import NuevaActividadApex from "./nuevaactividadapex";

function SelectorApex({ cerrarModal, guardarApexSeleccionado }) {
  const [apexSeleccionados, setApexSeleccionados] = useState([]);
  const [mostrarNuevoApex, setMostrarNuevoApex] = useState(false);
  const [nuevoApexTexto, setNuevoApexTexto] = useState("");

  const [opcionesApex, setOpcionesApex] = useState([
    "Comer",
    "Dormir",
    "Bañarse",
    "Jugar",
    "Trotar",
  ]);

  const toggleApex = (apex) => {
    if (apexSeleccionados.includes(apex)) {
      setApexSeleccionados(apexSeleccionados.filter((item) => item !== apex));
      return;
    }

    if (apexSeleccionados.length < 2) {
      setApexSeleccionados([...apexSeleccionados, apex]);
    }
  };

  const guardarYSalir = () => {
    if (apexSeleccionados.length === 0) return;
    guardarApexSeleccionado(apexSeleccionados);
  };

  const guardarNuevoApexYVolver = () => {
    const textoLimpio = nuevoApexTexto.trim();
    if (!textoLimpio) return;

    const yaExiste = opcionesApex.some(
      (opcion) => opcion.toLowerCase() === textoLimpio.toLowerCase()
    );

    if (!yaExiste) {
      setOpcionesApex([...opcionesApex, textoLimpio]);
    }

    setNuevoApexTexto("");
    setMostrarNuevoApex(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        {!mostrarNuevoApex ? (
          <>
            <div className="modal-header-acd">
              <h2>APEX (3.5)</h2>
              <button className="modal-cerrar-acd" onClick={cerrarModal}>
                ×
              </button>
            </div>

            <div className="modal-body-acd">
              <p>Seleccione los APEX a realizar. Máximo 2 opciones.</p>

              <div className="acd-opciones-lista">
                {opcionesApex.map((opcion, index) => (
                  <button
                    key={index}
                    type="button"
                    className="acd-opcion-radio"
                    onClick={() => toggleApex(opcion)}
                  >
                    <span
                      className={`acd-circulo ${
                        apexSeleccionados.includes(opcion)
                          ? "acd-circulo-activo"
                          : ""
                      }`}
                    >
                      {apexSeleccionados.includes(opcion) && (
                        <span className="acd-circulo-interno"></span>
                      )}
                    </span>

                    <span className="acd-texto-opcion">{opcion}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-footer-acd modal-footer-doble-acd">
              <button
                type="button"
                className="btn-acd-agregar"
                onClick={() => setMostrarNuevoApex(true)}
              >
                <i className="fa-solid fa-plus"></i>
                Añadir Nuevo APEX
              </button>

              <button
                type="button"
                className="btn-modal-secundario-acd"
                onClick={cerrarModal}
              >
                Volver
              </button>

              <button
                type="button"
                className="btn-modal-acd"
                onClick={guardarYSalir}
              >
                Guardar
              </button>
            </div>
          </>
        ) : (
          <NuevaActividadApex
            nuevoApexTexto={nuevoApexTexto}
            setNuevoApexTexto={setNuevoApexTexto}
            volverVista={() => setMostrarNuevoApex(false)}
            guardarNuevoApexYVolver={guardarNuevoApexYVolver}
          />
        )}
      </div>
    </div>
  );
}

export default SelectorApex;