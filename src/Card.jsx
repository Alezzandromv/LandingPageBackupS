import React, { useState, useEffect } from 'react';

function DatosUsuario() {
  const [usuario, setUsuario] = useState(null); // Estado para guardar los datos del usuario
  const [cargar, setCargar] = useState(false); // Estado para manejar la carga

  useEffect(() => {
    if (cargar) {
      fetch('https://jsonplaceholder.typicode.com/users/1')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setUsuario(datos);
          setCargar(false); // Termina la carga
        })
        .catch(() => setCargar(false));
    }
  }, [cargar]); // Se ejecuta cuando "cargar" cambia

  return (
    <div>
      <button onClick={() => setCargar(true)}>Cargar usuario</button>
      {cargar && <p>Cargando...</p>}
      {usuario && (
        <div>
          <h1>{usuario.name}</h1>
          <p>Email: {usuario.email}</p>
        </div>
      )}
    </div>
  );
}

export default DatosUsuario;
