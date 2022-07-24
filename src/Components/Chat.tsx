import Message from "./Message";

import SendMessage from "./SendMessage";
import Header from "./Header";
import { v4 as uuidv4 } from "uuid";

import styles from "../styles/Chat.module.scss";

interface Msg {
  msg: string;
  user: string;
}

interface Props {
  messages: Msg[];
  msgSend: Function;
}

function Chat({ messages, msgSend }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.messages}>
        {messages.map((i) => (
          <Message key={uuidv4()} msg={i.msg} user={i.user} />
        ))}
      </div>
      <SendMessage msgSend={msgSend} />
    </div>
  );
}

export default Chat;
