import React from "react";
import "../App.css";

function RacVista({ racSeleccionado, volverSelector, guardarYSalir }) {
  const descripcionesRac = {
    RAC1: "Comunica efectivamente en español e inglés en diversos contextos profesionales.",
    RAC2: "Aplica métodos y técnicas eficientes en el gobierno, auditoría y gestión de proyectos de Tecnologías de la Información (TI) para la administración de tecnologías informáticas fiables que protejan la información de los usuarios o corporaciones.",
    RAC3: "Implementa soluciones basadas en tecnologías web y móvil para el cumplimiento de los requerimientos y estándares corporativos.",
    RAC4: "Aplica las competencias adquiridas con liderazgo en actividades inherentes a la profesión para la construcción de soluciones innovadoras con sostenibilidad ambiental basados en TIC y TIP.",
    RAC5: "Desarrolla diferentes tecnologías de redes para la optimización de la administración y gestión de grandes volúmenes de datos en sistemas distribuidos."
  };

  if (!racSeleccionado) return null;

  return (
    <>
      <div className="modal-header">
        <h2>{racSeleccionado}</h2>
        <button className="modal-cerrar" onClick={volverSelector}>
          ×
        </button>
      </div>

      <div className="modal-body">
        <div className="rac-texto-box">
          <p>{descripcionesRac[racSeleccionado]}</p>
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

export default RacVista;