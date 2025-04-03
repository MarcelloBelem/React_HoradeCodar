import React from "react";
import { use } from "react";

const JsxExamples = () => {
  const user = {
    name: "Ana",
    idade: 12,
    Nacionalidade: "Brasil",
    Vivo: true,
  };

  const userIsLoggedIn = false;

  const users = [
    { id: 1, name: "João" },
    { id: 2, name: "Pedro" },
    { id: 3, name: "Maria" },
  ];

  return (
    <div>
      <p>{user.name}</p>
      <p>{user.idade}</p>
      <p>{user.Nacionalidade}</p>
      <p>{user.Vivo ? "Sim" : "Não"}</p>

      <button onClick={() => alert("Teste")}>Clique em mim</button>

      <br />

      <input type="text" placeholder="Digite algo" />

      {/* Renderização Condicional */}
      {userIsLoggedIn ? <p>Caso: Está logado</p> : <p>Caso: Não está logado</p>}

      {/* Renderização de Lista */}
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default JsxExamples;
