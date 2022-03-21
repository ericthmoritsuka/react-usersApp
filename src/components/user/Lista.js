import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./Lista.module.css";

const Lista = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.nome} ({user.idade} anos)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default Lista;
