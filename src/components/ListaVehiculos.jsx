import CardVehiculo from "./CardVehiculo";

function ListaVehiculos() {
  const vehiculos = [
    { id: 1, patente: "ABCD12", marca: "Toyota" },
    { id: 2, patente: "EFGH34", marca: "Hyundai" }
  ];

  return (
    <section>
      <h2>Vehículos Registrados</h2>

      {vehiculos.map((vehiculo) => (
        <CardVehiculo
          key={vehiculo.id}
          vehiculo={vehiculo}
        />
      ))}
    </section>
  );
}

export default ListaVehiculos;