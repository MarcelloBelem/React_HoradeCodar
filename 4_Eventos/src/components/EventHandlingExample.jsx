import { useState } from "react";

const EventHandlingExample = () => {
  const HandleClick = () => {
    alert("Clicou Evento");
  };

  const handleGreet = (name) => {
    alert(`Olá ${name}`);
  };

  const [name, setName] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    alert(`Enviado  ${name}`);
  };

  return (
    <div>
      <button onClick={() => alert("Clicou")}> Clique aqui</button>
      <br />
      <button onClick={HandleClick}> Clique aqui</button>
      <br />
      <button onClick={() => handleGreet("EU")}>Dizer Olá Ana</button>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default EventHandlingExample;
