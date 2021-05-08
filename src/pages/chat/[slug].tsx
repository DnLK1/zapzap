import styles from "./chat.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "../../contexts/ChatsContext";
import { api } from "../../services/api";

export default function Chat() {
  const {
    user,
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

    const oldMessages = fullData[currentChatIndex].messages;
    const newMessage = event.target.sendMessage.value;
    const channelID = fullData[currentChatIndex].id;
    const attChannel = {
      id: channelID,
      title: fullData[currentChatIndex].title,
      members: fullData[currentChatIndex].members,
      messages: [
        {
          sender: user,
          content: newMessage,
          published_at: "2021-01-22 16:35:40",
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
                  <div
                    className={
                      content.sender === user
                        ? styles.messageSent
                        : styles.messageReceived
                    }
                  >
                    <h5>{content.content}</h5>
                  </div>

                  <h6
                    className={
                      content.sender === user ? styles.displayNone : ""
                    }
                  >
                    {content.sender === user ? "" : content.sender}
                  </h6>
                  <h6>{content.published_at}</h6>
                </div>
              );
            })
          )}
      </div>
    </div>
  );
}
