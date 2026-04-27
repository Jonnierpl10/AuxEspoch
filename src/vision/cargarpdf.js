import React, { useState } from "react";
import "../App.css";

function ModalCargarPdf({ cerrarModal, setDatosExtraidos }) {
  const [pdf, setPdf] = useState(null);
  const [mensajeError, setMensajeError] = useState("");
  const manejarCargaPdf = (e) => {
    const archivo = e.target.files[0];
    if (archivo && archivo.type === "application/pdf") {
      setPdf(archivo);
      setMensajeError("")
    } else {
      setMensajeError("Por favor, selecciona un archivo PDF.");
    }
  };

  const manejarArrastreSobreArea = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const archivo = e.dataTransfer.files[0];
    if (archivo && archivo.type === "application/pdf") {
      setPdf(archivo);
      setMensajeError("");
    } else {
      setMensajeError("Por favor, selecciona un archivo PDF.");
    }
  };

  const manejarGuardarPdf = () => {
    if (pdf) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const pdfData = e.target.result;
        const loadingTask = window.pdfjsLib.getDocument(pdfData);
        loadingTask.promise.then(function (pdf) {
          pdf.getPage(1).then(function (page) {
            page.getTextContent().then(function (textContent) {
              const texto = textContent.items.map(item => item.str).join(' ');
              const datos = extraerDatos(texto);
              setDatosExtraidos(datos);
            });
          });
        });
      };
      reader.readAsArrayBuffer(pdf);
    }
  };

  const extraerDatos = (texto) => {
    const estudiantes = [];
    // Regex para identificar los datos
    const regex = /(\d+)\s+([\wáéíóú]+(?: [\wáéíóú]+)+)\s+([\wáéíóú]+(?: [\wáéíóú]+)+)\s+(\d{10})/g;
    let match;

    // Buscar todas las coincidencias que correspondan a un estudiante
    while ((match = regex.exec(texto)) !== null) {
      estudiantes.push({
        No: match[1], // Número
        Nombres: match[2], // Nombres
        Apellidos: match[3], // Apellidos
        Cedula: match[4], // Cédula
      });
    }
    return estudiantes;
  };

  return (
    <div className="modal-overlay">
      <div className="modal-contenido">
        <div className="modal-header">
          <h2>Cargar PDF</h2>
          <button className="modal-cerrar" onClick={cerrarModal}>
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div
          className="modal-body"
          onDragOver={(e) => e.preventDefault()}
          onDrop={manejarArrastreSobreArea}
        >
          <input
            type="file"
            accept="application/pdf"
            onChange={manejarCargaPdf}
            className="file-input"
            id="fileInput"
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