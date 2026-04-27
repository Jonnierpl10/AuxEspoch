import React, { useState } from "react";
import "../App.css";
import SelectorRac from "./selectorracs";
import SelectorRauu from "./selectorrauus";
import SelectorAcd from "./selectoracd";
import SelectorApex from "./selectorapex";
import SelectorAaut from "./selectoraaut";
import ModalCargarPdf from "./cargarpdf";

function DocenteAux({ cerrarSesion }) {
  const nombreDocente = "PEPITO PEREZ";
  const [periodoAcademico, setPeriodoAcademico] = useState("2025-09-01");

  // Estado para almacenar los datos extraídos de los PDFs
  const [datosExtraidos, setDatosExtraidos] = useState([]);

  const [mostrarSelectorRac, setMostrarSelectorRac] = useState(false);
  const [indiceRacActivo, setIndiceRacActivo] = useState(null);
  const [racsGuardados, setRacsGuardados] = useState([
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC4",
  ]);

  const [mostrarSelectorRauu, setMostrarSelectorRauu] = useState(false);
  const [indiceRauuActivo, setIndiceRauuActivo] = useState(null);
  const [rauusGuardados, setRauusGuardados] = useState([
    "RAUU3",
    "RAUU4",
    "RAUU3",
    "RAUU5",
    "RAUU3",
    "RAUU5",
    "RAUU2",
  ]);

  const [mostrarSelectorAcd, setMostrarSelectorAcd] = useState(false);
  const [acdsGuardados, setAcdsGuardados] = useState(["", ""]);

  const [mostrarSelectorApex, setMostrarSelectorApex] = useState(false);
  const [apexGuardados, setApexGuardados] = useState(["", ""]);

  const [mostrarSelectorAaut, setMostrarSelectorAaut] = useState(false);
  const [aautGuardados, setAautGuardados] = useState(["", ""]);

  const abrirSelectorRac = (indice) => {
    setIndiceRacActivo(indice);
    setMostrarSelectorRac(true);
  };

  const guardarRacSeleccionado = (rac) => {
    const nuevosRacs = [...racsGuardados];
    nuevosRacs[indiceRacActivo] = rac;
    setRacsGuardados(nuevosRacs);
    setMostrarSelectorRac(false);
    setIndiceRacActivo(null);
  };

  const abrirSelectorRauu = (indice) => {
    setIndiceRauuActivo(indice);
    setMostrarSelectorRauu(true);
  };

  const guardarRauuSeleccionado = (rauu) => {
    const nuevosRauus = [...rauusGuardados];
    nuevosRauus[indiceRauuActivo] = rauu;
    setRauusGuardados(nuevosRauus);
    setMostrarSelectorRauu(false);
    setIndiceRauuActivo(null);
  };

  const abrirSelectorAcd = () => {
    setMostrarSelectorAcd(true);
  };

  const guardarAcdSeleccionado = (acds) => {
    const seleccionados = [...acds];

    while (seleccionados.length < 2) {
      seleccionados.push("");
    }

    setAcdsGuardados(seleccionados);
    setMostrarSelectorAcd(false);
  };

  const abrirSelectorApex = () => {
    setMostrarSelectorApex(true);
  };

  const guardarApexSeleccionado = (apex) => {
    const seleccionados = [...apex];

    while (seleccionados.length < 2) {
      seleccionados.push("");
    }

    setApexGuardados(seleccionados);
    setMostrarSelectorApex(false);
  };

  const abrirSelectorAaut = () => {
    setMostrarSelectorAaut(true);
  };

  const guardarAautSeleccionado = (aaut) => {
    const seleccionados = [...aaut];

    while (seleccionados.length < 2) {
      seleccionados.push("");
    }

    setAautGuardados(seleccionados);
    setMostrarSelectorAaut(false);
  };

  const [mostrarModalPdf, setMostrarModalPdf] = useState(false);

  const abrirModalPdf = () => {
    setMostrarModalPdf(true);
  };

  const cerrarModalPdf = () => {
    setMostrarModalPdf(false);
  };

  const handleInputChange = (e, field, index) => {
    const newData = [...datosExtraidos];
    const newValue = parseFloat(e.target.value);

    if (field === 'ACD1' || field === 'ACD2') {
      const totalACD = (newData[index].ACD1 || 0) + (newData[index].ACD2 || 0);

      if (totalACD <= 3.5) {
        newData[index][field] = newValue;
      } else {

        alert('La suma de ACD1 y ACD2 no puede exceder 3.5');

        if (field === 'ACD1') {
          newData[index].ACD1 = 3.5 - newData[index].ACD2;
        } else {
          newData[index].ACD2 = 3.5 - newData[index].ACD1;
        }
      }
    } else {
      newData[index][field] = newValue;
    }
    calcularSumatoria(index);
    setDatosExtraidos(newData);
  };

  const handleInputChangeApex = (e, field, index) => {
    const newData = [...datosExtraidos];
    const newValue = parseFloat(e.target.value);


    if (field === 'APEX1' || field === 'APEX2') {
      const totalAPEX = (newData[index].APEX1 || 0) + (newData[index].APEX2 || 0);

      if (totalAPEX <= 3.5) {
        newData[index][field] = newValue;
      } else {

        alert('La suma de APEX1 y APEX2 no puede exceder 3.5');

        if (field === 'APEX1') {
          newData[index].APEX1 = 3.5 - newData[index].APEX2;
        } else {
          newData[index].APEX2 = 3.5 - newData[index].APEX1;
        }
      }
    } else {
      newData[index][field] = newValue;
    }
    calcularSumatoria(index);
    setDatosExtraidos(newData);
  };

  const handleInputChangeAAUT = (e, field, index) => {
    const newData = [...datosExtraidos];
    const newValue = parseFloat(e.target.value);

    if (field === 'AAUT1' || field === 'AAUT2') {
      const totalAAUT = (newData[index].AAUT1 || 0) + (newData[index].AAUT2 || 0);

      if (totalAAUT <= 3) {
        newData[index][field] = newValue;
      } else {

        alert('La suma de AAUT1 y AAUT2 no puede exceder 3');

        if (field === 'AAUT1') {
          newData[index].AAUT1 = 3 - newData[index].AAUT2;
        } else {
          newData[index].AAUT2 = 3 - newData[index].AAUT1;
        }
      }
    } else {
      newData[index][field] = newValue;
    }
    calcularSumatoria(index);
    setDatosExtraidos(newData);
  };

  const calcularSumatoria = (index) => {
    const newData = [...datosExtraidos];

    const total =
      (newData[index].ACD1 || 0) +
      (newData[index].ACD2 || 0) +
      (newData[index].APEX1 || 0) +
      (newData[index].APEX2 || 0) +
      (newData[index].AAUT1 || 0) +
      (newData[index].AAUT2 || 0);

    newData[index].sumatoria = total;
    newData[index].NotaFinal = total;
    setDatosExtraidos(newData);
  };

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>BIENVENIDO/A:</h1>
        <p>{nombreDocente}</p>
      </div>

      <div className="dashboard-content">
        <div className="download-btn-container">
          <button className="btn-download">Descargar Notas</button>
        </div>
        <div className="dashboard-actions">
          <button className="btn-upload" onClick={abrirModalPdf}>
            Cargar PDF
          </button>

          <button className="btn-logout" onClick={cerrarSesion}>
            Cerrar sesión
          </button>
        </div>

        <div className="dashboard-card">
          <div className="titulo-nomina">
            <h2>Escuela Superior Politécnica de Chimborazo</h2>
            <h3>Decanato de Desarrollo Académico</h3>
            <p>
              Evaluación formativa y sumativa para alcanzar los resultados de
              aprendizaje
            </p>
          </div>

          <div className="info-nomina">
            <div className="info-fila">
              <span className="info-label">Periodo académico:</span>
              <input
                type="date"
                value={periodoAcademico}
                onChange={(e) => setPeriodoAcademico(e.target.value)}
                className="campo-fecha"
              />
            </div>

            <div className="info-fila">
              <span className="info-label">Facultad:</span>
              <span className="info-value">SEDE ORELLANA</span>
            </div>

            <div className="info-fila">
              <span className="info-label">Carrera:</span>
              <span className="info-value">TECNOLOGÍAS DE LA INFORMACIÓN</span>
            </div>

            <div className="info-fila info-asignatura">
              <div className="asignatura-bloque">
                <span className="info-label">Asignatura:</span>
                <span className="info-value">Gestión de Proyectos TI</span>
              </div>

              <div className="pao-bloque">
                <span className="pao-label">PAO:</span>
                <span className="pao-value">2</span>
              </div>
            </div>
          </div>

          <div className="tabla-nomina-contenedor">
            <table className="tabla-nomina">
              <thead>
                <tr>
                  <th colSpan="4" className="th-left">
                    Resultado de aprendizaje de la carrera alcanzado
                  </th>

                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(0)}>{racsGuardados[0]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(1)}>{racsGuardados[1]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(2)}>{racsGuardados[2]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(3)}>{racsGuardados[3]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(4)}>{racsGuardados[4]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(5)}>{racsGuardados[5]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRac(6)}>{racsGuardados[6]}</button></th>

                  <th rowSpan="4" className="th-side">Sumatoria</th>
                  <th rowSpan="4" className="th-side">Nota final</th>
                </tr>

                <tr>
                  <th colSpan="4" className="th-left">
                    Resultado de aprendizaje de la asignatura alcanzado
                  </th>

                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(0)}>{rauusGuardados[0]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(1)}>{rauusGuardados[1]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(2)}>{rauusGuardados[2]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(3)}>{rauusGuardados[3]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(4)}>{rauusGuardados[4]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(5)}>{rauusGuardados[5]}</button></th>
                  <th><button className="btn-celda" onClick={() => abrirSelectorRauu(6)}>{rauusGuardados[6]}</button></th>
                </tr>

                <tr>
                  <th rowSpan="2">No.</th>
                  <th rowSpan="2">Cédula</th>
                  <th rowSpan="2">Apellidos</th>
                  <th rowSpan="2">Nombres</th>

                  <th colSpan="2" className="th-green">
                    <button className="btn-celda btn-celda-verde" onClick={abrirSelectorAcd}>
                      ACD (3.5)
                    </button>
                  </th>

                  <th colSpan="3" className="th-green">
                    <button className="btn-celda btn-celda-verde" onClick={abrirSelectorApex}>
                      APEX (3.5)
                    </button>
                  </th>

                  <th colSpan="2" className="th-green">
                    <button className="btn-celda btn-celda-verde" onClick={abrirSelectorAaut}>
                      AAUT (3)
                    </button>
                  </th>
                </tr>

                <tr>
                  <th>{acdsGuardados[0] || ""}</th>
                  <th>{acdsGuardados[1] || ""}</th>

                  <th>{apexGuardados[0] || ""}</th>
                  <th colSpan="2">{apexGuardados[1] || ""}</th>

                  <th>{aautGuardados[0] || ""}</th>
                  <th>{aautGuardados[1] || ""}</th>

                </tr>
              </thead>

              <tbody>
                {datosExtraidos.map((estudiante, index) => (
                  <tr key={index}>
                    <td>{estudiante.No}</td>
                    <td>{estudiante.Cedula}</td>
                    <td>{estudiante.Apellidos}</td>
                    <td>{estudiante.Nombres}</td>
                    <td>
                      <input
                        type="number"
                        value={estudiante.ACD1 || ""}
                        onChange={(e) => handleInputChange(e, 'ACD1', index)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={estudiante.ACD2 || ""}
                        onChange={(e) => handleInputChange(e, 'ACD2', index)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={estudiante.APEX1 || ""}
                        onChange={(e) => handleInputChangeApex(e, 'APEX1', index)}
                      />
                    </td>
                    <td colSpan="2">
                      <input
                        type="number"
                        value={estudiante.APEX2 || ""}
                        onChange={(e) => handleInputChange(e, 'APEX2', index)}
                        style={{ width: '100%' }}
                      />
                    </td>

                    <td>
                      <input
                        type="number"
                        value={estudiante.AAUT1 || ""}
                        onChange={(e) => handleInputChangeAAUT(e, 'AAUT1', index)}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        value={estudiante.AAUT2 || ""}
                        onChange={(e) => handleInputChangeAAUT(e, 'AAUT2', index)}
                      />
                    </td>
                    <td>{estudiante.sumatoria || ""}</td>
                    <td>{estudiante.NotaFinal || ""}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {mostrarSelectorRac && (
        <SelectorRac
          cerrarModal={() => {
            setMostrarSelectorRac(false);
            setIndiceRacActivo(null);
          }}
          guardarRacSeleccionado={guardarRacSeleccionado}
        />
      )}

      {mostrarSelectorRauu && (
        <SelectorRauu
          cerrarModal={() => {
            setMostrarSelectorRauu(false);
            setIndiceRauuActivo(null);
          }}
          guardarRauuSeleccionado={guardarRauuSeleccionado}
        />
      )}

      {mostrarSelectorAcd && (
        <SelectorAcd
          cerrarModal={() => setMostrarSelectorAcd(false)}
          guardarAcdSeleccionado={guardarAcdSeleccionado}
        />
      )}

      {mostrarSelectorApex && (
        <SelectorApex
          cerrarModal={() => setMostrarSelectorApex(false)}
          guardarApexSeleccionado={guardarApexSeleccionado}
        />
      )}

      {mostrarSelectorAaut && (
        <SelectorAaut
          cerrarModal={() => setMostrarSelectorAaut(false)}
          guardarAautSeleccionado={guardarAautSeleccionado}
        />
      )}

      {mostrarModalPdf && <ModalCargarPdf cerrarModal={cerrarModalPdf} setDatosExtraidos={setDatosExtraidos} />}
    </main>
  );
}

export default DocenteAux;