import { useDispatch, useSelector } from "react-redux";
import { findUserById } from "../../helpers/findUserById";
import { SearchResults } from "../../helpers/handleSearch";
import { prepareMessageDate } from "../../helpers/prepareMessageDate";
import { Conversation } from "../../mock-data/Users";
import { setInterlocutor } from "../../redux/chatDataSlice";
import { RootState } from "../../redux/store.type";
import { ChatItem } from "./ChatItem";

type Props = {
  conversations?: Conversation[];
  displayMessages(): void;
  searchResults?: SearchResults;
  currentConversation: number | null;
};

export const ChatListData: React.FC<Props> = ({
  conversations,
  displayMessages,
  searchResults,
  currentConversation,
}) => {
  const dispatch = useDispatch();
  const database = useSelector((state: RootState) => state.chatData.database);

  const userData = useSelector(
    (state: RootState) => state.chatData.currentUserData
  );
  return (
    <>
      {conversations &&
        conversations.map((item) => {
          const oppId = item.users.find(
            (userId) => userId !== userData.user.id
          );
          if (!oppId) return <div></div>;
          const user = findUserById(oppId, database.users);
          if (!user) return <div></div>;
          const unread = userData.notifications.find(
            (item) => item.userId === user.id
          );
          return (
            <ChatItem
              key={Math.random()}
              avatar={user.avatar}
              username={user.name}
              lastMessage={item.messages[item.messages.length - 1].message}
              date={prepareMessageDate(
                item.messages[item.messages.length - 1].date
              )}
              displayMessages={() => {
                dispatch(setInterlocutor(user));
                displayMessages();
              }}
              unreadMessages={unread ? true : false}
              current={
                database.conversations.indexOf(item) === currentConversation
                  ? true
                  : false
              }
            />
          );
        })}

      {searchResults &&
        searchResults.users.map((item) => (
          <ChatItem
            key={Math.random()}
            avatar={item.avatar}
            username={item.name}
            unreadMessages={false}
            displayMessages={() => {
              dispatch(setInterlocutor(item));
              displayMessages();
            }}
          />
        ))}
      {searchResults &&
        searchResults.messages.map((item) => {
          const user = findUserById(item.sender, database.users);
          if (!user) return <div></div>;

          return (
            <ChatItem
              key={Math.random()}
              avatar={user.avatar}
              username={user.name}
              unreadMessages={false}
              displayMessages={() => {
                dispatch(setInterlocutor(user));
                displayMessages();
              }}
              lastMessage={item.message}
              date={prepareMessageDate(item.date)}
            />
          );
        })}
    </>
  );
};
