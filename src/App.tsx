import Chat from "./Components/Chat";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import styles from "./styles/App.module.scss";
import { useEffect, useState, useRef } from "react";

interface Message {
  msg: string;
  user: string;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const ws = useRef<W3CWebSocket>();

  useEffect(() => {
    ws.current = new W3CWebSocket("ws://localhost:8080");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    ws.current.onmessage = (message) => {
      console.log(message);
      setMessages((prev) => [
        ...prev,
        { msg: message.data.toString(), user: "user" },
      ]);
    };

    return () => {
      ws.current?.close();
    };
  }, []);

  const handleSendMessage = (message: string) => {
    ws.current?.send(message);
    setMessages((prev) => [...prev, { msg: message, user: "me" }]);
  };

  return (
    <div className={styles.container}>
      <Chat msgSend={handleSendMessage} messages={messages} />
    </div>
  );
}

export default App;
