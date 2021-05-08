import { useChat } from "../contexts/ChatsContext";
import styles from "../styles/Home.module.scss";

export default function Home() {
  const { user, setUser } = useChat();

  function handleSetUsername(event) {
    event.preventDefault();
    setUser(event.target.addUsername.value);
  }

  return (
    <div className={styles.firstInstructions}>
      <div className={user === "" ? styles.displayForm : styles.displayNone}>
        <form onSubmit={(data) => handleSetUsername(data)}>
          <input
            type="text"
            id="addUsername"
            placeholder="Escolha um nome de Usuário"
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
      <h4 className={user === "" ? styles.displayNone : ""}>
        Oie!
        <br />
        Crie ou selecione uma nova sala para começar :)
      </h4>
    </div>
  );
}
