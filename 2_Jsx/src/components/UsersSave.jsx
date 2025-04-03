import React, { useState } from "react";

const UsersSave = () => {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, age };
    setUsers([...users, newUser]);

    setName("");
    setAge("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="date"
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button type="submit">Cadastar</button>
      </form>
      <div>
        <h3>Usuários Cadastrados:</h3>
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              {user.name} - {user.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersSave;
