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
    console.log(tempDeletedGroup);
  }

  function handleDeleteChats(event) {
    event.preventDefault();
    const deleteObject = fullData
      .filter((channels) => channels.title === tempDeletedGroup)
      .map((channel) => channel.id);
    const deleteID = deleteObject[0];
    api.delete(`channels/${deleteID}`);

    setTempDeletedGroup("nenhum");

    setShouldUpdate(shouldUpdate + 1);
  }

  return (
    <div className={styles.editChannelsContainer}>
      <div className={styles.pagesButtons}>
        <Link href={"/configurations"}>
          <h4>&#60; Voltar</h4>
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
          value={tempDeletedGroup}
        >
          <option disabled selected value="nenhum">
            Escolha um canal
          </option>
          {fullData
            .filter((channels) =>
              channels.members.map((members) => members.user).includes(user)
            )
            .map((channel, index) => {
              return (
                <option key={index} value={channel.title}>
                  {channel.title}
                </option>
              );
            })}
        </select>

        <button
          className={tempDeletedGroup !== "nenhum" ? "" : styles.disabledButton}
          disabled={tempDeletedGroup !== "nenhum" ? false : true}
          type="submit"
        >
          Deletar chat
        </button>
      </form>
    </div>
  );
}
