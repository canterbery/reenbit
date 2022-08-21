import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import { ChatsList } from "../components/ChatList/ChatsList";
import { MessagesList } from "../components/MessagesList";
import useWindowDimensions from "../helpers/useWindowDimensions";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [view, setView] = useState<"chats" | "messages">("chats");
  const { height, width } = useWindowDimensions();

  const displayMessages = () => {
    setView("messages");
  };
  const displayChats = () => {
    setView("chats");
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ReenBit Test Task</title>
        <meta name="description" content="test task" />
      </Head>
      {(view === "chats" || width >= 768) && (
        <ChatsList displayMessages={displayMessages} />
      )}
      {(view === "messages" || width >= 768) && (
        <MessagesList displayChats={displayChats} width={width} />
      )}
    </div>
  );
};

export default Home;
