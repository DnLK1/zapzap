import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faPlus, faCog } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useChat } from "../../contexts/ChatsContext";
import { api } from "../../services/api";
import { useEffect } from "react";

export function Menu() {
  const {
    avatar,
    user,
    fullData,
    setFullData,
    setChannelsMessageHistory,
    setMembersList,
    shouldUpdate,
    setShouldUpdate,
    currentChatIndex,
    setCurrentChatIndex,
    tempGroup,
    setTempGroup,
    setEnableFields,
  } = useChat();

  useEffect(async () => {
    const { data } = await api.get("channels");

    setFullData(data);
  }, []);

  useEffect(async () => {
    const { data } = await api.get("channels");

    const newMessages = data.map((channel) => channel.messages);
    const newMessagesArray = [...newMessages];

    const newMembers = data.map((channel) => channel.members);
    const newMembersArray = [...newMembers];

    setChannelsMessageHistory(newMessagesArray);
    setMembersList(newMembersArray);
    setFullData(data);
  }, [shouldUpdate]);

  useEffect(async () => {
    setTimeout(() => setShouldUpdate(shouldUpdate + 1), 5000);
  }, [shouldUpdate]);

  function handleSelectChat(key) {
    setCurrentChatIndex(key);
    setEnableFields(false);
  }

  function handleNewChatSubmit(event) {
    event.preventDefault();

    const randomID =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);

    const newChatTitle = event.target.addChatButton.value;
    const newChat = {
      id: randomID,
      title: newChatTitle,
      members: [user],
      messages: [],
    };

    api.post("channels", newChat);

    setShouldUpdate(shouldUpdate + 1);
    setTempGroup("");
  }

  function handleConfigClick() {
    setCurrentChatIndex("");
  }

  function handleGroupFieldChange(data) {
    setTempGroup(data);
  }

  return (
    <div className={user === "" ? styles.displayNone : styles.menuContainer}>
      <div className={styles.profileContainer}>
        <img className={styles.avatarImage} src={avatar} />
        <div className={styles.profileDescription}>
          <h2>{user}</h2>
          <Link href={"/configurations"}>
            <FontAwesomeIcon
              icon={faCog}
              onClick={() => handleConfigClick()}
              className={styles.cogIcon}
            />
          </Link>
        </div>
      </div>

      <div className={styles.chatRooms}>
        {fullData
          .filter((channels) => channels.members.includes(user))
          .map((channel, index) => {
            const chatSlug = channel.title.replace(" ", "-").toLowerCase();

            return (
              <div
                key={index}
                className={
                  currentChatIndex !== index
                    ? styles.chatRoom
                    : styles.chatRoomActive
                }
              >
                <FontAwesomeIcon
                  icon={faComments}
                  color={currentChatIndex !== index ? "" : "#298bf3"}
                />
                <Link href={`/chat/${chatSlug}`}>
                  <h4 onClick={() => handleSelectChat(index)}>
                    {channel.title}
                  </h4>
                </Link>
              </div>
            );
          })}
      </div>
      <form onSubmit={(data) => handleNewChatSubmit(data)}>
        <input
          type="text"
          id="addChatButton"
          placeholder="Novo grupo"
          value={tempGroup}
          onChange={(data) => handleGroupFieldChange(data.target.value)}
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
