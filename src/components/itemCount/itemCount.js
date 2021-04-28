import React, { useState, useEffect } from "react"; //importo useeffect también

export const ItemCount = () => {
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
  });

  // fijate cómo se puede controlar el valor de count usando el evento onClick
  // básicamente, estás diciendo que a cada click se ejectute la función setCount
  // pero además le estás diciendo que sume 1 en el botón +.
  //completa el botón menos
  return (
    <div>
      <hr />
      <h4>Item Count</h4>
      <button min={0} onClick={() => setContador(contador + 1)}>
        +
      </button>
      {contador}
      <button onClick={() => setContador(contador - 1)}>-</button>
    </div>
  );
}
// export default ItemCount;