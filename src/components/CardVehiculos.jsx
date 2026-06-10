function CardVehiculo({ vehiculo }) {
    return (
      <article>
        <h3>{vehiculo.marca}</h3>
        <p>Patente: {vehiculo.patente}</p>
      </article>
    );
  }
  
  export default CardVehiculo;