import React from "react";
import "../App.css";

function NominaEstudiante({ volverDocente }) {
  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>NÓMINA DE ESTUDIANTES</h1>
        <p>Carga y visualización del PDF</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-actions">
          <button className="btn-upload">
            Seleccionar PDF
          </button>

          <button className="btn-logout" onClick={volverDocente}>
            Volver
          </button>
        </div>

        <div className="dashboard-card">
          <h2>Subir archivo PDF</h2>
          <p>
            Aquí irá la interfaz para seleccionar, subir y visualizar la nómina
            de estudiantes en PDF.
          </p>
        </div>
      </div>
    </main>
  );
}

export default NominaEstudiante;