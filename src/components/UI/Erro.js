import classes from "./Erro.module.css";
import Card from "./Card";
import Button from "./Button";
import ReactDOM from "react-dom";
import React from "react";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirma} />;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.erro}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.mensagem}</p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.onConfirma}>OK</Button>
      </footer>
    </Card>
  );
};

const Erro = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirma={props.onConfirma} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          erro={props.erro}
          mensagem={props.mensagem}
          onConfirma={props.onConfirma}
        />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Erro;
