import NovoUser from "./components/user/NovoUser";
import Lista from "./components/user/Lista";
import React, { useState } from "react";

const teste = [{ id: "1", nome: "teste1", idade: "34" }];

function App() {
  const [lista, setLista] = useState([]);

  const adicionarHandler = (nome, idade) => {
    setLista((prevLista) => {
      return [
        ...prevLista,
        { id: Math.random().toString(), nome: nome, idade: idade },
      ];
    });
  };

  return (
    <div>
      <NovoUser onAdicionar={adicionarHandler}></NovoUser>
      <Lista users={lista}></Lista>
    </div>
  );
}

export default App;
