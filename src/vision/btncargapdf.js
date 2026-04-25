import React, { useState } from "react";
import { pdfjs } from "pdfjs-dist";
import "../App.css";

function BtnCargarPdf({ cerrarModal }) {
  const [pdfFile, setPdfFile] = useState(null);
  const [pdfData, setPdfData] = useState(null);

  const manejarCargaPdf = (e) => {
    const file = e.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      leerPdf(file);
    }
  };

  const leerPdf = (file) => {
    const reader = new FileReader();
    reader.onload = async () => {
      const typedarray = new Uint8Array(reader.result);
      const pdf = await pdfjs.getDocument(typedarray).promise;
      const numPages = pdf.numPages;
      let data = "";
      
      // Extraer texto de todas las páginas
      for (let i = 1; i <= numPages; i++) {
        const page = await pdf.getPage(i);
        const textContent = await page.getTextContent();
        textContent.items.forEach((item) => {
          data += item.str + " "; // Concatenar todo el texto extraído
        });
      }

      // Aquí puedes extraer los datos específicos del texto.
      // Como ejemplo, vamos a extraer los primeros resultados como 'No.', 'Cédula', 'Apellidos', etc.
      const datosExtraidos = {
        no: data.match(/No\.\s*(\d+)/)?.[1],
        cedula: data.match(/Cédula:\s*(\d+)/)?.[1],
        apellidos: data.match(/Apellidos:\s*([A-Za-z\s]+)/)?.[1],
        nombres: data.match(/Nombres:\s*([A-Za-z\s]+)/)?.[1],
      };
      
      setPdfData(datosExtraidos);
    };
    reader.readAsArrayBuffer(file);
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

        <div className="modal-body">
          <input type="file" onChange={manejarCargaPdf} accept="application/pdf" />
          <div>
            {pdfData ? (
              <div>
                <p>No.: {pdfData.no}</p>
                <p>Cédula: {pdfData.cedula}</p>
                <p>Apellidos: {pdfData.apellidos}</p>
                <p>Nombres: {pdfData.nombres}</p>
              </div>
            ) : (
              <p>No se ha cargado ningún archivo PDF.</p>
            )}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn-modal" onClick={cerrarModal}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
}

export default BtnCargarPdf;