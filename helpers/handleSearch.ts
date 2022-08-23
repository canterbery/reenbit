import { Conversations, Message, Users } from "../mock-data/Database";

export type SearchResults = {
  messages: Message[];
  users: typeof Users;
};

export const findMessages = (
  conversations: typeof Conversations,
  currentUser: number,
  filter: string
) => {
  let result: Message[] = [];

  conversations.forEach((item) => {
    item.messages.forEach((message) => {
      if (
        message.sender !== currentUser &&
        message.message.toLowerCase().includes(filter.toLowerCase())
      ) {
        result.push(message);
      }
    });
  });
  return result;
};

export const findNewContacts = (
  users: typeof Users,
  currentUser: number,
  filter: string
) => {
  let filteredUsers: typeof Users = [];
  users.forEach((user) => {
    if (
      user.name.toLowerCase().includes(filter.toLowerCase()) &&
      user.id !== currentUser
    )
      filteredUsers.push(user);
  });
  return filteredUsers;
};

export const handleSearch = (
  conversations: typeof Conversations,
  currentUser: number,
  users: typeof Users,
  filter: string
): SearchResults => {
  return {
    messages: findMessages(conversations, currentUser, filter),
    users: findNewContacts(users, currentUser, filter),
  };
};
