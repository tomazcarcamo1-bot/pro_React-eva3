function CardVehiculos({ vehiculo }) {
    return (
      <article
        className={`card ${
          vehiculo.permanente
            ? "permanente"
            : "temporal"
        }`}
      >
        <h3>{vehiculo.marca}</h3>
  
        <p>
          <strong>Patente:</strong> {vehiculo.patente}
        </p>
  
        <p>
          {vehiculo.permanente
            ? "Vehículo Permanente"
            : "Vehículo Temporal"}
        </p>
      </article>
    );
  }
  
  export default CardVehiculos;