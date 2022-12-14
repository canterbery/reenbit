import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleSearch, SearchResults } from "../../helpers/handleSearch";
import { sortConversationsByDate } from "../../helpers/sortConversationsByDate";
import { clearState } from "../../redux/chatDataSlice";
import { RootState } from "../../redux/store.type";
import styles from "../../styles/ChatsList.module.css";
import { LoginPanel } from "../common/LoginPanel";
import { ChatListData } from "./ChatListData";

type Props = {
  displayMessages(): void;
  width: number;
};

export const ChatsList: React.FC<Props> = ({ displayMessages, width }) => {
  const [filter, setFilter] = useState<string>("");
  const userData = useSelector(
    (state: RootState) => state.chatData.currentUserData
  );
  const users = useSelector(
    (state: RootState) => state.chatData.database.users
  );

  const conversations = sortConversationsByDate(
    useSelector((state: RootState) =>
      state.chatData.database.conversations.filter((item) =>
        item.users.includes(state.chatData.currentUserData.user.id)
      )
    )
  );
  const dispatch = useDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value.trim());
  };

  let searchResults: SearchResults = { messages: [], users: [] };
  if (filter) {
    searchResults = handleSearch(
      conversations,
      userData.user.id,
      users,
      filter
    );
  }
  return (
    <div
      className={styles.container}
      style={{ width: width < 1024 ? "100%" : "50%" }}
    >
      <div className={styles.listHeader}>
        <div style={{ display: "flex", WebkitJustifyContent: "space-between" }}>
          <img
            src={userData?.user.avatar}
            alt="companion avatar"
            onClick={() => dispatch(clearState())}
            className={styles.avatar}
          />
          <LoginPanel />
        </div>
        <span style={{ marginLeft: "10px" }}>{userData.user.name}</span>
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search or start new chat"
            onChange={(e) => handleChange(e)}
          />
        </div>
      </div>
      <div className={styles.chatsHeader}>
        <h3>Chats</h3>
      </div>
      <div className={styles.chatListWrapper}>
        {filter && (
          <ChatListData
            searchResults={searchResults}
            displayMessages={displayMessages}
            currentConversation={userData.currentConversationIndex}
          />
        )}
        {!filter && (
          <ChatListData
            conversations={conversations}
            displayMessages={displayMessages}
            currentConversation={userData.currentConversationIndex}
          />
        )}
      </div>
    </div>
  );
};
