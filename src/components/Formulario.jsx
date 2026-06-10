import { useState } from "react";

function Formulario({ agregarVehiculo }) {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const [patente, setPatente] = useState("");
  const [marca, setMarca] = useState("");
  const [permanente, setPermanente] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!patente.trim() || !marca.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    const regexPatente = /^[A-Z]{4}[0-9]{2}$/;

    if (!regexPatente.test(patente.toUpperCase())) {
      alert("Formato válido: ABCD12");
      return;
    }

    agregarVehiculo({
      patente: patente.toUpperCase(),
      marca,
      permanente,
    });

    setPatente("");
    setMarca("");
    setPermanente(false);

    setMostrarFormulario(false);
  };

  return (
    <section>
      {!mostrarFormulario ? (
        <button onClick={() => setMostrarFormulario(true)}>
          Agregar Vehículo
        </button>
      ) : (
        <>
          <h2>Registrar Vehículo</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Patente"
              value={patente}
              onChange={(e) => setPatente(e.target.value)}
            />

            <input
              type="text"
              placeholder="Marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
            />

            <label>
              Permanente
              <input
                type="checkbox"
                checked={permanente}
                onChange={() => setPermanente(!permanente)}
              />
            </label>

            <button type="submit">
              Guardar
            </button>

            <button
              type="button"
              onClick={() => setMostrarFormulario(false)}
            >
              Cancelar
            </button>
          </form>
        </>
      )}
    </section>
  );
}

export default Formulario;