import { Message } from "../mock-data/Database";
import { findConversationByIds } from "../helpers/findConversationbyIds";
import { findUserById } from "../helpers/findUserById";
import { Conversation, Conversations } from "../mock-data/Database";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Users } from "../mock-data/Database";
import storage from "redux-persist/lib/storage";

type InitialState = {
  database: {
    users: typeof Users;
    conversations: typeof Conversations;
  };
  currentUserData: {
    user: User;
    selectedInterlocutor: User | null;
    currentConversationIndex: number | null;
    notifications: { userId: number; unreadMessages: number }[];
  };
};

const initialState: InitialState = {
  database: {
    users: Users,
    conversations: Conversations,
  },
  currentUserData: {
    user: Users[0],
    selectedInterlocutor: null,
    currentConversationIndex: null,
    notifications: [],
  },
};

const chatDataSlice = createSlice({
  name: "currentUser",
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<number>) => {
      const user = findUserById(action.payload, state.database.users);
      if (user) {
        state.currentUserData.user = user;
      }
    },
    updateDefaultUser: (state, action: PayloadAction<User>) => {
      state.database.users[0].avatar = action.payload.avatar;
      state.database.users[0].name = action.payload.name;
    },
    addConversation: (state, action: PayloadAction<Conversation>) => {
      state.database.conversations.push(action.payload);
    },
    addUser: (state, action: PayloadAction<User>) => {
      state.database.users.push(action.payload);
    },
    setInterlocutor: (state, action: PayloadAction<User>) => {
      state.currentUserData.selectedInterlocutor = action.payload;
      const currentConversationIndex = findConversationByIds(
        state.currentUserData.user.id,
        action.payload.id,
        state.database.conversations
      );
      if (currentConversationIndex || currentConversationIndex === 0) {
        state.currentUserData.currentConversationIndex =
          currentConversationIndex;
      } else state.currentUserData.currentConversationIndex = null;
    },
    addMessage: (
      state,
      action: PayloadAction<{
        message: Message;
        sender: number;
        receiver: number;
      }>
    ) => {
      const currentConversationIndex = findConversationByIds(
        action.payload.sender,
        action.payload.receiver,
        state.database.conversations
      );
      if (currentConversationIndex || currentConversationIndex === 0) {
        state.database.conversations[currentConversationIndex].messages.push(
          action.payload.message
        );
      } else {
        state.database.conversations.push({
          users: [action.payload.sender, action.payload.receiver],
          messages: [],
        });

        state.currentUserData.currentConversationIndex =
          state.database.conversations.length - 1;

        state.database.conversations[
          state.database.conversations.length - 1
        ].messages.push(action.payload.message);
      }
    },
    addNotification: (state, action: PayloadAction<number>) => {
      const notification = state.currentUserData.notifications.find(
        (item) => item.userId === action.payload
      );

      if (notification) {
        notification.unreadMessages += 1;
      } else {
        state.currentUserData.notifications.push({
          userId: action.payload,
          unreadMessages: 1,
        });
      }
    },
    clearState: (state) => {
      storage.removeItem("persist:root");
      state = initialState;
    },
  },
});

export const {
  setCurrentUser,
  addConversation,
  addUser,
  setInterlocutor,
  addMessage,
  addNotification,
  clearState,
  updateDefaultUser,
} = chatDataSlice.actions;
export default chatDataSlice.reducer;
