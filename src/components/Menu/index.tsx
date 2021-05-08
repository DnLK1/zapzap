import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useChat } from "../../contexts/ChatsContext";
import { api } from "../../services/api";
import { useEffect } from "react";

export function Menu() {
  const {
    fullData,
    setFullData,
    chatList,
    setChatList,
    setChannelsMessageHistory,
    setMembersList,
    shouldUpdate,
    setShouldUpdate,
    currentChatIndex,
    setCurrentChatIndex,
  } = useChat();

  useEffect(async () => {
    const { data } = await api.get("channels");

    setFullData(data);
  }, []);

  useEffect(async () => {
    const { data } = await api.get("channels");

    const newChannels = data.map((channel) => channel.title);
    const newChannelsArray = [...newChannels];

    const newMessages = data.map((channel) => channel.messages);
    const newMessagesArray = [...newMessages];

    const newMembers = data.map((channel) => channel.members);
    const newMembersArray = [...newMembers];

    setChannelsMessageHistory(newMessagesArray);
    setMembersList(newMembersArray);
    setChatList(newChannelsArray);
    setFullData(data);
  }, [shouldUpdate]);

  function handleSelectChat(key) {
    setCurrentChatIndex(key);
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
      members: ["Daniel Kaneko"],
      messages: [],
    };

    api.post("channels", newChat);

    setShouldUpdate(shouldUpdate + 1);
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.profileContainer}>
        <img className={styles.avatarImage} src="/avatars/girl-4.png" />
        <h2>Daniel Kaneko</h2>
      </div>

      <div className={styles.chatRooms}>
        {chatList.map((channel, index) => {
          const chatSlug = channel.replace(" ", "-").toLowerCase();

          return (
            <div
              key={index}
              className={
                currentChatIndex == index
                  ? styles.chatRoomActive
                  : styles.chatRoom
              }
            >
              <FontAwesomeIcon
                icon={faComments}
                color={currentChatIndex == index ? "#298bf3" : ""}
              />
              <Link href={`/chat/${chatSlug}`}>
                <h4 onClick={() => handleSelectChat(index)}>{channel}</h4>
              </Link>
            </div>
          );
        })}
      </div>
      <form onSubmit={(data) => handleNewChatSubmit(data)}>
        <input type="text" id="addChatButton" placeholder="Novo grupo" />
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
