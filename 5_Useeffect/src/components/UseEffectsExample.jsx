import { useState, useEffect } from "react";

const UseEffectsExample = () => {
  // sem dependências
  useEffect(() => {
    console.log("RODOU UE1");
  });

  // Com dependências vazias / array dep. vazio
  useEffect(() => {
    console.log("ROUDOU UE2");
  }, []);

  // Usestate ativa a re-renderização
  const [count, setcount] = useState(0);

  // Com dependências
  useEffect(() => {
    console.log("RODOU UE3");
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setcount((prevCount) => prevCount + 1)}>
        Aumentar Contagem
      </button>
    </div>
  );
};

export default UseEffectsExample;
