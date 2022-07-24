import Message from "./Message";
import styles from "../styles/Chat.module.scss";
import SendMessage from "./SendMessage";
import Header from "./Header";

function Chat() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.messages}>
        <Message msg={"User 1 teste"} user={true} />
        <Message
          msg={
            "User 2 a asdasdsdsadasdadasdasdsadsadasdasdasdasdasdsadasdasdasdsadasteste"
          }
          user={false}
        />
        <Message msg={"User 1 teste"} user={true} />
        <Message msg={"User 1 teste"} user={true} />
        <Message
          msg={
            "User 2 a asdasdsdsadasdadasdasdsadsadasdasdasdasdasdsadasdasdasdsadasteste"
          }
          user={false}
        />
        <Message msg={"User 1 teste"} user={true} />
        <Message msg={"User 1 teste"} user={true} />
        <Message
          msg={
            "User 2 a asdasdsdsadasdadasdasdsadsadasdasdasdasdasdsadasdasdasdsadasteste"
          }
          user={false}
        />
        <Message msg={"User 1 teste"} user={true} />
      </div>

      <SendMessage />
    </div>
  );
}

export default Chat;
