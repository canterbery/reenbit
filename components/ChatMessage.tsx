import { prepareMessageDateWithTime } from "../helpers/prepareMessageDate";
import styles from "../styles/ChatMessage.module.css";
import Image from "next/image";

type Props = {
  avatar?: string;
  side: "left" | "right";
  message: string;
  date: string;
};

export const ChatMessage: React.FC<Props> = ({
  avatar,
  side,
  message,
  date,
}) => {
  return (
    <div
      className={
        styles.container + " " + (side === "left" ? styles.left : styles.right)
      }
    >
      {side === "left" && avatar && (
        <Image src={avatar} alt="companion avatar" className={styles.avatar} />
      )}
      <div>
        <div
          className={
            styles.message +
            " " +
            (side === "left" ? styles.companionMessage : styles.userMessage)
          }
        >
          {message}
        </div>
        <div
          className={
            styles.messageTime +
            " " +
            (side === "left" ? styles.left : styles.right)
          }
        >
          {prepareMessageDateWithTime(date)}
        </div>
      </div>
    </div>
  );
};
