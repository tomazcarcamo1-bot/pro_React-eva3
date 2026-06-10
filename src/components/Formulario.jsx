function Formulario() {
    return (
      <section>
        <h2>Registrar Vehículo</h2>
  
        <form>
          <input
            type="text"
            placeholder="Patente"
          />
  
          <input
            type="text"
            placeholder="Marca"
          />
  
          <button type="submit">
            Agregar
          </button>
        </form>
      </section>
    );
  }
  
  export default Formulario;