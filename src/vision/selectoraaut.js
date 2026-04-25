import React, { useState } from "react";
import "../App.css";
import NuevaActividadAaut from "./nuevaactividadaaut";

function SelectorAaut({ cerrarModal, guardarAautSeleccionado }) {
  const [aautSeleccionados, setAautSeleccionados] = useState([]);
  const [mostrarNuevoAaut, setMostrarNuevoAaut] = useState(false);
  const [nuevoAautTexto, setNuevoAautTexto] = useState("");

  const [opcionesAaut, setOpcionesAaut] = useState([
    "Comer",
    "Dormir",
    "Bañarse",
    "Jugar",
    "Trotar",
  ]);

  const toggleAaut = (aaut) => {
    if (aautSeleccionados.includes(aaut)) {
      setAautSeleccionados(aautSeleccionados.filter((item) => item !== aaut));
      return;
    }

    if (aautSeleccionados.length < 2) {
      setAautSeleccionados([...aautSeleccionados, aaut]);
    }
  };

  const guardarYSalir = () => {
    if (aautSeleccionados.length === 0) return;
    guardarAautSeleccionado(aautSeleccionados);
  };

  const guardarNuevoAautYVolver = () => {
    const textoLimpio = nuevoAautTexto.trim();
    if (!textoLimpio) return;

    const yaExiste = opcionesAaut.some(
      (opcion) => opcion.toLowerCase() === textoLimpio.toLowerCase()
    );

    if (!yaExiste) {
      setOpcionesAaut([...opcionesAaut, textoLimpio]);
    }

    setNuevoAautTexto("");
    setMostrarNuevoAaut(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        {!mostrarNuevoAaut ? (
          <>
            <div className="modal-header-aaut">
              <h2>AAUT (3)</h2>
              <button className="modal-cerrar-aaut" onClick={cerrarModal}>
                <i class="fa-solid fa-xmark"></i>
              </button>
            </div>

            <div className="modal-body-aaut">
              <p>Seleccione los AAUT a realizar. Máximo 2 opciones.</p>

              <div className="aaut-opciones-lista">
                {opcionesAaut.map((opcion, index) => (
                  <button
                    key={index}
                    type="button"
                    className="aaut-opcion-radio"
                    onClick={() => toggleAaut(opcion)}
                  >
                    <span
                      className={`aaut-circulo ${
                        aautSeleccionados.includes(opcion)
                          ? "aaut-circulo-activo"
                          : ""
                      }`}
                    >
                      {aautSeleccionados.includes(opcion) && (
                        <span className="aaut-circulo-interno"></span>
                      )}
                    </span>

                    <span className="aaut-texto-opcion">{opcion}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="modal-footer-aaut modal-footer-doble-aaut">
              <button
                type="button"
                className="btn-aaut-agregar"
                onClick={() => setMostrarNuevoAaut(true)}
              >
                <i className="fa-solid fa-plus"></i> Añadir Nuevo AAUT
              </button>

              <button
                type="button"
                className="btn-modal-secundario-aaut"
                onClick={cerrarModal}
              >
                Volver
              </button>

              <button
                type="button"
                className="btn-modal-aaut"
                onClick={guardarYSalir}
              >
                Guardar
              </button>
            </div>
          </>
        ) : (
          <NuevaActividadAaut
            nuevoAautTexto={nuevoAautTexto}
            setNuevoAautTexto={setNuevoAautTexto}
            volverVista={() => setMostrarNuevoAaut(false)}
            guardarNuevoAautYVolver={guardarNuevoAautYVolver}
          />
        )}
      </div>
    </div>
  );
}

export default SelectorAaut;