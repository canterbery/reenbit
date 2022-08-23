import type { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import Head from "next/head";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChatsList } from "../components/ChatList/ChatsList";
import { MessagesList } from "../components/MessagesList";
import useWindowDimensions from "../helpers/useWindowDimensions";
import { setCurrentUser, updateDefaultUser } from "../redux/chatDataSlice";
import styles from "../styles/Home.module.css";

type Props = {
  session: Session;
};

const Home: NextPage<Props> = ({ session }) => {
  const [view, setView] = useState<"chats" | "messages">("chats");
  const { height, width } = useWindowDimensions();
  const dispatch = useDispatch();

  if (session?.user) {
    dispatch(
      updateDefaultUser({
        id: 1,
        name: session.user.name!,
        avatar: session.user.image!,
      })
    );
    dispatch(setCurrentUser(1));
  }
  if (!session?.user) {
    dispatch(
      updateDefaultUser({
        id: 1,
        name: "Anonymous",
        avatar: "https://i.pravatar.cc/150?u=fake@pravatar.com14",
      })
    );
    dispatch(setCurrentUser(1));
  }

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
        <ChatsList displayMessages={displayMessages} width={width} />
      )}
      {(view === "messages" || width >= 768) && (
        <MessagesList displayChats={displayChats} width={width} />
      )}
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { res, req } = context;
  const session = await getSession(context);

  if (!session) {
    res.writeHead(307, { location: "/login" });
    res.end();
    return { props: {} };
  }
  return {
    props: { session },
  };
};
