import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListaVehiculos from "./components/ListaVehiculos";

function App() {
  const [vehiculos, setVehiculos] = useState(() => {
    const datosGuardados = localStorage.getItem("vehiculos");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  });

  useEffect(() => {
    localStorage.setItem("vehiculos", JSON.stringify(vehiculos));
  }, [vehiculos]);

  const agregarVehiculo = (nuevoVehiculo) => {
    if (vehiculos.length >= 10) {
      alert("No quedan cupos disponibles");
      return;
    }

    const existe = vehiculos.some(
      (vehiculo) => vehiculo.patente === nuevoVehiculo.patente
    );

    if (existe) {
      alert("La patente ya existe");
      return;
    }

    setVehiculos([...vehiculos, nuevoVehiculo]);
  };

  const cuposDisponibles = 10 - vehiculos.length;

  return (
    <>
      <header>
        <h1>Sistema de Control Vehicular</h1>
      </header>

      <main>
        <h2>Cupos disponibles: {cuposDisponibles}/10</h2>

        <Formulario agregarVehiculo={agregarVehiculo} />

        <ListaVehiculos vehiculos={vehiculos} />
      </main>

    </>
  );
}

export default App;