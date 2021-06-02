import React, { useState, useEffect } from "react"; //importo useeffect también

export const ItemCount = (props) => {
  const [contador, setContador] = useState(0);

  //Esto es lo que va a pasar cada vez que cambie el valor de contador
  useEffect(() => {
    if (contador < 0) {
      setContador(0);
    } else {
      if (contador === 11) {
        setContador(10);
      }
    }
    props.func(contador);
  }, [contador]);

  return (
    <div>
      <hr />
      <h4>{props.name}</h4>
      <h4>Precio: {props.price}</h4>
      <button min={0} onClick={() => setContador(contador + 1)}>
        +
      </button>
      {contador}
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}
// export default ItemCount;