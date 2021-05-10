import { useChat } from "../contexts/ChatsContext";
import styles from "../styles/configurations.module.scss";
import Link from "next/link";

export default function Home() {
  const { setUser, setAvatar, tempAvatar, setTempAvatar } = useChat();

  function handleSelectAvatar(event) {
    event.preventDefault();
    setAvatar(tempAvatar);
  }

  function handleLogoff() {
    setUser("");
  }

  function handleSetTempAvatar(event) {
    setTempAvatar(event);
  }

  return (
    <div className={styles.configurationsContainer}>
      <div className={styles.pagesButtons}>
        <Link href={"/"}>
          <h4>&#60; Tela inicial</h4>
        </Link>
        <Link href={"/editchannels"}>
          <h4>Editar canais &#62;</h4>
        </Link>
      </div>
      <h4>Escolha um avatar</h4>

      <form onSubmit={(data) => handleSelectAvatar(data)}>
        <div>
          <input
            type="radio"
            id="guy-1"
            name="avatar"
            value="/avatars/guy-1.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/guy-1.png" />
        </div>
        <div>
          <input
            type="radio"
            id="guy-2"
            name="avatar"
            value="/avatars/guy-2.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/guy-2.png" />
        </div>
        <div>
          <input
            type="radio"
            id="guy-3"
            name="avatar"
            value="/avatars/guy-3.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/guy-3.png" />
        </div>
        <div>
          <input
            type="radio"
            id="guy-4"
            name="avatar"
            value="/avatars/guy-4.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/guy-4.png" />
        </div>
        <div>
          <input
            type="radio"
            id="girl-1"
            name="avatar"
            value="/avatars/girl-1.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/girl-1.png" />
        </div>
        <div>
          <input
            type="radio"
            id="girl-2"
            name="avatar"
            value="/avatars/girl-2.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/girl-2.png" />
        </div>
        <div>
          <input
            type="radio"
            id="girl-3"
            name="avatar"
            value="/avatars/girl-3.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/girl-3.png" />
        </div>
        <div>
          <input
            type="radio"
            id="girl-4"
            name="avatar"
            value="/avatars/girl-4.png"
            onChange={(data) => handleSetTempAvatar(data.target.value)}
          />
          <img className={styles.avatarImage} src="/avatars/girl-4.png" />
        </div>
        <button type="submit">Salvar</button>
      </form>
      <Link href={"/"}>
        <button className={styles.logoffButton} onClick={() => handleLogoff()}>
          Desconectar
        </button>
      </Link>
    </div>
  );
}
