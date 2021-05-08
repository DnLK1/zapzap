import "../styles/globals.scss";
import { Menu } from "../components/Menu";
import { ChatInfo } from "../components/ChatInfo";
import styles from "../styles/app.module.scss";
import { ChatContextProvider } from "../contexts/ChatsContext";

function MyApp({ Component, pageProps }) {
  return (
    <ChatContextProvider>
      <div className={styles.appWrapper}>
        <Menu />
        <main>
          <Component {...pageProps} />
        </main>
        <ChatInfo />
      </div>
    </ChatContextProvider>
  );
}

export default MyApp;
