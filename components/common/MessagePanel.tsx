import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage, addNotification } from "../../redux/chatDataSlice";
import { RootState } from "../../redux/store.type";
import styles from "../../styles/common/MessagePanel.module.css";
import boopSfx from "../../assets/notification.mp3";
import useSound from "use-sound";

type Props = {
  sender: number;
  receiver: number;
};

export const MessagePanel: React.FC<Props> = ({ sender, receiver }) => {
  const [notification] = useSound(boopSfx, { volume: 0.25 });
  const inputElement = useRef<HTMLTextAreaElement>(null);
  const dispatch = useDispatch();
  let conversationId = useSelector(
    (state: RootState) =>
      state.chatData.currentUserData.currentConversationIndex
  );

  const generateResponse = (sender: number, receiver: number) => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((res) => res.json())
      .then((data) => {
        dispatch(
          addMessage({
            message: {
              sender: receiver,
              // @ts-ignore
              message: data.value,
              date: new Date().toISOString(),
            },
            sender: sender,
            receiver: receiver,
          })
        );
      })
      .then(() => dispatch(addNotification(receiver)))
      .then(() => notification());
  };

  const sendMessage = (sender: number, receiver: number) => {
    dispatch(
      addMessage({
        message: {
          sender: sender,
          message:
            inputElement.current == null ? "" : inputElement.current.value,
          date: new Date().toISOString(),
        },
        sender: sender,
        receiver: receiver,
      })
    );
    if (inputElement.current !== null) inputElement.current.value = "";
    setTimeout(() => generateResponse(sender, receiver), 15000);
  };

  return (
    <div className={styles.container}>
      <textarea
        className={styles.messageInput}
        placeholder="Type your message"
        maxLength={256}
        ref={inputElement}
      />
      <button
        className={styles.sendButton}
        onClick={() => sendMessage(sender, receiver)}
      >
        <svg
          width="28"
          height="26"
          viewBox="0 0 28 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.1728 13.6147C27.2361 13.5639 27.2936 13.5064 27.3444 13.4431C27.3666 13.4258 27.3865 13.4059 27.4038 13.3837C27.4442 13.2802 27.4686 13.1711 27.4762 13.0601C27.4714 12.9488 27.4467 12.8392 27.4033 12.7365L27.3439 12.677C27.3045 12.5666 27.2463 12.4638 27.172 12.3731L27.1323 12.3335C27.0573 12.2644 26.9728 12.2065 26.8813 12.1616L1.64007 0.396955C1.46817 0.322349 1.27786 0.301131 1.09388 0.336054C0.909899 0.370978 0.740741 0.460431 0.608378 0.592794C0.476014 0.725158 0.38656 0.894317 0.351637 1.0783C0.316712 1.26228 0.337931 1.45258 0.412537 1.62449L5.20774 13.0194L0.427241 24.408C0.356294 24.5781 0.337309 24.7655 0.372683 24.9465C0.408057 25.1275 0.496202 25.2941 0.626014 25.4252C0.762291 25.556 0.934956 25.6425 1.12124 25.6732C1.30753 25.704 1.4987 25.6776 1.66954 25.5975L26.8956 13.8654C26.9884 13.812 27.0692 13.7402 27.1332 13.6543C27.1478 13.6426 27.1611 13.6293 27.1728 13.6147ZM3.03525 3.09886L22.2518 12.0596L6.80525 12.043L3.03525 3.09886ZM3.04803 22.9106L6.80646 13.9185L22.253 13.9219L3.04803 22.9106Z"
            fill="#175676"
          />
        </svg>
      </button>
    </div>
  );
};
