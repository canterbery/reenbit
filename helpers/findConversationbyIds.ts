import { Conversation } from "../mock-data/Users";

export const findConversationByIds = (
  userId: number,
  interlocutorId: number,
  conversations: Conversation[]
) => {
  const result = conversations.find(
    (item) => item.users.includes(userId) && item.users.includes(interlocutorId)
  );
  if (result) {
    return conversations.indexOf(result);
  } else return null;
};
