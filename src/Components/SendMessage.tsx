import React, { useState } from "react";
import styles from "../styles/SendMessage.module.scss";

interface Props {
  msgSend: Function;
}

function SendMessage({ msgSend }: Props) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input === "") return;
    msgSend(input);
    setInput("");
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    console.log();
    if (e.key === "Enter") {
      handleSend();
    } else {
      return;
    }
  };

  return (
    <div className={styles.sendMessage}>
      <input
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleEnter}
        type="text"
        value={input}
      />
      <button onClick={handleSend}>Enviar</button>
    </div>
  );
}

export default SendMessage;
