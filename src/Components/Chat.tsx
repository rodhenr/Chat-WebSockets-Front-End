import Message from "./Message";
import styles from "../styles/Chat.module.scss";
import SendMessage from "./SendMessage";
import Header from "./Header";

interface Props {
  messages: string[];
  msgSend: Function;
}

function Chat({ messages, msgSend }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.messages}>
        {messages.map((i) => (
          <Message msg={i} user={false} />
        ))}
      </div>
      <SendMessage msgSend={msgSend} />
    </div>
  );
}

export default Chat;

/*
<div className={styles.messages}>
        <Message msg={"Uma teoria de One Piece"} user={true} />
        <Message msg={"Qual teoria?"} user={false} />
        <Message msg={"blablabla"} user={true} />
        <Message msg={"bla"} user={true} />
        <Message
          msg={
            " asdas das dasdasasdasdasdasd asas das as asdas d asd asd asasas as asdas dassadasasd as"
          }
          user={false}
        />
        <Message msg={"Userteste"} user={true} />
        <Message
          msg={
            "asdasdasdasdasdasdas dasd as d as as as as das asdad dfds sd fdsfsdf sdfsdfsdf sd"
          }
          user={false}
        />
        <Message msg={"lorem ipsum"} user={true} />
        <Message msg={"blablabla"} user={true} />
        <Message msg={"bla"} user={true} />
        <Message
          msg={
            " asdas das dasdasasdasdasdasd asas das as asdas d asd asd asasas as asdas dassadasasd as"
          }
          user={false}
        />
        <Message msg={"Userteste"} user={true} />
        <Message
          msg={
            "asdasdasdasdasdasdas dasd as d as as as as das asdad dfds sd fdsfsdf sdfsdfsdf sd"
          }
          user={false}
        />
        <Message msg={"lorem ipsum"} user={true} />
      </div>

*/
