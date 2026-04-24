import React, { useState } from "react";
import "../App.css";
import NuevaActividadAcd from "./nuevaactividadacd";

function SelectorAcd({ cerrarModal, guardarAcdSeleccionado }) {
  const [acdsSeleccionados, setAcdsSeleccionados] = useState([]);
  const [mostrarNuevoAcd, setMostrarNuevoAcd] = useState(false);
  const [nuevoAcdTexto, setNuevoAcdTexto] = useState("");

  const [opcionesAcd, setOpcionesAcd] = useState([
    "Comer",
    "Dormir",
    "Bañarse",
    "Jugar",
    "Trotar",
  ]);

  const toggleAcd = (acd) => {
    if (acdsSeleccionados.includes(acd)) {
      setAcdsSeleccionados(acdsSeleccionados.filter((item) => item !== acd));
      return;
    }

    if (acdsSeleccionados.length < 2) {
      setAcdsSeleccionados([...acdsSeleccionados, acd]);
    }
  };

  const guardarYSalir = () => {
    if (acdsSeleccionados.length === 0) return;
    guardarAcdSeleccionado(acdsSeleccionados);
  };

  const guardarNuevoAcdYVolver = () => {
    const textoLimpio = nuevoAcdTexto.trim();
    if (!textoLimpio) return;

    const yaExiste = opcionesAcd.some(
      (opcion) => opcion.toLowerCase() === textoLimpio.toLowerCase()
    );

    if (!yaExiste) {
      setOpcionesAcd([...opcionesAcd, textoLimpio]);
    }

    setNuevoAcdTexto("");
    setMostrarNuevoAcd(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        {!mostrarNuevoAcd ? (
          <>
            <div className="modal-header-acd">
              <h2>ACD (3.5)</h2>
              <button className="modal-cerrar-acd" onClick={cerrarModal}>
                ×
              </button>
            </div>

            <div className="modal-body-acd">
              <p>Seleccione los ACD a realizar. Máximo 2 opciones.</p>

              <div className="acd-opciones-lista">
                {opcionesAcd.map((opcion, index) => (
                  <button
                    key={index}
                    type="button"
                    className="acd-opcion-radio"
                    onClick={() => toggleAcd(opcion)}
                  >
                    <span
                      className={`acd-circulo ${
                        acdsSeleccionados.includes(opcion)
                          ? "acd-circulo-activo"
                          : ""
                      }`}
                    >
                      {acdsSeleccionados.includes(opcion) && (
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
                onClick={() => setMostrarNuevoAcd(true)}
              >
                <i className="fa-solid fa-plus"></i>
                Añadir Nuevo ACD
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
          <NuevaActividadAcd
            nuevoAcdTexto={nuevoAcdTexto}
            setNuevoAcdTexto={setNuevoAcdTexto}
            volverVista={() => setMostrarNuevoAcd(false)}
            guardarNuevoAcdYVolver={guardarNuevoAcdYVolver}
          />
        )}
      </div>
    </div>
  );
}

export default SelectorAcd;