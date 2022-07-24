import React, { useState } from "react";
import styles from "../styles/SendMessage.module.scss";

interface Props {
  msgSend: Function;
}

function SendMessage({ msgSend }: Props) {
  const [input, setInput] = useState("");

  return (
    <div className={styles.sendMessage}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => msgSend(input)}>Enviar</button>
    </div>
  );
}

export default SendMessage;
