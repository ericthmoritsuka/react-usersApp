import React, { useState, useRef } from "react";
import classes from "./NovoUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import Erro from "../UI/Erro";

const NovoUser = (props) => {
  const nomeRef = useRef();
  const idadeRef = useRef();

  // const [nome, setNome] = useState("");
  // const [idade, setIdade] = useState("");
  const [erro, setErro] = useState("");

  // const nomeHandler = (event) => {
  //   setNome(event.target.value);
  // };
  // const idadeHandler = (event) => {
  //   setIdade(event.target.value);
  // };

  const submitHandler = (event) => {
    event.preventDefault();
    const nome = nomeRef.current.value;
    const idade = idadeRef.current.value;

    if (nome.trim().length === 0 || idade.trim().length === 0) {
      setErro({
        erro: "Entrada inválida!",
        mensagem: "Os campos não podem ficar em branco",
      });
      return;
    }
    if (+idade < 1) {
      setErro({
        erro: "Idade Inválida!",
        mensagem: "Benjamin Button, é você?",
      });
      return;
    }
    props.onAdicionar(nome, idade);

    // setNome("");
    // setIdade("");
    nomeRef.current.value = "";
    idadeRef.current.value = "";
  };

  const erroHandler = () => {
    setErro(null);
  };

  return (
    <div>
      {erro && (
        <Erro
          erro={erro.erro}
          mensagem={erro.mensagem}
          onConfirma={erroHandler}
        ></Erro>
      )}
      <Card className={classes.input}>
        <form onSubmit={submitHandler}>
          <label htmlFor="nome">Nome do Usuário</label>
          <input
            type="text"
            id="nome"
            // value={nome}
            // onChange={nomeHandler}
            ref={nomeRef}
          />
          <label htmlFor="idade">Idade do Usuário</label>
          <input
            type="number"
            id="idade"
            // value={idade}
            // onChange={idadeHandler}
            ref={idadeRef}
          />
          <Button type="submit">Adicionar</Button>
        </form>
      </Card>
    </div>
  );
};

export default NovoUser;
