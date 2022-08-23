import styles from "../../styles/ChatItem.module.css";
import img from "../../assets/check.png";

type Props = {
  username: string;
  avatar: string;
  lastMessage?: string;
  date?: string;
  displayMessages: React.MouseEventHandler;
  unreadMessages: boolean;
  current?: boolean;
};
export const ChatItem: React.FC<Props> = ({
  username,
  avatar,
  lastMessage,
  date,
  displayMessages,
  unreadMessages,
  current,
}) => {
  return (
    <div
      className={styles.container}
      onClick={displayMessages}
      style={{ backgroundColor: current ? "lightgray" : "white" }}
    >
      <div className={styles.wrapper}>
        <div style={{ position: "relative" }}>
          <img src={avatar} alt="companion avatar" className={styles.avatar} />

          <img
            src={img.src}
            height="16"
            width="16"
            className={styles.checkMark}
          />
        </div>

        <div className={styles.username}>
          {username}
          <div className={styles.lastMessage}>{lastMessage}</div>
        </div>
      </div>
      <div className={styles.messageDate}>{date}</div>
    </div>
  );
};
