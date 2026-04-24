import React, { useState } from "react";
import "../App.css";
import SelectorRac from "./selectorracs";
import SelectorRauu from "./selectorrauus";
import SelectorAcd from "./selectoracd";
import SelectorApex from "./selectorapex";

function DocenteAux({ cerrarSesion }) {
  const nombreDocente = "PEPITO PEREZ";
  const [periodoAcademico, setPeriodoAcademico] = useState("2025-09-01");

  const [mostrarSelectorRac, setMostrarSelectorRac] = useState(false);
  const [indiceRacActivo, setIndiceRacActivo] = useState(null);
  const [racsGuardados, setRacsGuardados] = useState([
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC5",
    "RAC4"
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
    "RAUU2"
  ]);

  const [mostrarSelectorAcd, setMostrarSelectorAcd] = useState(false);
  const [acdsGuardados, setAcdsGuardados] = useState(["", ""]);

  const [mostrarSelectorApex, setMostrarSelectorApex] = useState(false);
  const [apexGuardados, setApexGuardados] = useState(["", ""]);

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

  return (
    <main className="dashboard-page">
      <div className="dashboard-header">
        <h1>BIENVENIDO/A:</h1>
        <p>{nombreDocente}</p>
      </div>

      <div className="dashboard-content">
        <div className="dashboard-actions">
          <button className="btn-upload">Cargar PDF</button>

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
                    <button className="btn-celda btn-celda-verde">
                      AAUT (3)
                    </button>
                  </th>
                </tr>

                <tr>
                  <th>{acdsGuardados[0] || "Tareas en Equipo"}</th>
                  <th>{acdsGuardados[1] || "Tareas Individuales"}</th>

                  <th>{apexGuardados[0] || "PI"}</th>
                  <th colSpan="2">{apexGuardados[1] || "IF"}</th>

                  <th>Lectura Comp</th>
                  <th>Examen</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>
                  <td>220027839-4</td>
                  <td>ALCIVAR NOA</td>
                  <td>JOHN EDUARDO</td>

                  <td>1.27</td>
                  <td>1.80</td>

                  <td>1.50</td>
                  <td colSpan="2">0.87</td>

                  <td>0.30</td>
                  <td>1.90</td>

                  <td>6.74</td>
                  <td>6.74</td>
                </tr>
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
    </main>
  );
}

export default DocenteAux;