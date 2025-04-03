import React from "react";
import { useState } from "react";

// useState = Hooks

const UserStateComponent = () => {
  // Variavel de consulta, é uma de alteração, inicio do hook
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
    console.log(count);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Você clicou {count} vezes</p>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
};

export default UserStateComponent;
