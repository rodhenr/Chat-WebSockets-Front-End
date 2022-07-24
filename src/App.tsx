import Chat from "./Components/Chat";
import { w3cwebsocket as W3CWebSocket } from "websocket";
import styles from "./styles/App.module.scss";
import { useEffect, useState, useRef } from "react";

function App() {
  const [messages, setMessages] = useState<string[]>([]);
  const ws = useRef<W3CWebSocket>();

  useEffect(() => {
    ws.current = new W3CWebSocket("ws://localhost:8080");
    ws.current.onopen = () => console.log("ws opened");
    ws.current.onclose = () => console.log("ws closed");
    ws.current.onmessage = (message) => {
      setMessages((prev) => [...prev, message.data.toString()]);
    };
  }, []);

  const handleSendMessage = (message: string) => {
    if (message === "") return;
    ws.current?.send(message);
    setMessages((prev) => [...prev, message]);
  };

  return (
    <div className={styles.container}>
      <Chat msgSend={handleSendMessage} messages={messages} />
    </div>
  );
}

export default App;
