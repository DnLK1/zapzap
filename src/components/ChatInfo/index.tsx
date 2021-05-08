import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "../../contexts/ChatsContext";

export function ChatInfo() {
  const { membersList, currentChatIndex } = useChat();

  return (
    <div className={styles.chatInfoContainer}>
      <div className={styles.addToChatContainer}>
        <h2>Participantes</h2>

        {membersList
          .filter((members, index) => index === currentChatIndex)
          .map((membersArray) =>
            membersArray.map((member, index) => {
              return (
                <div key={index} className={styles.profileContainer}>
                  <img src="/avatars/girl-4.png" />
                  <p>{member}</p>
                </div>
              );
            })
          )}
      </div>

      <form>
        <input
          type="text"
          id="addToGroupButton"
          placeholder="Adicionar pessoas"
        />
        <button type="submit">
          <FontAwesomeIcon
            icon={faPlus}
            className={styles.addIcon}
            color="#ffffff"
          />
        </button>
      </form>
    </div>
  );
}
