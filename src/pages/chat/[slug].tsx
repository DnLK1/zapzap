import styles from "./chat.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "../../contexts/ChatsContext";
import { api } from "../../services/api";
import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";

export default function Chat() {
  const {
    user,
    avatar,
    fullData,
    tempMessage,
    setTempMessage,
    channelsMessageHistory,
    currentChatIndex,
    setShouldUpdate,
    shouldUpdate,
    enableFields,
  } = useChat();

  function handleNewMessageSubmit(event) {
    event.preventDefault();

    const currentDate = format(new Date(), "dd MMM, kk:mm", {
      locale: ptBR,
    });
    const avatarsNotToUpdate = fullData[currentChatIndex].members.filter(
      (members) => !members.user.includes(user)
    );
    const avatarToUpdate = { user: user, avatar: avatar };
    const oldMessages = fullData[currentChatIndex].messages;
    const newMessage = event.target.sendMessage.value;
    const channelID = fullData[currentChatIndex].id;
    const attChannel = {
      id: channelID,
      title: fullData[currentChatIndex].title,
      members: [avatarToUpdate, ...avatarsNotToUpdate],
      messages: [
        {
          sender: user,
          content: newMessage,
          published_at: currentDate,
          channel_id: channelID,
        },
        ...oldMessages,
      ],
    };

    api.put(`channels/${channelID}`, attChannel);

    setShouldUpdate(shouldUpdate + 1);
    setTempMessage("");
  }

  function handleMessageChange(data) {
    setTempMessage(data);
  }

  return (
    <div className={enableFields ? styles.displayNone : styles.messageHistory}>
      <form
        className={enableFields ? styles.displayNone : ""}
        onSubmit={(data) => handleNewMessageSubmit(data)}
      >
        <input
          type="text"
          id="sendMessage"
          placeholder="Mensagem..."
          value={tempMessage}
          onChange={(data) => handleMessageChange(data.target.value)}
          disabled={enableFields}
        />
        <button type="submit" disabled={enableFields}>
          <FontAwesomeIcon
            icon={faPaperPlane}
            className={styles.addIcon}
            color="#ffffff"
          />
        </button>
      </form>
      <div className={styles.messageOverflow}>
        {channelsMessageHistory
          .filter((history, index) => index === currentChatIndex)
          .map((message) =>
            message.map((content, index) => {
              return (
                <div
                  key={index}
                  className={
                    content.sender === user
                      ? styles.messageSentContainer
                      : styles.messageReceivedContainer
                  }
                >
                  <h4
                    className={
                      content.sender === user ? styles.displayNone : ""
                    }
                  >
                    {content.sender === user ? "" : content.sender}:
                  </h4>
                  <div
                    className={
                      content.sender === user
                        ? styles.messageSent
                        : styles.messageReceived
                    }
                  >
                    <h5>{content.content}</h5>
                  </div>

                  <h6>{content.published_at}</h6>
                </div>
              );
            })
          )}
      </div>
    </div>
  );
}
