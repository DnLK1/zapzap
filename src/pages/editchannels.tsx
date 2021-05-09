import { useChat } from "../contexts/ChatsContext";
import styles from "../styles/editchannels.module.scss";
import Link from "next/link";
import { api } from "../services/api";

export default function Home() {
  const {
    user,
    fullData,
    tempDeletedGroup,
    setTempDeletedGroup,
    shouldUpdate,
    setShouldUpdate,
  } = useChat();

  function handleChangeOption(data) {
    setTempDeletedGroup(data);
  }

  function handleDeleteChats(event) {
    event.preventDefault();
    const deleteObject = fullData
      .filter((channels) => channels.title === tempDeletedGroup)
      .map((channel) => channel.id);
    const deleteID = deleteObject[0];
    api.delete(`channels/${deleteID}`);

    setShouldUpdate(shouldUpdate + 1);
  }

  return (
    <div className={styles.editChannelsContainer}>
      <div className={styles.pagesButtons}>
        <Link href={"/configurations"}>
          <h4>&#60; Tela inicial</h4>
        </Link>
        <Link href={"/configurations"}>
          <h4>Editar avatar &#62;</h4>
        </Link>
      </div>
      <h4>Edite seus canais</h4>
      <form
        className={styles.deleteForm}
        onSubmit={(event) => handleDeleteChats(event)}
      >
        <select
          id="deletechats"
          name="deletechats"
          onChange={(data) => handleChangeOption(data.target.value)}
        >
          {fullData
            .filter((channels) => channels.members.includes(user))
            .map((channel, index) => {
              return (
                <option key={index} value={channel.title}>
                  {channel.title}
                </option>
              );
            })}
        </select>

        <button type="submit">Deletar chat</button>
      </form>
    </div>
  );
}
