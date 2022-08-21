export type User = {
  id: number;
  name: string;
  avatar: string;
};

export type Conversation = {
  users: number[];
  messages: Message[];
};

export type Message = {
  sender: number;
  message: string;
  date: string;
};
export let Users = [
  {
    id: 1,
    name: "Vyacheslav",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com14",
  },
  {
    id: 2,
    name: "Oleg Smyrnov",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com15",
  },
  {
    id: 3,
    name: "Semen Ivanov",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com17",
  },
  {
    id: 4,
    name: "Irina Petrova",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com21",
  },
  {
    id: 5,
    name: "Marina Vasilchenko",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com22",
  },
  {
    id: 6,
    name: "Josephine",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com24",
  },
  {
    id: 7,
    name: "Simon",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com27",
  },
  {
    id: 8,
    name: "Max",
    avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com28",
  },
];

export let Conversations = [
  {
    users: [1, 2],
    messages: [
      {
        sender: 1,
        message: "Hello how are you ?",
        date: "2022-08-19T05:42:24.516Z",
      },
      {
        sender: 2,
        message: "I am fine, what about you ?",
        date: "2022-08-19T06:42:24.516Z",
      },
      {
        sender: 2,
        message: "Are you here ?",
        date: "2022-08-19T06:44:24.516Z",
      },
      {
        sender: 1,
        message: "Yes , just a sec",
        date: "2022-08-19T06:47:24.516Z",
      },
    ],
  },
  {
    users: [1, 4],
    messages: [
      {
        sender: 1,
        message: "Do you like coffe ?",
        date: "2022-08-19T06:42:24.516Z",
      },
      {
        sender: 4,
        message: "Not really. Why ?",
        date: "2022-08-19T07:42:24.516Z",
      },
      {
        sender: 1,
        message:
          "Just asking. I had a very strange conversation about it with my uncle.Never mind",
        date: "2022-08-19T08:42:24.516Z",
      },
    ],
  },
  {
    users: [1, 5],
    messages: [
      {
        sender: 1,
        message: "How it's going?",
        date: "2022-08-19T10:42:24.516Z",
      },
      {
        sender: 5,
        message: "I am hungry",
        date: "2022-08-19T11:42:24.516Z",
      },
    ],
  },
  {
    users: [1, 6],
    messages: [
      {
        sender: 1,
        message: "What kind of food do you like to eat?",
        date: "2022-08-19T10:42:24.516Z",
      },
      {
        sender: 6,
        message: "I like ice cream",
        date: "2022-08-19T11:43:24.516Z",
      },
      {
        sender: 1,
        message: "I am vegeterian",
        date: "2022-08-19T11:42:54.516Z",
      },
      {
        sender: 6,
        message: "Fruit is my favourite",
        date: "2022-08-19T11:43:34.516Z",
      },
    ],
  },
  {
    users: [1, 7],
    messages: [
      {
        sender: 1,
        message: "Are you free this weekend?",
        date: "2022-08-19T10:42:24.516Z",
      },
      {
        sender: 7,
        message: "I think so, why?",
        date: "2022-08-19T12:43:24.516Z",
      },
      {
        sender: 1,
        message: "Want to see a movie?",
        date: "2022-08-19T12:45:54.516Z",
      },
      {
        sender: 7,
        message: "Sure",
        date: "2022-08-19T12:55:34.516Z",
      },
    ],
  },
  {
    users: [1, 8],
    messages: [
      {
        sender: 1,
        message:
          "Hey, so I’m having a party at my place next weekend. Do you want to come?",
        date: "2022-08-19T10:42:24.516Z",
      },
      {
        sender: 8,
        message: "Sure! That sounds like fun. Who else is coming?",
        date: "2022-08-19T12:43:24.516Z",
      },
      {
        sender: 1,
        message:
          "Let’s see. I think it’s going to be Jerome, Talia, Anna, Juan, Celeste, Michelle and possibly Jamie. It’s not really going to be a party, more like a small get-together. I’m cooking dinner, and we can just hang out.",
        date: "2022-08-19T12:45:54.516Z",
      },
      {
        sender: 8,
        message: "What time should I be there?",
        date: "2022-08-19T12:55:34.516Z",
      },
      {
        sender: 1,
        message: "Oh, anytime between 6 and 7 would be fine.",
        date: "2022-08-19T12:55:59.516Z",
      },
    ],
  },
];
