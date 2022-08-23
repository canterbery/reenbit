import { Conversations } from "../mock-data/Database";
export const sortConversationsByDate = (
  conversations: typeof Conversations
) => {
  return conversations.sort((a, b) => {
    if (
      new Date(b.messages[b.messages.length - 1].date) >
      new Date(a.messages[a.messages.length - 1].date)
    ) {
      return 1;
    } else return -1;
  });
};
