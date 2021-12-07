import React from 'react';



export default function HomeScreen() {



  //effect es otro hook despues de renderizar el componente esta funcion
  //utiliza una funcion y un array
  //despues de renderizar el componente esta funcion se ejecuta solo una vez

  return (
    <div className="home">

      <div className="left">
        <p className="title">Explota tu pasión</p>
        <p className="subtitle"> El diseño de esta prenda ha sido creado en especial para grafiteros y skaters. (Poner un pequeño texto, describiendo algo más de la ética de la marca) </p>
      </div>
      <div className="rigth">

      </div>
    
    </div>
  );
}
