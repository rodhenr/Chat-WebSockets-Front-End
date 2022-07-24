import React from "react";
import styles from "../styles/SendMessage.module.scss";

function SendMessage() {
  return (
    <div className={styles.sendMessage}>
      <input type="text" />
      <button>Enviar</button>
    </div>
  );
}

export default SendMessage;
