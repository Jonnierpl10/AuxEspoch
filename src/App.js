import React from "react";
import LoginAux from "./vision/loginaux";
import RacVista from "./vision/textosracs";

function App() {
  const params = new URLSearchParams(window.location.search);
  const vista = params.get("vista");
  const tipo = params.get("tipo");

  if (vista === "rac" && tipo) {
    return <RacVista racSeleccionado={tipo} />;
  }

  return (
    <div className="App">
      <LoginAux />
    </div>
  );
}

export default App;