import styles from "../../styles/ChatItem.module.css";
import Image from "next/image";

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
        <Image src={avatar} alt="companion avatar" className={styles.avatar} />

        <div className={styles.username}>
          {username}
          <div className={styles.lastMessage}>{lastMessage}</div>
        </div>
      </div>
      <div className={styles.messageDate}>{date}</div>
    </div>
  );
};
