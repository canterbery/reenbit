import { useSelector } from "react-redux";
import { RootState } from "../redux/store.type";
import styles from "../styles/MessagesList.module.css";
import Image from "next/image";
import { GoBackButton } from "./common/GoBackButton";
import { MessagePanel } from "./common/MessagePanel";
import { MessageListData } from "./MessageListData";

type Props = {
  displayChats(): void;
  width: number;
};
export const MessagesList: React.FC<Props> = ({ displayChats, width }) => {
  const currentIndex = useSelector(
    (state: RootState) =>
      state.chatData.currentUserData.currentConversationIndex
  );

  const selectedInterlocutor = useSelector(
    (state: RootState) => state.chatData.currentUserData.selectedInterlocutor
  );

  const currentUser = useSelector(
    (state: RootState) => state.chatData.currentUserData.user
  );

  return (
    <div className={styles.container}>
      <div className={styles.listHeader}>
        {width < 768 && <GoBackButton onClick={() => displayChats()} />}
        {selectedInterlocutor && (
          <Image
            src={selectedInterlocutor?.avatar}
            alt="companion avatar"
            className={styles.avatar}
          />
        )}
        <span className={styles.username}>{selectedInterlocutor?.name}</span>
      </div>
      {currentIndex === null && <div className={styles.messages}></div>}
      {currentIndex !== null && (
        <MessageListData conversationIndex={currentIndex} />
      )}
      <div className={styles.listFooter}>
        {selectedInterlocutor && (
          <MessagePanel
            sender={currentUser.id}
            receiver={selectedInterlocutor.id}
          />
        )}
      </div>
    </div>
  );
};
