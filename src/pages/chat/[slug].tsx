import styles from "./chat.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "../../contexts/ChatsContext";
import { api } from "../../services/api";

export default function Chat() {
  const {
    fullData,
    tempMessage,
    setTempMessage,
    channelsMessageHistory,
    currentChatIndex,
    setShouldUpdate,
    shouldUpdate,
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
          sender: "Daniel Kaneko",
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
    <div className={styles.chat}>
      <div className={styles.messageHistory}>
        <form onSubmit={(data) => handleNewMessageSubmit(data)}>
          <input
            type="text"
            id="sendMessage"
            placeholder="Mensagem..."
            value={tempMessage}
            onChange={(data) => handleMessageChange(data.target.value)}
          />
          <button type="submit">
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
                  <div key={index} className={styles.messageContainer}>
                    <div className={styles.message}>
                      <h5>{content.content}</h5>
                    </div>
                    <h6>{content.published_at}</h6>
                  </div>
                );
              })
            )}
        </div>
      </div>
    </div>
  );
}
