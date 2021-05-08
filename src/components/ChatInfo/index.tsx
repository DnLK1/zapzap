import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useChat } from "../../contexts/ChatsContext";
import { api } from "../../services/api";

export function ChatInfo() {
  const {
    user,
    membersList,
    currentChatIndex,
    fullData,
    shouldUpdate,
    setShouldUpdate,
    tempMember,
    setTempMember,
    enableFields,
  } = useChat();

  function handleNewMemberToGroup(event) {
    event.preventDefault();

    const newMember = event.target.addToGroup.value;
    const channelID = fullData[currentChatIndex].id;
    const attChannel = {
      id: channelID,
      title: fullData[currentChatIndex].title,
      members: [...fullData[currentChatIndex].members, newMember],
      messages: fullData[currentChatIndex].messages,
    };

    api.put(`channels/${channelID}`, attChannel);

    setShouldUpdate(shouldUpdate + 1);
    setTempMember("");
  }

  function handleMemberFieldChange(data) {
    setTempMember(data);
  }

  return (
    <div
      className={user === "" ? styles.displayNone : styles.chatInfoContainer}
    >
      <div className={styles.chatInfo}>
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

      <form
        className={enableFields ? styles.displayNone : ""}
        onSubmit={(data) => handleNewMemberToGroup(data)}
      >
        <input
          type="text"
          id="addToGroup"
          placeholder="Adicionar pessoas"
          value={tempMember}
          onChange={(data) => handleMemberFieldChange(data.target.value)}
          disabled={enableFields}
        />
        <button type="submit" disabled={enableFields}>
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
