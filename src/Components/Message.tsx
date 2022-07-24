import styles from "../styles/Message.module.scss";

interface Props {
  msg: string;
  user: string;
}

function Message({ msg, user }: Props) {
  return user === "me" ? (
    <div className={styles.myContainer}>
      <p className={styles.myMessage}>{msg}</p>
    </div>
  ) : (
    <div className={styles.userContainer}>
      <p className={styles.userMessage}>{msg}</p>
    </div>
  );
}

export default Message;
