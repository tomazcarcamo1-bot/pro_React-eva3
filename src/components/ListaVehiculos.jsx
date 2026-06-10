import CardVehiculos from "./CardVehiculos";

function ListaVehiculos({ vehiculos }) {
  return (
    <section>
      <h2>Vehículos Registrados</h2>

      <div className="contenedor-cards">
        {vehiculos.map((vehiculo) => (
          <CardVehiculos
            key={vehiculo.patente}
            vehiculo={vehiculo}
          />
        ))}
      </div>
    </section>
  );
}

export default ListaVehiculos;