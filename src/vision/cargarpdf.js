import React, { useState } from "react";
import "../App.css";

function ModalCargarPdf({ cerrarModal }) {
  const [pdf, setPdf] = useState(null);
  const [mensajeError, setMensajeError] = useState("");

  // Función para manejar la selección de archivo desde el explorador
  const manejarCargaPdf = (e) => {
    const archivo = e.target.files[0];
    if (archivo && archivo.type === "application/pdf") {
      setPdf(archivo);
      setMensajeError(""); // Limpiar mensaje de error si es válido
    } else {
      setMensajeError("Por favor, selecciona un archivo PDF.");
    }
  };

  // Función para manejar el arrastre de archivos
  const manejarArrastreSobreArea = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const archivo = e.dataTransfer.files[0];
    if (archivo && archivo.type === "application/pdf") {
      setPdf(archivo);
      setMensajeError(""); // Limpiar mensaje de error si es válido
    } else {
      setMensajeError("Por favor, selecciona un archivo PDF.");
    }
  };

  const manejarGuardarPdf = () => {
    // Aquí puedes agregar lógica para guardar el archivo si es necesario
    if (pdf) {
      console.log('Archivo cargado:', pdf.name); // Este es solo un ejemplo, puedes hacer lo que necesites con el archivo.
      cerrarModal();
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <div className="modal-header">
          <h2>Cargar PDF</h2>
          <button className="modal-cerrar" onClick={cerrarModal}>
            ×
          </button>
        </div>

        <div
          className="modal-body"
          onDragOver={(e) => e.preventDefault()} // Permitir el arrastre
          onDrop={manejarArrastreSobreArea} // Manejar cuando el archivo se suelta
        >
          {/* Input tradicional de archivo PDF */}
          <input
            type="file"
            accept="application/pdf"
            onChange={manejarCargaPdf}
            className="file-input"
            id="fileInput"  // Aseguramos que este ID coincida con el label
          />
          
          <label 
            htmlFor="fileInput" 
            className="drop-area" 
            style={{ cursor: "pointer" }}
          >
            <span>Arrastra un archivo PDF aquí o haz clic para seleccionar</span>
          </label>
          
          <p className="archivo-info">
            {pdf ? pdf.name : "No se eligió ningún archivo"}
          </p>
          <p className="mensaje-error">{mensajeError}</p>
        </div>

        <div className="modal-footer">
          <button className="btn-modal" onClick={cerrarModal}>
            Cerrar
          </button>
          <button className="btn-modal" onClick={manejarGuardarPdf} disabled={!pdf}>
            Cargar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalCargarPdf;