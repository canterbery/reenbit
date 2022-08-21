import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store.type";
import styles from "../styles/MessagesList.module.css";
import { ChatMessage } from "./ChatMessage";

type Props = {
  conversationIndex: number;
};
export const MessageListData: React.FC<Props> = ({ conversationIndex }) => {
  const bottomRef = useRef<HTMLDivElement>(null);
  const messages = useSelector(
    (state: RootState) =>
      state.chatData.database.conversations[conversationIndex].messages
  );
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const selectedInterlocutor = useSelector(
    (state: RootState) => state.chatData.currentUserData.selectedInterlocutor
  );

  return (
    <div className={styles.messages}>
      {messages?.map((item) => (
        <ChatMessage
          key={Math.random()}
          avatar={
            item.sender === selectedInterlocutor?.id
              ? selectedInterlocutor.avatar
              : ""
          }
          message={item.message}
          side={item.sender === selectedInterlocutor?.id ? "left" : "right"}
          date={item.date}
        />
      ))}
      <div ref={bottomRef}></div>
    </div>
  );
};
